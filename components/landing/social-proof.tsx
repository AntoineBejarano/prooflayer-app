import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Our first EU enterprise prospect sent a 60-question AI governance form. With Prooflayer we answered in a day instead of pausing the deal for weeks.",
    author: "CTO",
    company: "Series A SaaS (HR Tech)",
    avatar: "M",
  },
  {
    quote: "The documentation Prooflayer generates actually makes sense to buyers. It's not legal jargon—it's clear, useful evidence.",
    author: "VP Engineering",
    company: "AI-First Startup",
    avatar: "S",
  },
  {
    quote: "Before Prooflayer, we'd scramble every time procurement asked about our AI. Now we have answers ready before they even ask.",
    author: "Founder",
    company: "Enterprise SaaS",
    avatar: "J",
  },
]

export function SocialProof() {
  return (
    <section className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Trusted by technical leaders</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Teams shipping AI to enterprise
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-border bg-background p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-accent/50" />
              <p className="text-foreground leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid grid-cols-2 gap-8 rounded-xl border border-border bg-background p-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">Teams on waitlist</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">200+</div>
              <div className="mt-1 text-sm text-muted-foreground">AI systems analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">10x</div>
              <div className="mt-1 text-sm text-muted-foreground">Faster compliance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">€0</div>
              <div className="mt-1 text-sm text-muted-foreground">Legal fees saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
