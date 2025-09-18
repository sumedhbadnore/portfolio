import Link from 'next/link'
import { LinkButton } from '@/components/ui/link-button'
import { Separator } from './ui/separator'
import { SocialLink } from './social-links'
import { socialLinks } from '@/constants/socials'


export const Footer = () => {
  return (
    <footer className="py-6 text-center text-xs sm:text-sm text-muted-foreground space-y-4 bg-black">
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute left-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent to-[#2c2c2c]"></div>
        <Separator className="w-1/2 bg-[#2c2c2c]" />
        <div className="absolute right-0 w-1/4 h-[1px] bg-gradient-to-l from-transparent to-[#2c2c2c]"></div>
      </div>
      <div className="font-geist_mono tracking-tighter">
        <p className="text-sm text-gray-400 mb-2">Reach me out</p>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} href={link.href}>
              <link.icon size={24} />
            </SocialLink>
          ))}
        </div>
      </div>
      <div className="font-geist_mono tracking-tighter">
        <b>
          © {new Date().getFullYear()}{' '}
          <LinkButton
            variant="underline_link_right"
            asChild
            className="p-0 h-auto cursor-[var(--external-cursor)]"
          >
            <Link href="https://github.com/sumedhbadnore" target="_blank">
              Sumedh Badnore
            </Link>
          </LinkButton>
          . All rights reserved. <br />
        </b>
      </div>
    </footer>
  )
}
