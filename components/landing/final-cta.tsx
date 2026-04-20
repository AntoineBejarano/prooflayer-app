"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FinalCTA() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      
      if (!res.ok) throw new Error("Failed to submit")
      
      setIsSubmitted(true)
      setEmail("")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-accent/30 bg-background p-8 lg:p-16">
          {/* Background gradient */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
          </div>

          <div className="relative text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to make your AI sellable?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
              Join 50+ teams already on the waitlist. Get early access pricing and shape the product as a design partner.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="email-cta" className="sr-only">Email address</label>
                <Input
                  id="email-cta"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading || isSubmitted}
                  className="h-12 bg-secondary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit" size="lg" disabled={isLoading || isSubmitted} className="h-12 px-6">
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : isSubmitted ? (
                  "You're in!"
                ) : (
                  <>
                    Get early access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

            {isSubmitted && (
              <p className="mt-4 text-sm text-muted-foreground">
                Thanks for joining! We&apos;ll be in touch soon.
              </p>
            )}

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
