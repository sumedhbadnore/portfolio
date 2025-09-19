import { Metadata } from 'next'
import Header from '@/components/header-component'
import ProjectCard from '@/components/project-card'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Explore Sumedh Jitendra Badnore's portfolio of software engineering projects, featuring web applications, technical solutions, and innovative developments.",
  openGraph: {
    title: 'Projects Portfolio',
    description:
      'Discover my collection of software engineering projects and technical solutions.',
    type: 'website',
    images: [
      {
        url: '/open-graph/project-og.png',
        width: 1200,
        height: 630,
        alt: 'Sumedh Jitendra Badnore - Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | Sumedh Jitendra Badnore',
    description:
      'Discover my collection of software engineering projects and technical solutions',
    images: ['/open-graph/project-og.png'],
  },
  keywords: [
    'software projects',
    'web development',
    'portfolio',
    'technical projects',
    'Sumedh Jitendra Badnore',
    'software engineer portfolio',
  ],
  alternates: {
    canonical: 'https://andrechandra.vercel.app/projects',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-grid">
      <Header
        title="Projects"
        title2="Showcase"
        description="Showcase of my projects that I've worked on."
        backgroundVariant="projects"
      />
      <section
        className="container mx-auto px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 max-w-7xl"
        aria-label="Projects Showcase"
      >
        <div className="space-y-8 sm:space-y-12">
          <div className="flex flex-col gap-4">
            <ProjectCard />
          </div>
        </div>
      </section>
    </main>
  )
}
