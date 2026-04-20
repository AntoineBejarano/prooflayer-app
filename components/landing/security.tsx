import { Shield, Eye, Trash2 } from "lucide-react"

const securityPoints = [
  {
    icon: Eye,
    title: "Read-only access",
    description: "We only read your repos. No writes, no auto-commits, no modifications to your codebase.",
  },
  {
    icon: Shield,
    title: "Minimal data exposure",
    description: "We never send your full codebase to LLMs—only targeted snippets and metadata needed for analysis.",
  },
  {
    icon: Trash2,
    title: "Full control",
    description: "Revoke access and delete all stored data and evidence at any time. Your code, your rules.",
  },
]

export function Security() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Security & code handling
          </h2>
          <p className="mt-3 text-muted-foreground">
            Your codebase stays yours. Here&apos;s how we handle it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {securityPoints.map((point) => (
            <div 
              key={point.title}
              className="rounded-xl border border-border/50 bg-background p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
