"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { trainers as initialTrainers } from "@/lib/data"
import { Plus, Edit, Trash2, Users } from "lucide-react"

interface Trainer {
  id: string
  name: string
  role: string
  image: string
  experience: string
  specialization: string
  certifications: string[]
  bio: string
  social: {
    instagram: string
    twitter: string
    linkedin: string
  }
}

export function TrainersManager() {
  const [trainers, setTrainers] = useState<Trainer[]>(initialTrainers)
  const [isOpen, setIsOpen] = useState(false)
  const [editingTrainer, setEditingTrainer] = useState<Trainer | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    experience: "",
    specialization: "",
    bio: "",
    certifications: "",
  })

  const handleOpenAdd = () => {
    setEditingTrainer(null)
    setFormData({
      name: "",
      role: "",
      experience: "",
      specialization: "",
      bio: "",
      certifications: "",
    })
    setIsOpen(true)
  }

  const handleOpenEdit = (trainer: Trainer) => {
    setEditingTrainer(trainer)
    setFormData({
      name: trainer.name,
      role: trainer.role,
      experience: trainer.experience,
      specialization: trainer.specialization,
      bio: trainer.bio,
      certifications: trainer.certifications.join(", "),
    })
    setIsOpen(true)
  }

  const handleSave = () => {
    const newTrainer: Trainer = {
      id: editingTrainer?.id || Date.now().toString(),
      name: formData.name,
      role: formData.role,
      image: editingTrainer?.image || "/diverse-fitness-trainer.png",
      experience: formData.experience,
      specialization: formData.specialization,
      bio: formData.bio,
      certifications: formData.certifications.split(",").map((c) => c.trim()),
      social: editingTrainer?.social || { instagram: "#", twitter: "#", linkedin: "#" },
    }

    if (editingTrainer) {
      setTrainers((prev) => prev.map((t) => (t.id === editingTrainer.id ? newTrainer : t)))
    } else {
      setTrainers((prev) => [...prev, newTrainer])
    }
    setIsOpen(false)
  }

  const handleDelete = (id: string) => {
    setTrainers((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Manage Trainers
        </CardTitle>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenAdd} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Trainer
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-foreground">
                {editingTrainer ? "Edit Trainer" : "Add New Trainer"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Role</Label>
                  <Input
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="Head Coach"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Experience</Label>
                  <Input
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="10 years"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Specialization</Label>
                  <Input
                    value={formData.specialization}
                    onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="Strength Training"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Certifications (comma separated)</Label>
                <Input
                  value={formData.certifications}
                  onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                  className="bg-background border-border text-foreground"
                  placeholder="NSCA, ACE, CrossFit"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Bio</Label>
                <Textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="bg-background border-border text-foreground min-h-24"
                  placeholder="Brief description..."
                />
              </div>
              <Button onClick={handleSave} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {editingTrainer ? "Save Changes" : "Add Trainer"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border"
            >
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{trainer.name}</h3>
                <p className="text-sm text-muted-foreground">{trainer.role}</p>
                <p className="text-xs text-muted-foreground">
                  {trainer.experience} | {trainer.specialization}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleOpenEdit(trainer)}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(trainer.id)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
