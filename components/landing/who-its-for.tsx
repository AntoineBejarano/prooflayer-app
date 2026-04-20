import { Building2, Bot, Globe } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "B2B SaaS with AI features",
    description: "You've added AI capabilities—chatbots, copilots, scoring, recommendations. Now you need to prove they're safe and compliant for enterprise buyers.",
    examples: ["Customer-facing AI assistants", "AI-powered analytics", "Automated decision support", "Content generation features"],
  },
  {
    icon: Bot,
    title: "Founders & CTOs",
    description: "You're shipping fast but enterprise deals are getting stuck in procurement. You don't have months to figure out EU AI Act compliance.",
    examples: ["Series A-C companies", "Technical leadership", "Product-led growth teams", "Developer-focused products"],
  },
  {
    icon: Globe,
    title: "Selling to Europe",
    description: "European enterprise customers are asking hard questions. The EU AI Act is coming into force, and you need answers now.",
    examples: ["Expanding to EU markets", "Global SaaS products", "Multi-region deployments", "Enterprise sales teams"],
  },
]

export function WhoItsFor() {
  return (
    <section className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Who it&apos;s for</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for teams shipping AI into enterprise
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            If you&apos;re using LLMs and selling to enterprise customers in Europe, this is for you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-xl border border-border bg-background p-8"
            >
              <div className="mb-6 inline-flex rounded-lg bg-secondary p-3">
                <audience.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{audience.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{audience.description}</p>
              
              <div className="mt-6 space-y-2">
                {audience.examples.map((example) => (
                  <div key={example} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
