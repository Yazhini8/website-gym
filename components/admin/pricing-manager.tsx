"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { pricingPlans as initialPlans } from "@/lib/data"
import { Plus, Edit, Trash2, CreditCard, Star, CheckCircle } from "lucide-react"

interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  originalPrice?: number
  description: string
  features: string[]
  popular: boolean
}

export function PricingManager() {
  const [plans, setPlans] = useState<PricingPlan[]>(initialPlans)
  const [isOpen, setIsOpen] = useState(false)
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    period: "",
    originalPrice: "",
    description: "",
    features: "",
    popular: false,
  })

  const handleOpenAdd = () => {
    setEditingPlan(null)
    setFormData({
      name: "",
      price: "",
      period: "",
      originalPrice: "",
      description: "",
      features: "",
      popular: false,
    })
    setIsOpen(true)
  }

  const handleOpenEdit = (plan: PricingPlan) => {
    setEditingPlan(plan)
    setFormData({
      name: plan.name,
      price: plan.price.toString(),
      period: plan.period,
      originalPrice: plan.originalPrice?.toString() || "",
      description: plan.description,
      features: plan.features.join("\n"),
      popular: plan.popular,
    })
    setIsOpen(true)
  }

  const handleSave = () => {
    const newPlan: PricingPlan = {
      id: editingPlan?.id || Date.now().toString(),
      name: formData.name,
      price: Number.parseFloat(formData.price) || 0,
      period: formData.period,
      originalPrice: formData.originalPrice ? Number.parseFloat(formData.originalPrice) : undefined,
      description: formData.description,
      features: formData.features.split("\n").filter((f) => f.trim()),
      popular: formData.popular,
    }

    if (editingPlan) {
      setPlans((prev) => prev.map((p) => (p.id === editingPlan.id ? newPlan : p)))
    } else {
      setPlans((prev) => [...prev, newPlan])
    }
    setIsOpen(false)
  }

  const handleDelete = (id: string) => {
    setPlans((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" />
          Manage Pricing Plans
        </CardTitle>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenAdd} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-foreground">
                {editingPlan ? "Edit Pricing Plan" : "Add New Pricing Plan"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Plan Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="Monthly"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Period</Label>
                  <Input
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="month"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Price ($)</Label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="49"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Original Price ($)</Label>
                  <Input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Description</Label>
                <Input
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-background border-border text-foreground"
                  placeholder="Perfect for trying out our facilities"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Features (one per line)</Label>
                <Textarea
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  className="bg-background border-border text-foreground min-h-32"
                  placeholder="Full gym access&#10;Locker room access&#10;2 group classes per week"
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border">
                <div>
                  <Label className="text-foreground">Popular Plan</Label>
                  <p className="text-xs text-muted-foreground">Highlight this as the recommended plan</p>
                </div>
                <Switch
                  checked={formData.popular}
                  onCheckedChange={(checked) => setFormData({ ...formData, popular: checked })}
                />
              </div>
              <Button onClick={handleSave} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {editingPlan ? "Save Changes" : "Add Plan"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-5 rounded-lg border ${
                plan.popular ? "border-primary bg-primary/5" : "border-border bg-secondary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    <Star className="w-3 h-3" />
                    Popular
                  </span>
                </div>
              )}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-primary">${plan.price}</span>
                    <span className="text-sm text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleOpenEdit(plan)}
                    className="text-muted-foreground hover:text-primary h-8 w-8"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(plan.id)}
                    className="text-muted-foreground hover:text-destructive h-8 w-8"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs text-foreground">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {plan.features.length > 3 && (
                  <li className="text-xs text-muted-foreground">+{plan.features.length - 3} more features</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
