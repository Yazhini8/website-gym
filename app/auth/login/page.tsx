import { Navbar } from "@/components/navbar"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 flex items-center justify-center min-h-screen">
        <LoginForm />
      </div>
    </main>
  )
}
