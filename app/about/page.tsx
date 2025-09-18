import { Metadata } from 'next'
import Header from '@/components/header-component'
import AboutCard from '@/components/about-card'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Sumedh Jitendra Badnore - a passionate software engineer with expertise in web development, cloud technologies, and building innovative solutions.',
  openGraph: {
    title: 'About Sumedh Jitendra Badnore',
    description:
      'Learn more about Sumedh Jitendra Badnore - a passionate software engineer with expertise in web development, cloud technologies, and building innovative solutions.',
    type: 'profile',
    images: [
      {
        url: '/open-graph/about-og.png',
        width: 1200,
        height: 630,
        alt: 'Sumedh Jitendra Badnore - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sumedh Jitendra Badnore',
    description:
      'Learn more about Sumedh Jitendra Badnore - a passionate software engineer',
    images: ['/open-graph/about-og.png'],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-grid">
      <Header
        title="About"
        title2="Me"
        description="A brief description of me."
        backgroundVariant="about"
      />
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 max-w-7xl"
        aria-label="About Sumedh Jitendra Badnore"
      >
        <div className="space-y-8 sm:space-y-12">
          <AboutCard />
        </div>
      </section>
    </main>
  )
}
