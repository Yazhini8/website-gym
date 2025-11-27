import { Navbar } from "@/components/navbar"
import { SignUpForm } from "@/components/auth/signup-form"

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-12 flex items-center justify-center min-h-screen">
        <SignUpForm />
      </div>
    </main>
  )
}
