import { GitBranch, Search, FileCheck, Download, RefreshCw } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: GitBranch,
    title: "Connect your repo",
    description: "Point Prooflayer at your GitHub or GitLab. We integrate with your existing workflow—no agents, no runtime changes.",
  },
  {
    number: "02",
    icon: Search,
    title: "Detect what AI you ship",
    description: "We scan your codebase to find every AI system: API calls to LLM providers, model integrations, user-facing AI features.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Classify risk & generate evidence",
    description: "Map each system to EU AI Act roles and risk tiers, so you know what actually applies to you. Generate structured evidence that satisfies procurement and due diligence.",
  },
  {
    number: "04",
    icon: Download,
    title: "Export buyer-ready docs",
    description: "Get AI System Cards, Compliance Summaries, Intended Use statements, and Disclosure templates—ready for enterprise buyers.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Stay updated on every release",
    description: "Prooflayer watches your releases and PRs. Evidence stays current, and your documentation updates with every meaningful change—no more one-off audits.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From code to compliance in minutes
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            No consultants. No spreadsheets. Just connect your repo and let Prooflayer do the work.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 hidden h-full w-px bg-border md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6">
                  {/* Step indicator */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Step {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
                    
                    {index === steps.length - 1 && (
                      <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent">
                        <RefreshCw className="h-4 w-4" />
                        Continuous compliance, not a one-time scan
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
