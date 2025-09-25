// Vision Sense
import visionsenseThumbnail from '@/public/projects/visionsense/visionsense-thumbnail.png'
import vs1 from '@/public/projects/visionsense/visionsense1.png'
import vs2 from '@/public/projects/visionsense/visionsense2.png'

// Cache Bench
import cachebenchThumbnail from '@/public/projects/cachebench/cachebench-thumbnail.png'
import cachebench1 from '@/public/projects/cachebench/cachebench1.png'
import cachebench2 from '@/public/projects/cachebench/cachebench2.png'
import cachebench3 from '@/public/projects/cachebench/cachebench3.png'
import cachebench4 from '@/public/projects/cachebench/cachebench4.png'
import cachebench5 from '@/public/projects/cachebench/cachebench5.png'

// Shortsy
import shortsyThumbnail from '@/public/projects/shortsy/shortsy-thumbnail.png'
import shortsy1 from '@/public/projects/shortsy/shortsy1.png'
import shortsy2 from '@/public/projects/shortsy/shortsy2.png'

// BallonTracks
import balloontracksThumbnail from '@/public/projects/balloontracks/balloontracks-thumbnail.png'
import bt1 from '@/public/projects/balloontracks/bt-1.png'
import bt2 from '@/public/projects/balloontracks/bt-2.png'
import bt3 from '@/public/projects/balloontracks/bt-3.png'

// ChatBot
import chatbotThumbnail from '@/public/projects/chatbot/chatbot-thumbnail.png'
import chatbot1 from '@/public/projects/chatbot/cb-1.png'
import chatbot2 from '@/public/projects/chatbot/cb-2.png'
import chatbot3 from '@/public/projects/chatbot/cb-3.png'

import { Project } from '@/types/project'
import { motion } from 'framer-motion'

