import { Zap, FileCheck2, Shield, Clock } from "lucide-react"

const outcomes = [
  {
    icon: Zap,
    title: "Close deals faster",
    description: "Answer enterprise AI questionnaires in hours, not weeks. Stop losing deals to compliance delays.",
    stat: "10x",
    statLabel: "faster response time",
  },
  {
    icon: FileCheck2,
    title: "Reduce manual work",
    description: "Auto-generated documentation from your actual codebase. No more spreadsheets and guesswork.",
    stat: "90%",
    statLabel: "less documentation time",
  },
  {
    icon: Shield,
    title: "Stay audit-ready",
    description: "Continuous evidence collection means you're always prepared for procurement and due diligence.",
    stat: "100%",
    statLabel: "evidence coverage",
  },
  {
    icon: Clock,
    title: "No more scrambling",
    description: "When buyers ask about your AI systems, you'll have answers ready—backed by real evidence.",
    stat: "24h",
    statLabel: "typical turnaround",
  },
]

export function Outcomes() {
  return (
    <section className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Outcomes</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Make your AI systems sellable
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Prooflayer isn&apos;t just compliance—it&apos;s a competitive advantage for enterprise sales.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="relative overflow-hidden rounded-xl border border-border bg-background p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex rounded-lg bg-secondary p-3">
                  <outcome.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-foreground">{outcome.stat}</div>
                  <div className="text-sm text-muted-foreground">{outcome.statLabel}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
