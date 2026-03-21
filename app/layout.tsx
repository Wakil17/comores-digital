import type { Metadata } from 'next'
import { Inter, Source_Serif_4, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Comores Digital — Solutions numériques pour les Comores',
  description:
    'Comores Digital conçoit et déploie des outils numériques pour les entreprises, les services et les institutions comoriennes. Solutions web, SaaS, infrastructure, cybersécurité.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${sourceSerif.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
