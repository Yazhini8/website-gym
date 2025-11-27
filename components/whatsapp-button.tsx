"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}
