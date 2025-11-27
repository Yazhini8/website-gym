"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Dumbbell, User, ShieldCheck, LogOut, Loader2 } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/trainers", label: "Trainers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, userData, loading, logout } = useAuth()

  const initials = (userData?.displayName || user?.displayName || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  const isAdmin = userData?.role === "admin"
  const dashboardLink = isAdmin ? "/admin" : "/dashboard"

  const handleLogout = async () => {
    await logout()
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Dumbbell className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">PowerFit</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={userData?.photoURL || user?.photoURL || ""} />
                    <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border" align="end">
                <div className="flex items-center gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userData?.photoURL || user?.photoURL || ""} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">{initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-foreground truncate">
                      {userData?.displayName || user?.displayName || "Member"}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-border" />
                <DropdownMenuItem asChild>
                  <Link href={dashboardLink} className="flex items-center gap-2 cursor-pointer">
                    {isAdmin ? (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        Admin Dashboard
                      </>
                    ) : (
                      <>
                        <User className="w-4 h-4" />
                        Dashboard
                      </>
                    )}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-border" />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive focus:text-destructive cursor-pointer"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Join Now</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 pb-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={userData?.photoURL || user?.photoURL || ""} />
                        <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {userData?.displayName || user?.displayName || "Member"}
                        </p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <Link href={dashboardLink} onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent border-border">
                        {isAdmin ? (
                          <>
                            <ShieldCheck className="w-4 h-4 mr-2" />
                            Admin Dashboard
                          </>
                        ) : (
                          <>
                            <User className="w-4 h-4 mr-2" />
                            Dashboard
                          </>
                        )}
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={handleLogout}
                      className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Login
                      </Button>
                    </Link>
                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary text-primary-foreground">Join Now</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
