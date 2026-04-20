import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "One-Time Assessment",
    price: "€2k–€5k",
    description: "Complete AI inventory, risk classification, and documentation pack you can reuse across enterprise buyers.",
    features: [
      "Full codebase scan",
      "AI system inventory",
      "EU AI Act classification",
      "Core documentation pack",
      "Remediation roadmap",
      "30-day support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Continuous Compliance",
    price: "~€300",
    priceLabel: "/month",
    description: "Ongoing monitoring, automatic updates, and continuous evidence collection so your next enterprise questionnaire is already answered.",
    features: [
      "Everything in Assessment",
      "Continuous monitoring",
      "Auto-updated documentation",
      "PR/release scanning",
      "Evidence versioning",
      "Priority support",
      "Quarterly compliance reviews",
    ],
    cta: "Join waitlist",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            Early Access Pricing
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            We&apos;re onboarding a limited number of design partners. Lock in early access rates.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-sm font-medium text-primary-foreground">
                  Recommended
                </div>
              )}

              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.priceLabel && (
                  <span className="text-lg text-muted-foreground">{plan.priceLabel}</span>
                )}
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{plan.description}</p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8 w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                <Link href="#waitlist">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-center text-sm text-muted-foreground">
            Pricing varies based on codebase size and number of AI systems.
          </p>
          <Button asChild variant="outline" size="sm">
            <Link href="#waitlist">
              Request pricing call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
