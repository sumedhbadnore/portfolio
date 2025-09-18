import '@/styles/globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/footer-component'
import Navbar from '@/components/nav-bar'
import { fonts } from '@/lib/fonts'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-sumedh-badnores-projects.vercel.app/'),
  title: {
    default: 'Sumedh Badnore',
    template: '%s | Sumedh Jitendra Badnore',
  },
  description:
    "Sumedh's personal website - A software engineer passionate about building innovative solutions. Explore my projects, blog posts, and journey in tech.",
  keywords: [
    'software engineer',
    'frontend developer',
    'full-stack developer',
    'web development',
    'tech blog',
    'portfolio',
    'Sumedh Jitendra Badnore',
  ],
  authors: [{ name: 'Sumedh Jitendra Badnore' }],
  creator: 'Sumedh Jitendra Badnore',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-sumedh-badnores-projects.vercel.app/',
    title: 'Sumedh Jitendra Badnore - Software Engineer',
    description:
      "Sumedh Jitendra Badnore's personal website - A software engineer passionate about building innovative solutions.",
    siteName: 'Sumedh Jitendra Badnore',
    images: [
      {
        url: '/open-graph/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sumedh Jitendra Badnore - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumedh Badnore - Software Engineer',
    description:
      'Software engineer passionate about building innovative solutions',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [{ url: '/images/logo.png', type: 'image/svg+xml' }],
    shortcut: '/images/logo.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={fonts.join(' ')}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <header>
            <Navbar />
          </header>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1" aria-label="Main content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
