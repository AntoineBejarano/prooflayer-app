"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Hero() {
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
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Now accepting design partners
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Turn your AI systems into evidence you can sell
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            The AI compliance control plane for B2B SaaS. Detect what AI you ship, classify your EU AI Act exposure, and generate buyer-ready documentation—automatically.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" id="waitlist">
            <div className="flex-1">
              <label htmlFor="email-hero" className="sr-only">Email address</label>
              <Input
                id="email-hero"
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

          <p className="mt-4 text-sm text-muted-foreground">
            Join 50+ teams already on the waitlist
          </p>
        </div>

        {/* Trust badges */}
        <div className="mx-auto mt-20 max-w-4xl">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Built for teams shipping AI into enterprise
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-2 text-muted-foreground/60">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span className="text-sm font-medium">GitHub Integration</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/60">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span className="text-sm font-medium">EU AI Act Ready</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/60">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
              <span className="text-sm font-medium">Auto-Generated Docs</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/60">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
              <span className="text-sm font-medium">Continuous Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
