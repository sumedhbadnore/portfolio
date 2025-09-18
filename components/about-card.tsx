'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import MotionText from './motions/motion-text'
import Link from 'next/link'
import { techStack } from '@/constants/tech-stacks'

export default function AboutCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
      <div className="space-y-8 order-last lg:order-first">
        <div>
          <MotionText
            as="h2"
            className="text-2xl font-bold text-white mb-2"
            duration={0.4}
            simpleAnimation={true}
          >
            Sumedh Jitendra Badnore
          </MotionText>
          <MotionText
            as="p"
            duration={0.4}
            simpleAnimation={true}
            className="text-gray-400 mb-4 font-geist_mono tracking-tighter"
          >
            Fullstack Developer at <span className="hidden sm:inline"></span>
            <span className="block sm:hidden"></span>
            <Link
              href="/experiences#working-experience"
              className="relative w-fit text-[#55f89f] after:absolute after:w-full after:scale-x-0 after:h-[0.05rem] after:bottom-0 after:left-0 after:origin-right after:bg-gradient-to-r after:from-[#55f89f] after:to-[#55f8d5] after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              CuraJOY
            </Link>
          </MotionText>
          <MotionText
            as="p"
            duration={0.4}
            simpleAnimation={true}
            className="text-gray-400 font-geist_mono tracking-tighter"
          >
            Hello! You can call me{' '}
            <MotionText
              as="span"
              duration={0.4}
              simpleAnimation={true}
              className="text-white font-medium"
            >
              Sumedh
            </MotionText>
            . Right now, I love building full-stack applications with clean
            designs, and I pay a lot of attention to performance and
            accessibility.
          </MotionText>
        </div>

        <div>
          <MotionText
            as="h3"
            duration={0.4}
            simpleAnimation={true}
            className="text-lg font-medium text-white mb-4"
          >
            My Journey
          </MotionText>
          <MotionText
            as="p"
            duration={0.4}
            simpleAnimation={true}
            className="text-gray-400 mb-4 font-geist_mono tracking-tighter"
          >
            During my undergrad, I wasn’t fully into web development even though
            I studied computer science. Things changed during internships and
            grad school projects, I started building apps that solved real
            problems, from dashboards to cloud systems. That’s when my interest
            in full-stack engineering really took off.
          </MotionText>
          <MotionText
            as="p"
            duration={0.4}
            simpleAnimation={true}
            className="text-gray-400 font-geist_mono tracking-tighter"
          >
            Most of my roles; from Accenture to CuraJOY, pushed me into backend
            and cloud engineering, working with Java, Node.js, and AWS. But I’ve
            always carried my love for front-end design and user experience.
            Now, as a software engineer, I focus on bridging both worlds by
            crafting apps that are scalable on the backend and delightful on the
            frontend.
          </MotionText>
        </div>

        <div>
          <MotionText
            as="h3"
            duration={0.4}
            simpleAnimation={true}
            className="text-lg font-medium text-white mb-4"
          >
            Tech Stack
          </MotionText>
          <MotionText
            as="p"
            duration={0.4}
            simpleAnimation={true}
            className="text-gray-400 mb-4 font-geist_mono tracking-tighter"
          >
            Here are the few technologies that I&apos;m currently exploring and
            building with.
          </MotionText>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-row flex-wrap gap-4"
          >
            <TooltipProvider>
              <div className="flex gap-3 flex-wrap">
                {techStack.map((tech, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="p-1 rounded-full cursor-pointer hover:bg-muted/50 transition-colors">
                        <tech.icon className="h-5 w-5" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[250px] p-3 space-y-2">
                      <div className="space-y-1 flex items-center gap-2">
                        <tech.icon className="h-5 w-5" />
                        <p className="font-medium font-alliance">{tech.name}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="space-y-8"
      >
        <div className="relative w-full max-w-md mx-auto">
          <div className="group">
            {/* <div className="absolute -inset-0 bg-gradient-to-r from-[#55f89f] to-[#55f8d5] blur opacity-75 group-hover:opacity-100 transition duration-300"></div> */}
            <div className="relative p-2">
              <div className="bg-black shadow-xl overflow-hidden">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 border-4 border-[#55f89f] z-10 transition-colors duration-300 ">
                    <Image
                      src="/profile/profile3.jpeg"
                      alt="Sumedh Badnore's Profile Picture"
                      fill
                      className="object-cover transition-all duration-500 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
