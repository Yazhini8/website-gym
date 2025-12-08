
'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrainersManager } from "@/components/admin/trainers-manager"
import { ClassesManager } from "@/components/admin/classes-manager"
import { PricingManager } from "@/components/admin/pricing-manager"
import { UsersManager } from "@/components/admin/users-manager"
import { Users, Dumbbell, CreditCard, User } from "lucide-react"

export function AdminTabs() {
  return (
    <Tabs defaultValue="trainers" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-card border border-border mb-8">
        <TabsTrigger
          value="trainers"
          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <Users className="w-4 h-4" />
          <span className="hidden sm:inline">Trainers</span>
        </TabsTrigger>
        <TabsTrigger
          value="classes"
          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <Dumbbell className="w-4 h-4" />
          <span className="hidden sm:inline">Classes</span>
        </TabsTrigger>
        <TabsTrigger
          value="pricing"
          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <CreditCard className="w-4 h-4" />
          <span className="hidden sm:inline">Pricing</span>
        </TabsTrigger>
        <TabsTrigger
          value="users"
          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Users</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="trainers">
        <TrainersManager />
      </TabsContent>
      <TabsContent value="classes">
        <ClassesManager />
      </TabsContent>
      <TabsContent value="pricing">
        <PricingManager />
      </TabsContent>
      <TabsContent value="users">
        <UsersManager />
      </TabsContent>
    </Tabs>
  )
}
