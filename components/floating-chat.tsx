'use client'

import * as React from 'react'

const EMBED_URL =
  process.env.NEXT_PUBLIC_BOT_EMBED_URL ??
  'https://ai-chatbot-sumedh-badnores-projects.vercel.app/embed'

export default function FloatingChat() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed right-5 bottom-5 z-50 rounded-full px-4 py-2 border border-white/10 bg-black/80 text-white shadow-xl backdrop-blur
                   hover:border-white/20 transition"
      >
        {open ? 'Close Chat' : 'AI Chat Bot'}
      </button>

      {open && (
        <iframe
          src={
            process.env.NEXT_PUBLIC_BOT_EMBED_URL ??
            'https://ai-chatbot-sumedh-badnores-projects.vercel.app/embed'
          }
          title="Sumedh AI Chat"
          sandbox="allow-scripts allow-same-origin allow-forms"
          allow="clipboard-write"
          className="fixed right-5 bottom-20 z-40 w-[380px] h-[520px] rounded-2xl border border-white/10 shadow-2xl"
          style={{ background: 'transparent' }}
        />
      )}
    </>
  )
}
