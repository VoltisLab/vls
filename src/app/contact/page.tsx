"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const inquiryTypes = [
    { value: "customer-games", label: "Customer Support - Games", icon: "🎮" },
    { value: "customer-merch", label: "Customer Support - Merch", icon: "👕" },
    { value: "business", label: "Business & Licensing Inquiry", icon: "💼" },
    { value: "press", label: "Press & Marketing Inquiry", icon: "📰" },
    { value: "feedback", label: "Suggestions & Feedback", icon: "💡" },
    { value: "other", label: "Other", icon: "💬" }
  ]

  const handleInquirySelect = (inquiryType: string) => {
    setSelectedInquiry(inquiryType)
    setShowForm(true)
    setFormData({ ...formData, subject: inquiryTypes.find(t => t.value === inquiryType)?.label || "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setSelectedInquiry("")
    setShowForm(false)
    setIsSubmitting(false)
    
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
        <p className="text-base text-muted-foreground">
          Get in touch with the Voltis Labs Games team
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">hello@voltislabs.com</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-6">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
          </CardContent>
        </Card>
      </div>

      {/* Inquiry Selection */}
      {!showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">What can we help you with?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inquiryTypes.map((inquiry) => (
                <Button
                  key={inquiry.value}
                  variant="outline"
                  className="h-auto p-4 justify-start text-left hover:bg-accent"
                  onClick={() => handleInquirySelect(inquiry.value)}
                >
                  <span className="text-lg mr-3">{inquiry.icon}</span>
                  <span className="text-sm">{inquiry.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Contact Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Send us a message</CardTitle>
            <p className="text-sm text-muted-foreground">
              Selected: {inquiryTypes.find(t => t.value === selectedInquiry)?.label}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowForm(false)}
              className="self-start"
            >
              ← Change inquiry type
            </Button>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Brief description of your inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
      
      <ScrollToTop />
    </div>
  )
}