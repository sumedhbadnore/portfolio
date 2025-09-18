// Math Fantasy
import mathFantasyThumbnail from '@/public/projects/math-fantasy/math-fantasy-thumbnail.png'
import mathFantasyCaveLevel from '@/public/projects/math-fantasy/math-fantasy-cavelevel.png'
import mathFantasySwampLevel from '@/public/projects/math-fantasy/math-fantasy-swamplevel.png'
import mathFantasyTaigaLevel from '@/public/projects/math-fantasy/math-fantasy-taigalevel.png'
import mathFantasyGameOver from '@/public/projects/math-fantasy/math-fantasy-gameover.png'
import mathFantasyMainMenu from '@/public/projects/math-fantasy/math-fantasy-mainmenu.png'
import mathFantasyQuestion from '@/public/projects/math-fantasy/math-fantasy-question.png'
import mathFantasyQuestion2 from '@/public/projects/math-fantasy/math-fantasy-question2.png'
import mathFantasyQuestion3 from '@/public/projects/math-fantasy/math-fantasy-question3.png'
import mathFantasyLevelSelect from '@/public/projects/math-fantasy/math-fantasy-levelselect.png'
import mathFantasyHowtoPlay from '@/public/projects/math-fantasy/math-fantasy-howtoplay.png'

// Anugerah Teknik Mandiri
import cvAtmThumbnail from '@/public/projects/cv-atm/cv-atm-thumbnail.png'
import cvAtm from '@/public/projects/cv-atm/cv-atm.png'
import cvAtm2 from '@/public/projects/cv-atm/cv-atm-2.png'

// Orange Burger
import orangeBurgerThumbnail from '@/public/projects/orange-burger/orange-burger-thumbnail.png'
import orangeBurger from '@/public/projects/orange-burger/orange-burger.png'
import orangeBurger2 from '@/public/projects/orange-burger/orange-burger2.png'

// Sei-You
import seiYouThumbnail from '@/public/projects/sei-you/sei-you-thumbnail.png'
import sei1 from '@/public/projects/sei-you/sei-you.jpg'
import sei2 from '@/public/projects/sei-you/sei-you2.jpg'
import sei3 from '@/public/projects/sei-you/sei-you3.jpg'

// BCS-Serpong
import bcsThumbnail from '@/public/projects/bcs-serpong/bcs-thumbnail.png'
import bcs1 from '@/public/projects/bcs-serpong/bcs-1.png'
import bcs2 from '@/public/projects/bcs-serpong/bcs-2.png'
import bcs3 from '@/public/projects/bcs-serpong/bcs-3.png'
import bcs4 from '@/public/projects/bcs-serpong/bcs-4.png'
import bcs5 from '@/public/projects/bcs-serpong/bcs-5.png'
import bcs6 from '@/public/projects/bcs-serpong/bcs-6.png'
import bcs7 from '@/public/projects/bcs-serpong/bcs-7.png'
import bcs8 from '@/public/projects/bcs-serpong/bcs-8.png'

// Expense-Tracker
import cachebenchThumbnail from '@/public/projects/expense-tracker/expense-tracker-thumbnail.png'
import cachebench1 from '@/public/projects/expense-tracker/cachebench1.png'
import cachebench2 from '@/public/projects/expense-tracker/cachebench2.png'
import cachebench3 from '@/public/projects/expense-tracker/cachebench3.png'
import cachebench4 from '@/public/projects/expense-tracker/cachebench4.png'
import cachebench5 from '@/public/projects/expense-tracker/cachebench5.png'
import expensetracker6 from '@/public/projects/expense-tracker/expense-tracker-6.png'
import expensetracker7 from '@/public/projects/expense-tracker/expense-tracker-7.png'
import expensetracker8 from '@/public/projects/expense-tracker/expense-tracker-8.png'

