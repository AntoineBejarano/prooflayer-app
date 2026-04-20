import { Scale, Users } from "lucide-react"

export function Lawyers() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-muted/50 to-background p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                What about our lawyers or DPO?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Prooflayer doesn&apos;t replace your legal counsel or DPO. We give them a clear picture of your AI systems, risks, and controls—plus structured documentation they can review and adapt.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                That usually means <span className="font-medium text-foreground">fewer hours of expensive advisory work</span> and faster, more concrete recommendations.
              </p>
              
              <div className="mt-6 flex items-center gap-3 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Works alongside your existing legal and compliance teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
