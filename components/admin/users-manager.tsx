'use client'

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { User } from "firebase/auth"

interface UserData {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  role: "user" | "admin"
  membership?: string
  bookedClasses?: string[]
  createdAt: Date
}

export function UsersManager() {
  const { getAllUsers } = useAuth()
  const [users, setUsers] = useState<UserData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getAllUsers()
        setUsers(allUsers)
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [getAllUsers])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.uid}>
                <td className="py-2 px-4 border-b">{user.displayName}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
