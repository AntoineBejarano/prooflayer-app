import { AlertTriangle, Clock, FileQuestion, Scale } from "lucide-react"

const problems = [
  {
    icon: FileQuestion,
    title: "Enterprise AI questionnaires pile up",
    description: "Every enterprise buyer now asks about your AI governance, EU AI Act readiness, and model transparency. Most teams can't answer quickly.",
  },
  {
    icon: AlertTriangle,
    title: "No clear inventory of AI systems",
    description: "You've integrated OpenAI, Anthropic, maybe fine-tuned a model. But do you actually know what AI is running in production?",
  },
  {
    icon: Clock,
    title: "Manual compliance is slow and expensive",
    description: "Legal reviews, external consultants, custom documentation. It takes months and often costs tens of thousands of euros per customer.",
  },
  {
    icon: Scale,
    title: "Evidence goes stale with every release",
    description: "Your AI systems evolve. Your compliance docs don't. By the time you close, your evidence is already outdated.",
  },
]

export function Problem() {
  return (
    <section className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">The problem</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Enterprise AI deals are getting stuck
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            The EU AI Act starts applying in 2026. Enterprise buyers are already asking how your AI systems comply—and will keep asking. If you can&apos;t answer fast, you lose the deal.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative rounded-xl border border-border bg-background p-8 transition-colors hover:border-accent/50"
            >
              <div className="mb-4 inline-flex rounded-lg bg-secondary p-3">
                <problem.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
