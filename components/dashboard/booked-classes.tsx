"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { classes } from "@/lib/data"
import { Calendar, Clock, User, Dumbbell } from "lucide-react"

export function BookedClasses() {
  const { userData } = useAuth()
  const bookedClassIds = userData?.bookedClasses || []

  const bookedClasses = classes.filter((c) => bookedClassIds.includes(c.id))

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground flex items-center gap-2">
          <Dumbbell className="w-5 h-5 text-primary" />
          Booked Classes
        </CardTitle>
        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
          {bookedClasses.length} Classes
        </Badge>
      </CardHeader>
      <CardContent>
        {bookedClasses.length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              You haven't booked any classes yet. Explore our classes and start your fitness journey!
            </p>
            <Link href="/classes">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Browse Classes</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookedClasses.map((classItem) => (
              <div
                key={classItem.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={classItem.image || "/placeholder.svg"}
                    alt={classItem.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{classItem.name}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {classItem.trainer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {classItem.duration}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{classItem.timing}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  Cancel
                </Button>
              </div>
            ))}
            <Link href="/classes" className="block pt-4">
              <Button variant="outline" className="w-full border-border text-foreground bg-transparent">
                Book More Classes
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
