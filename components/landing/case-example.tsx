import { ArrowRight } from "lucide-react"

export function CaseExample() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-background to-background p-8 sm:p-10">
          {/* Quote mark decoration */}
          <div className="absolute -left-2 -top-2 text-8xl font-serif text-primary/10 select-none">
            &ldquo;
          </div>
          
          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Typical scenario
            </p>
            
            <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
              {/* Before */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
                    Before
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A 40-person SaaS added an AI copilot and received a 50-question AI governance form from a German bank. They spent <span className="font-medium text-foreground">3 weeks</span> scrambling internally and still weren&apos;t confident in their answers.
                </p>
              </div>
              
              {/* Arrow (hidden on mobile) */}
              <div className="hidden sm:flex sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:items-center sm:justify-center">
                <div className="rounded-full bg-background border border-border p-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </div>
              
              {/* After */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    With Prooflayer
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  AI inventory, risk map, and documentation pack ready in <span className="font-medium text-foreground">48 hours</span>. They now reuse it for every enterprise buyer—no more starting from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