// Shortsy
import shortsyThumbnail from '@/public/projects/atlantis-realty/atlantis-realty-thumbnail.png'
import shortsy1 from '@/public/projects/atlantis-realty/shortsy1.png'
import shortsy2 from '@/public/projects/atlantis-realty/shortsy2.png'

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
    images: [
      cachebench1,
      cachebench2,
      cachebench3,
      cachebench4,
      cachebench5,
      expensetracker6,
      expensetracker7,
      expensetracker8,
    ],
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
    href: 'https://bcs-serpong.org',
    repo: '',
    title: 'GKKK BCS Serpong',
    category: 'freelance',
    description: `A dedicated website for GKKK BCS Serpong, showcasing our church's mission, values, and community activities.`,
    thumbnail: bcsThumbnail,
    images: [bcs1, bcs2, bcs3, bcs4, bcs5, bcs6, bcs7, bcs8],
    stack: ['Nextjs', 'Tailwindcss', 'Shadcn'],
    slug: 'bcs-serpong',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          I created a website for my church, GKKK BCS Serpong, to provide a
          comprehensive online platform that represents our community, mission,
          and values. The website serves as a central hub for sharing our
          church&apos;s vision of spreading God&apos;s love and building a
          strong community grounded in faith. It also provides visitors with
          information about our church activities, worship schedules, and
          opportunities to get involved.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          My motivation for building this website was to make it easier for
          people to connect with our church, learn about who we are, and
          understand how they can support our ministry. It&apos;s a tool to
          share updates, encourage participation, and reflect the welcoming
          spirit of GKKK BCS Serpong, extending our reach to those who might be
          seeking a place to grow in their faith.
        </p>
      </motion.div>
    ),
  },
  {
    href: '',
    repo: 'https://github.com/AndreChops/MathFantasy',
    title: 'Math Fantasy',
    category: 'university',
    description:
      'Math Fantasy, is a statistics mathematic learning game with a 2D Top Down Syle, designed to help students learn through playing a game.',
    thumbnail: mathFantasyThumbnail,
    images: [
      mathFantasyMainMenu,
      mathFantasyHowtoPlay,
      mathFantasyLevelSelect,
      mathFantasyTaigaLevel,
      mathFantasySwampLevel,
      mathFantasyCaveLevel,
      mathFantasyQuestion,
      mathFantasyQuestion2,
      mathFantasyQuestion3,
      mathFantasyGameOver,
    ],
    stack: ['Unity'],
    slug: 'mathfantasy',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Math Fantasy is my final project at Universitas Multimedia Nusantara,
          where I developed a top-down 2D RPG-style game designed to make
          learning statistics more engaging. The game utilizes the Fisher-Yates
          algorithm to randomly shuffle questions, ensuring that players cannot
          memorize answers and are challenged with new question sets each time
          they play. In the game, players must defeat enemies before reaching a
          sign that contains a series of questions related to statistics. The
          core aim of the game is to enhance learning motivation by
          incorporating educational elements into an interactive, fun gameplay
          experience.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The game was created using Unity Engine version 2021.3.16f1, and I
          used 2D assets obtained from itch.io to bring the game to life. The
          game&apos;s mechanics are focused on rewarding problem-solving and
          learning, offering a dynamic experience where players actively
          participate in their education while also enjoying an adventure. By
          blending education with gaming, Math Fantasy seeks to encourage
          students to stay motivated and improve their knowledge in a fun and
          immersive way.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://sei-you.vercel.app/',
    repo: 'https://github.com/IArnFredo/WeHearYouAll-SeiYou',
    title: 'Sei-You',
    category: 'university',
    description:
      'SeiYou is a voice-over application and it is hoped that everyone will get passion and work from this application for those who need it.',
    thumbnail: seiYouThumbnail,
    images: [sei1, sei2, sei3],
    stack: ['Ionic', 'Capacitor', 'React'],
    slug: 'sei-you',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          SeiYou is a voice-over application designed to enable users to express
          themselves through voice recordings. Users can easily record their
          voices and share them with the community, allowing others to discover
          and listen to unique voice content.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          This project was developed using Ionic and Capacitor for
          cross-platform compatibility, combined with React and TypeScript for a
          robust and scalable architecture. The goal was to create a seamless
          user experience with intuitive navigation and smooth audio playback
          functionality.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Through this project, I gained valuable experience in mobile app
          development, integrating audio recording features, and managing
          user-generated content. SeiYou represents my ability to build engaging
          applications that encourage creativity and interaction among users.
        </p>
      </motion.div>
    ),
  },
  {
    href: '',
    repo: 'https://github.com/AndreChops/OrangeBurger',
    title: 'Orange Burger',
    category: 'university',
    description:
      'A restaurant website, where users can make food orders. Also includes admin dashboard, where admin can manage transactions.',
    thumbnail: orangeBurgerThumbnail,
    images: [orangeBurger, orangeBurger2],
    stack: ['PHP', 'Javascript', 'CSS'],
    slug: 'orangeburger',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          Orange Burger is a web application developed as a midterm project for
          the Web Programming course during the 4th semester of my university
          studies. The website was designed to simulate a functional restaurant
          platform where users can browse through a menu, customize their
          orders, and place food orders directly through the site.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          The project also includes an admin dashboard, allowing restaurant
          administrators to efficiently manage orders and transactions. Through
          the dashboard, admins can track incoming orders, update order
          statuses, and maintain a record of past transactions, ensuring a
          seamless order management experience.
        </p>
        <p className="font-geist_mono tracking-tighter text-gray-400">
          This project not only helped me strengthen my skills in front-end and
          back-end web development but also gave me practical experience in
          building full-stack applications with user authentication, order
          processing, and data management features. The Orange Burger website
          reflects my ability to design and implement user-friendly interfaces
          and robust back-end systems to create a complete and functional web
          solution.
        </p>
      </motion.div>
    ),
  },
  {
    href: 'https://cv-atm.com/',
    repo: '',
    title: 'Anugerah Teknik Mandiri',
    category: 'freelance',
    description:
      'Company website for Anugerah Teknik Mandiri to displays their services and products. Made for commercial purposes.',
    thumbnail: cvAtmThumbnail,
    images: [cvAtm, cvAtm2],
    stack: ['HTML', 'CSS', 'Javascript'],
    slug: 'cvatm',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-geist_mono tracking-tighter text-gray-400">
          In 2020, during the COVID-19 pandemic, a friend offered me a freelance
          opportunity to create a website for his parent&apos;s company. Despite
          having no prior experience with web development at the time, I decided
          to take on the challenge. Through determination and self-learning, I
          successfully built and deployed a fully functional website within the
          given timeframe using only HTML, CSS, and JavaScript. This experience
          was particularly rewarding as I managed to achieve this without using
          any frameworks, relying solely on fundamental web development
          principles.
        </p>
      </motion.div>
    ),
  },
]