export const projects: Project[] = [
  {
    href: 'https://url-shortner-three-woad.vercel.app/',
    repo: 'https://github.com/sumedhbadnore/url-shortner',
    title: 'Shortsy',
    category: 'freelance',
    description: `A full-stack URL shortener platform powered by TypeScript and Redis. Supports QR code generation, custom slugs, and delivers 48ms p95 redirect speeds. Designed multi-env configs for smooth local, preview, and production deployment.`,
    thumbnail: shortsyThumbnail,
    images: [shortsy1, shortsy2],
    stack: ['Nextjs', 'Tailwindcss', 'Redis', 'Docker'],
    slug: 'shortsy',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Shortsy is a URL shortener platform I designed to go beyond the basics
          of link shortening. It lets users generate QR codes, create custom
          slugs, and monitor reliability at scale. My goal was to deliver
          performance and simplicity while ensuring smooth developer experience
          across environments.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The system uses Redis for ultra-fast lookups, enabling redirect speeds
          as low as 48ms at p95 latency. I engineered collision-free ID
          generation with TTL logic to ensure consistent and reliable link
          creation. On the deployment side, I created streamlined configs for
          local, preview, and production environments, reducing support requests
          by 70%. With CI/CD pipelines and strict validation/error handling in
          backend APIs, Shortsy has maintained 99.9% uptime across 2,000+ active
          links.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://cachebench-sandy.vercel.app/',
    repo: 'https://github.com/sumedhbadnore/cachebench',
    title: 'CacheBench',
    category: 'short-projects',
    description: `A cache policy simulator built with Next.js and TypeScript, designed to visualize and benchmark caching strategies. Improved reporting accuracy to 98% while reducing analysis time by 60% with CSV exports and Recharts.`,
    thumbnail: cachebenchThumbnail,
    images: [cachebench1, cachebench2, cachebench3, cachebench4, cachebench5],
    stack: ['Nextjs', 'Tailwindcss', 'Recharts', 'Vercel', 'Serverless APIs'],
    slug: 'cachebench',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          CacheBench started as a way to visualize and compare cache policies
          like LRU, FIFO, and LFU in real-time. I wanted to create a tool that
          could help students, engineers, and researchers benchmark caching
          strategies without writing their own scripts.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The app features a dynamic dashboard built with Recharts, where users
          can run simulations and export results to CSV for further analysis.
          Accuracy was a key goal, so I implemented O(1) operations for
          efficiency and achieved 98% reporting precision. To make it scalable,
          I integrated serverless APIs on Vercel with warmup logic, ensuring
          consistent results across runs. The UI was styled with Next.js and
          TypeScript, while Linux scripting and SSR-safe imports reduced runtime
          issues by 30%.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://facial-recognition-deploy-theta.vercel.app/',
    repo: 'https://github.com/sumedhbadnore/facial-recognition-deploy',
    title: 'VisionSense',
    category: 'freelance',
    description: `Facial recognition web app with 90% detection accuracy and secure authentication flows, deployed on Vercel with 99% uptime.`,
    thumbnail: visionsenseThumbnail,
    images: [vs1, vs2],
    stack: ['React', 'Node.js', 'Redux', 'Bootstrap', 'REST APIs'],
    slug: 'visionsense',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          I built VisionSense as a facial recognition web application designed
          for secure, real-time detection and authentication. The project’s goal
          was to explore how computer vision could enhance login systems and
          accessibility without compromising performance.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The app includes features like secure authentication flows, real-time
          facial recognition with 90% accuracy, and responsive UI across
          devices. I integrated Redux for state management and Bootstrap for a
          clean design system. Continuous deployment on Vercel ensured 99%
          uptime while Jest and React Testing Library helped achieve 95% test
          coverage, boosting reliability in production.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://ai-chatbot-gamma-cyan.vercel.app/',
    repo: 'https://github.com/sumedhbadnore/ai-chatbot',
    title: 'AI Chat Bot',
    category: 'all',
    description:
      'An interactive AI assistant that lets visitors chat with my portfolio, delivering fast, accurate answers about my skills and projects.',
    thumbnail: chatbotThumbnail,
    images: [chatbot1, chatbot2, chatbot3],
    stack: ['Nextjs', 'Openai', 'React'],
    slug: 'chatbot',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The Portfolio AI Chatbot is an interactive assistant I built to give
          visitors a richer, more conversational way to explore my background.
          Instead of just reading static pages, users can ask about my skills,
          projects, and career experience and get instant, context-aware
          answers.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The bot is powered by Next.js and OpenAI’s GPT-4-mini model, wrapped
          in a custom retrieval-augmented generation (RAG) layer. I preprocess
          and chunk my résumé data, then rank the most relevant snippets with a
          lightweight similarity search so the model always answers with
          accurate details. A streaming API and edge-runtime functions keep
          responses snappy, with median round-trip times under 200 ms.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          For deployment I built a fully self-contained widget that can be
          embedded via iframe on any site—my own portfolio or elsewhere—without
          style collisions. Strong Content-Security-Policy headers and carefully
          scoped sandbox permissions keep the integration secure while still
          allowing real-time interaction. The result is a smooth, low-latency
          chat experience that turns a static portfolio into a dynamic,
          always-on conversation.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://windborne-tracks-teal.vercel.app/',
    repo: 'https://github.com/sumedhbadnore/windborne-tracks',
    title: 'BalloonTracks',
    category: 'freelance',
    description:
      'Live 24 hour WindBorne telemetry stitched into speed-colored tracks on Leaflet with optional Open-Meteo ERA5 wind overlay, auto-refreshing and operator-friendly.',
    thumbnail: balloontracksThumbnail,
    images: [bt1, bt2, bt3],
    stack: ['Nextjs', 'Tailwindcss', 'Vercel', 'Serverless APIs'],
    slug: 'balloontracks',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          BalloonTracks began as an operator first view to turn 24 hour
          WindBorne telemetry into clear, live tracks. I built a tolerant parser
          for inconsistent hour files, framed positions by hour, then stitched
          points into per balloon paths using nearest neighbor with speed and
          jump caps. The goal was simple and mission driven show where balloons
          were and how they moved without forcing operators to wrangle raw data.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The app renders speed colored polylines on a Leaflet map with tooltips
          for time, speed, and altitude, and refreshes on a five minute cadence.
          I added an Open Meteo ERA5 wind overlay at selectable pressure levels
          to explain drift and speed spikes, plus controls for track count,
          thinning distance, min segments, and max speed. Server routes in
          Next.js fetch and normalize the data, keeping the client lightweight
          and reliable for real time use.
        </p>
      </motion.div>
    ),
  },
  
  // {
  //   href: '',
  //   repo: 'https://github.com/AndreChops/OrangeBurger',
  //   title: 'Orange Burger',
  //   category: 'university',
  //   description:
  //     'A restaurant website, where users can make food orders. Also includes admin dashboard, where admin can manage transactions.',
  //   thumbnail: orangeBurgerThumbnail,
  //   images: [orangeBurger, orangeBurger2],
  //   stack: ['PHP', 'Javascript', 'CSS'],
  //   slug: 'orangeburger',
  //   content: (
  //     <motion.div
  //       initial={{ opacity: 0, y: 40 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.3 }}
  //     >
  //       <p className="font-geist_mono tracking-tighter text-gray-400">
  //         Orange Burger is a web application developed as a midterm project for
  //         the Web Programming course during the 4th semester of my university
  //         studies. The website was designed to simulate a functional restaurant
  //         platform where users can browse through a menu, customize their
  //         orders, and place food orders directly through the site.
  //       </p>
  //       <p className="font-geist_mono tracking-tighter text-gray-400">
  //         The project also includes an admin dashboard, allowing restaurant
  //         administrators to efficiently manage orders and transactions. Through
  //         the dashboard, admins can track incoming orders, update order
  //         statuses, and maintain a record of past transactions, ensuring a
  //         seamless order management experience.
  //       </p>
  //       <p className="font-geist_mono tracking-tighter text-gray-400">
  //         This project not only helped me strengthen my skills in front-end and
  //         back-end web development but also gave me practical experience in
  //         building full-stack applications with user authentication, order
  //         processing, and data management features. The Orange Burger website
  //         reflects my ability to design and implement user-friendly interfaces
  //         and robust back-end systems to create a complete and functional web
  //         solution.
  //       </p>
  //     </motion.div>
  //   ),
  // },
  // {
  //   href: 'https://cv-atm.com/',
  //   repo: '',
  //   title: 'Anugerah Teknik Mandiri',
  //   category: 'freelance',
  //   description:
  //     'Company website for Anugerah Teknik Mandiri to displays their services and products. Made for commercial purposes.',
  //   thumbnail: cvAtmThumbnail,
  //   images: [cvAtm, cvAtm2],
  //   stack: ['HTML', 'CSS', 'Javascript'],
  //   slug: 'cvatm',
  //   content: (
  //     <motion.div
  //       initial={{ opacity: 0, y: 40 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.3 }}
  //     >
  //       <p className="font-geist_mono tracking-tighter text-gray-400">
  //         In 2020, during the COVID-19 pandemic, a friend offered me a freelance
  //         opportunity to create a website for his parent&apos;s company. Despite
  //         having no prior experience with web development at the time, I decided
  //         to take on the challenge. Through determination and self-learning, I
  //         successfully built and deployed a fully functional website within the
  //         given timeframe using only HTML, CSS, and JavaScript. This experience
  //         was particularly rewarding as I managed to achieve this without using
  //         any frameworks, relying solely on fundamental web development
  //         principles.
  //       </p>
  //     </motion.div>
  //   ),
  // },
]
