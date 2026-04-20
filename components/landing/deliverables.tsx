import { FileText, ClipboardCheck, Info, Bell, FileCode, AlertCircle, BarChart3, Activity } from "lucide-react"

const coreDeliverables = [
  {
    icon: FileText,
    title: "AI System Card",
    description: "Complete profile of each AI system including capabilities, training data sources, intended use, and limitations.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Summary",
    description: "Risk classification, applicable regulations, and compliance status in a format buyers understand.",
  },
  {
    icon: Info,
    title: "Intended Use & Limitations",
    description: "Clear documentation of what your AI does and doesn't do—essential for transparency requirements.",
  },
  {
    icon: Bell,
    title: "Disclosure Templates",
    description: "Ready-to-use disclosure language for user-facing AI features that meets regulatory expectations.",
  },
]

const advancedDeliverables = [
  {
    icon: FileCode,
    title: "Technical Documentation",
    description: "Architecture, data flows, and model specifications for technical due diligence.",
  },
  {
    icon: AlertCircle,
    title: "Risk Assessment File",
    description: "Detailed risk analysis with mitigation strategies and residual risk documentation.",
  },
  {
    icon: BarChart3,
    title: "Evaluation Report",
    description: "Performance metrics, bias analysis, and quality assurance documentation.",
  },
  {
    icon: Activity,
    title: "Monitoring Summary",
    description: "Ongoing monitoring setup, incident tracking, and continuous improvement processes.",
  },
]

export function Deliverables() {
  return (
    <section id="deliverables" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Deliverables</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Documentation that actually helps you sell
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Every output is designed for enterprise buyers—not regulators. Although it satisfies both.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          {/* Core Pack */}
          <div className="mb-12">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Core Documentation Pack</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {coreDeliverables.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-card/80"
                >
                  <item.icon className="mb-4 h-8 w-8 text-accent" />
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Pack */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Advanced Documentation Pack</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {advancedDeliverables.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-dashed border-border bg-background p-6 transition-all hover:border-accent/50"
                >
                  <item.icon className="mb-4 h-8 w-8 text-muted-foreground" />
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
