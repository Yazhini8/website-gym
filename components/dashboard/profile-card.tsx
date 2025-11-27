"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth-context"
import { doc, updateDoc } from "firebase/firestore"
import { updateProfile } from "firebase/auth"
import { db } from "@/lib/firebase"
import { User, Mail, Calendar, Edit, Loader2 } from "lucide-react"

export function ProfileCard() {
  const { user, userData } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [displayName, setDisplayName] = useState(userData?.displayName || "")
  const [error, setError] = useState("")

  const initials = (userData?.displayName || user?.displayName || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  const memberSince = userData?.createdAt
    ? new Date(userData.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "N/A"

  const handleUpdateProfile = async () => {
    if (!user || !displayName.trim()) return

    setLoading(true)
    setError("")

    try {
      await updateProfile(user, { displayName: displayName.trim() })
      await updateDoc(doc(db, "users", user.uid), {
        displayName: displayName.trim(),
      })
      setIsOpen(false)
      // Reload to refresh userData
      window.location.reload()
    } catch (err) {
      setError("Failed to update profile")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={userData?.photoURL || user?.photoURL || ""} />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">{initials}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-foreground text-xl">
          {userData?.displayName || user?.displayName || "Member"}
        </CardTitle>
        <p className="text-muted-foreground text-sm">{userData?.email || user?.email}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <User className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Role:</span>
            <span className="text-foreground capitalize ml-auto">{userData?.role || "User"}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Email:</span>
            <span className="text-foreground ml-auto truncate max-w-32">{userData?.email || user?.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Member since:</span>
            <span className="text-foreground ml-auto">{memberSince}</span>
          </div>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Update Profile</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Display Name
                </Label>
                <Input
                  id="name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="bg-background border-border text-foreground"
                  placeholder="Your name"
                />
              </div>
              <Button
                onClick={handleUpdateProfile}
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
