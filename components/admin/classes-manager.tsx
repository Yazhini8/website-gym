"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { classes as initialClasses } from "@/lib/data"
import { Plus, Edit, Trash2, Dumbbell, Clock, User } from "lucide-react"

interface ClassItem {
  id: string
  name: string
  description: string
  image: string
  trainer: string
  timing: string
  duration: string
  category: string
}

const categories = ["yoga", "zumba", "strength", "cardio", "hiit", "boxing"]

export function ClassesManager() {
  const [classes, setClasses] = useState<ClassItem[]>(initialClasses)
  const [isOpen, setIsOpen] = useState(false)
  const [editingClass, setEditingClass] = useState<ClassItem | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    trainer: "",
    timing: "",
    duration: "",
    category: "",
  })

  const handleOpenAdd = () => {
    setEditingClass(null)
    setFormData({
      name: "",
      description: "",
      trainer: "",
      timing: "",
      duration: "",
      category: "",
    })
    setIsOpen(true)
  }

  const handleOpenEdit = (classItem: ClassItem) => {
    setEditingClass(classItem)
    setFormData({
      name: classItem.name,
      description: classItem.description,
      trainer: classItem.trainer,
      timing: classItem.timing,
      duration: classItem.duration,
      category: classItem.category,
    })
    setIsOpen(true)
  }

  const handleSave = () => {
    const newClass: ClassItem = {
      id: editingClass?.id || Date.now().toString(),
      name: formData.name,
      description: formData.description,
      image: editingClass?.image || "/diverse-fitness-class.png",
      trainer: formData.trainer,
      timing: formData.timing,
      duration: formData.duration,
      category: formData.category,
    }

    if (editingClass) {
      setClasses((prev) => prev.map((c) => (c.id === editingClass.id ? newClass : c)))
    } else {
      setClasses((prev) => [...prev, newClass])
    }
    setIsOpen(false)
  }

  const handleDelete = (id: string) => {
    setClasses((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground flex items-center gap-2">
          <Dumbbell className="w-5 h-5 text-primary" />
          Manage Classes
        </CardTitle>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenAdd} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Class
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-foreground">{editingClass ? "Edit Class" : "Add New Class"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-2">
                <Label className="text-foreground">Class Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border text-foreground"
                  placeholder="Power Yoga"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Trainer</Label>
                  <Input
                    value={formData.trainer}
                    onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat} className="capitalize">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Timing</Label>
                  <Input
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="Mon, Wed, Fri - 6:00 AM"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Duration</Label>
                  <Input
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="bg-background border-border text-foreground"
                    placeholder="60 min"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Description</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-background border-border text-foreground min-h-24"
                  placeholder="Brief description of the class..."
                />
              </div>
              <Button onClick={handleSave} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {editingClass ? "Save Changes" : "Add Class"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {classes.map((classItem) => (
            <div key={classItem.id} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={classItem.image || "/placeholder.svg"} alt={classItem.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{classItem.name}</h3>
                  <div className="flex gap-1 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleOpenEdit(classItem)}
                      className="text-muted-foreground hover:text-primary h-8 w-8"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(classItem.id)}
                      className="text-muted-foreground hover:text-destructive h-8 w-8"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {classItem.trainer}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {classItem.duration}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 capitalize">{classItem.category}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
