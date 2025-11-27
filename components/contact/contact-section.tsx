"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Membership inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-background border-border text-foreground"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border text-foreground resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Fitness Street
                      <br />
                      Gym City, GC 12345
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      (555) 123-4567
                      <br />
                      (555) 987-6543
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      info@powerfit.com
                      <br />
                      support@powerfit.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Members: 24/7
                      <br />
                      Staff: 6AM - 10PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map Embed */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PowerFit Gym Location"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
