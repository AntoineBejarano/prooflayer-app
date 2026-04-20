"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is this only for the EU AI Act?",
    answer: "Today we focus on mapping your systems to the EU AI Act because that's what most EU enterprise buyers are asking about. The underlying control and evidence model is designed to support other frameworks over time (like ISO 42001 or NIST AI RMF).",
  },
  {
    question: "Is this legal advice?",
    answer: "No. Prooflayer is an engineering and governance tool. We help you understand your AI systems, risk tiers and obligations and generate documentation and evidence. You should still consult legal counsel for formal opinions or certification.",
  },
  {
    question: "Do I need this if I only use OpenAI / Anthropic APIs?",
    answer: "If you ship AI features to users in Europe, you're already in scope of the EU AI Act, even if you only call external APIs. Enterprise buyers will still expect documentation and governance for how you use those models inside your product.",
  },
  {
    question: "Is this a one-time scan or ongoing?",
    answer: "Both options are available. A one-time assessment gives you a complete snapshot and documentation pack. Continuous compliance monitors your releases and keeps evidence updated automatically. Most teams start with an assessment and upgrade to continuous monitoring.",
  },
  {
    question: "How technical is the setup?",
    answer: "Very simple. You connect your GitHub/GitLab repo (read-only access), and we handle the rest. No agents to install, no runtime changes, no infrastructure to manage. Setup takes about 15 minutes.",
  },
  {
    question: "What if my AI systems change frequently?",
    answer: "That's exactly what continuous compliance is for. Prooflayer watches your PRs and releases, automatically detecting changes to AI systems and updating your documentation. Your evidence stays current without manual work.",
  },
  {
    question: "Can I use this for SOC 2 or ISO 27001?",
    answer: "Prooflayer's evidence and documentation can support AI-related controls in broader frameworks like SOC 2 and ISO 27001. We focus specifically on AI governance, which complements your existing security and compliance programs.",
  },
  {
    question: "How do you handle our code?",
    answer: "We use static analysis on your codebase—no code execution, no data access. We only look at structure and patterns to detect AI system usage. Your code stays in your repos, and our analysis happens in isolated, secure environments.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border bg-card px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
