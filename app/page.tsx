import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { CaseExample } from "@/components/landing/case-example"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Outcomes } from "@/components/landing/outcomes"
import { Deliverables } from "@/components/landing/deliverables"
import { WhoItsFor } from "@/components/landing/who-its-for"
import { Security } from "@/components/landing/security"
import { Lawyers } from "@/components/landing/lawyers"
import { Pricing } from "@/components/landing/pricing"
import { SocialProof } from "@/components/landing/social-proof"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <CaseExample />
      <HowItWorks />
      <Outcomes />
      <Deliverables />
      <WhoItsFor />
      <Security />
      <Lawyers />
      <Pricing />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
