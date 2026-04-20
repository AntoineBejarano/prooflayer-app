import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Prooflayer — Turn AI systems into evidence you can sell',
  description: 'AI compliance control plane for B2B SaaS. Detect what AI you ship, classify EU AI Act exposure, generate buyer-ready docs, and close enterprise deals faster.',
  generator: 'Prooflayer',
  keywords: ['AI compliance', 'EU AI Act', 'B2B SaaS', 'enterprise sales', 'AI governance', 'AI documentation'],
  openGraph: {
    title: 'Prooflayer — Turn AI systems into evidence you can sell',
    description: 'AI compliance control plane for B2B SaaS. Close enterprise deals faster with provable, auditable AI systems.',
    type: 'website',
    siteName: 'Prooflayer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prooflayer — Turn AI systems into evidence you can sell',
    description: 'AI compliance control plane for B2B SaaS. Close enterprise deals faster with provable, auditable AI systems.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
