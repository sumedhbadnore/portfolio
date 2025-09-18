import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Terminal } from 'lucide-react'
import React from 'react'

type CommandOutput = React.ReactNode | string

interface CommandData {
  cmd: string
  output: CommandOutput
}

interface HistoryEntry {
  command: string
  output: CommandOutput
}

export default function TerminalSection() {
  const [userInput, setUserInput] = useState<string>('')
  const [terminalHistory, setTerminalHistory] = useState<HistoryEntry[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const [terminalState, setTerminalState] = useState<
    'open' | 'minimized' | 'maximized' | 'closed'
  >('open')
  const terminalInputRef = useRef<HTMLInputElement>(null)
  const terminalBodyRef = useRef<HTMLDivElement>(null)
  const [previousTerminalState, setPreviousTerminalState] = useState<
    'open' | 'minimized' | 'maximized'
  >('open')
  // Game state for "Devdle"
  const [gameActive, setGameActive] = useState(false)
  const [gameSecret, setGameSecret] = useState<string>('')
  const [gameAttempts, setGameAttempts] = useState<string[]>([])
  const maxAttempts = 6

  // 5-letter tech words (tweak as you like)
  const DEV_WORDS = [
    'react',
    'hooks',
    'redux',
    'array',
    'types',
    'nodej',
    'cache',
    'model',
    'cloud',
    'tests',
    'state',
    'queue',
    'infra',
    'merge',
    'query',
  ]
  const startDevdle = () => {
    const secret = DEV_WORDS[Math.floor(Math.random() * DEV_WORDS.length)]
    setGameSecret(secret)
    setGameAttempts([])
    setGameActive(true)
  }

  const endDevdle = () => {
    setGameActive(false)
    setGameSecret('')
    setGameAttempts([])
  }

  const scoreGuess = (guess: string, secret: string) => {
    // Return array of emoji markers per char
    const res: string[] = Array(5).fill('⬛')
    const secretArr = secret.split('')
    const used = Array(5).fill(false)

    // First pass: correct position
    for (let i = 0; i < 5; i++) {
      if (guess[i] === secret[i]) {
        res[i] = '🟩'
        used[i] = true
      }
    }

    // Second pass: present elsewhere
    for (let i = 0; i < 5; i++) {
      if (res[i] === '🟩') continue
      const idx = secretArr.findIndex((c, j) => c === guess[i] && !used[j])
      if (idx !== -1) {
        res[i] = '🟨'
        used[idx] = true
      }
    }

    return res.join('')
  }

  const commands: CommandData[] = [
    {
      cmd: 'whoami --info',
      output: (
        <>
          <span className="text-[#55f89f] font-bold">
            Sumedh Jitendra Badnore
          </span>
          <br />
          <span className="text-gray-300">
            Full Stack Developer | React • TypeScript • AWS • Microservices •
            SQL/NoSQL
          </span>
          <br />
          <span className="text-gray-400">
            New York, USA — Open to relocation
          </span>
        </>
      ),
    },
    {
      cmd: 'contact --all',
      output: (
        <>
          <div className="text-blue-400">sumedhbadnore2801@gmail.com</div>
          <div className="text-gray-300">
            LinkedIn: linkedin.com/in/sumedhbadnore
          </div>
          <div className="text-gray-300">GitHub: github.com/sumedhbadnore</div>
          <div className="text-gray-300">Portfolio: sumedh.dev</div>
        </>
      ),
    },
    {
      cmd: 'availability --status',
      output: (
        <>
          <span className="text-green-400 font-bold">
            Actively seeking full-time SWE roles
          </span>
          <br />
          <span className="text-gray-300">
            Hybrid NYC or Remote US preferred
          </span>
        </>
      ),
    },
    {
      cmd: 'metrics --highlights',
      output: (
        <>
          <div className="text-gray-300">
            Latency ↓ 30 percent • Uptime ↑ 25 percent • Deploy failures ↓ 40
            percent
          </div>
          <div className="text-gray-300">
            User adoption ↑ 35 percent • 3,000 plus MAU supported
          </div>
        </>
      ),
    },
    {
      cmd: 'stack --top',
      output: (
        <>
          <div className="text-purple-400">Frontend:</div>
          <div className="text-gray-300">
            React, Next.js, TypeScript, Redux, MUI, Bootstrap
          </div>
          <div className="text-purple-400 mt-2">Backend:</div>
          <div className="text-gray-300">
            Node.js, Express, Java, Python, REST APIs
          </div>
          <div className="text-purple-400 mt-2">Cloud & DevOps:</div>
          <div className="text-gray-300">
            AWS Amplify, Lambda, S3, DynamoDB, Docker, GitHub Actions
          </div>
          <div className="text-purple-400 mt-2">Data:</div>
          <div className="text-gray-300">
            PostgreSQL, MongoDB, Redis, Firebase
          </div>
          <div className="text-purple-400 mt-2">Quality:</div>
          <div className="text-gray-300">
            Jest, React Testing Library, JUnit, WCAG 508
          </div>
        </>
      ),
    },
    {
      cmd: 'experience --recent',
      output: (
        <>
          <div className="text-[#55f89f] font-bold">
            CuraJOY — Full Stack Developer
          </div>
          <div className="text-gray-300">
            React and Node on AWS Amplify; throughput ↑ 35 percent for 3000 plus
            users; CI/CD and accessibility wins
          </div>
          <br />
          <div className="text-[#55f89f] font-bold">
            Accenture — Software Dev Intern
          </div>
          <div className="text-gray-300">
            Java microservices and SQL; monitoring automation; logging
            pipelines; uptime ↑ 20 percent
          </div>
        </>
      ),
    },
    {
      cmd: 'education --show',
      output: (
        <>
          <div className="text-[#55f89f] font-bold">
            Stevens Institute of Technology
          </div>
          <div className="text-gray-300">
            MS Computer Science — GPA 3.7 • May 2025
          </div>
          <div className="text-gray-400">
            DSA, Web Programming, Software Requirements, DBMS, Machine Learning
          </div>
        </>
      ),
    },
    {
      cmd: 'projects --list',
      output: (
        <>
          <div className="text-blue-400">vision --open</div>
          <div className="text-blue-400">cachebench --open</div>
          <div className="text-blue-400">shortsy --open</div>
          <div className="text-gray-400 mt-1">
            Tip: type a project command above to see details
          </div>
        </>
      ),
    },
    {
      cmd: 'vision --open',
      output: (
        <>
          <div className="text-[#55f89f] font-bold">
            VisionSense — Facial Recognition App
          </div>
          <div className="text-gray-300">
            Real time detection at 90 percent accuracy; 500 plus MAU; 99 percent
            uptime on Vercel; tests at 95 percent
          </div>
          <div className="text-gray-400">
            React, Node, Redux, Bootstrap, REST APIs, Vercel
          </div>
          <a
            className="text-blue-400 underline"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
          <span className="text-gray-500"> • </span>
          <a
            className="text-blue-400 underline"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </>
      ),
    },
    {
      cmd: 'cachebench --open',
      output: (
        <>
          <div className="text-[#55f89f] font-bold">
            CacheBench — Cache Policy Simulator
          </div>
          <div className="text-gray-300">
            Visualizes LRU and friends; reporting accuracy 98 percent; analysis
            time ↓ 60 percent; serverless warmups
          </div>
          <div className="text-gray-400">
            Next.js, TypeScript, Recharts, Vercel, Serverless APIs
          </div>
          <a
            className="text-blue-400 underline"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
          <span className="text-gray-500"> • </span>
          <a
            className="text-blue-400 underline"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </>
      ),
    },
    {
      cmd: 'shortsy --open',
      output: (
        <>
          <div className="text-[#55f89f] font-bold">
            Shortsy — URL Shortener
          </div>
          <div className="text-gray-300">
            QR codes and custom slugs; 48ms p95 redirects; 99.9 percent uptime;
            support requests ↓ 70 percent
          </div>
          <div className="text-gray-400">
            TypeScript, Node, Redis, Docker, CI/CD
          </div>
          <a
            className="text-blue-400 underline"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
          <span className="text-gray-500"> • </span>
          <a
            className="text-blue-400 underline"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </>
      ),
    },
    {
      cmd: 'quote --random',
      output: (
        <>
          <span className="text-blue-400 font-bold">
            The best optimization is the one users never notice.
          </span>
          <br />
          <span className="text-gray-300">— probably Sumedh, after coffee</span>
        </>
      ),
    },
    {
      cmd: 'sweet --status',
      output: (
        <>
          <span className="text-yellow-400">🍫 Sweet tooth engaged</span>
          <br />
          <span className="text-gray-300">
            Monitoring sugar like I monitor server logs
          </span>
        </>
      ),
    },
    {
      cmd: 'dog --summon',
      output: (
        <>
          <pre className="text-yellow-400">{`
 ⢠⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⢶⡆⠀⠀⠀⠀
⠀⠸⡇⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠁⠀⠸⡄⠀⠀⠀⠀
⠀⢸⡇⠀⠀⠀⠘⣦⠀⠀⢀⣀⣀⡀⠀⣾⠀⢀⣀⠀⠹⡀⠀⠀⠀
⠀⠈⣇⠀⠀⣠⡄⣿⣶⣿⣿⣿⣿⣿⣿⣿⡇⢻⣿⠀⢠⡇⠀⠀⠀
⠀⠀⢻⠂⠀⢿⡧⣽⣿⣿⡟⠁⢻⣿⣿⣿⠉⣶⣅⢀⡤⠃⠀⠀⠀
⠀⠀⠀⠙⠲⢿⣷⣿⡿⢿⣇⠀⢸⡿⠿⣿⣷⣿⡟⠉⠀⠀⠀⠀⠀
⠀⣠⣤⣤⠀⠈⣿⣯⣶⣼⣿⠆⣿⣧⣾⣶⣿⢿⠀⠀⢀⣀⣀⠀⠀
⡾⣯⣿⣬⡟⡆⢙⢯⣭⠟⠉⠀⠈⠛⢷⣿⡞⠸⢀⡞⣿⣹⡟⣷⡄
⠚⠛⠒⠚⠓⠓⠚⠢⡁⠀⣔⡒⣶⠀⢀⠀⣰⠓⠚⠓⠛⠛⠛⠓⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠑⠦⡙⠷⠉⢐⡠⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        `}</pre>
          <span className="text-gray-300">Muffy - "woof....woof...."</span>
        </>
      ),
    },
    {
      cmd: 'resume --download',
      output: (
        <>
          <span className="text-[#55f89f]">Download resume:</span>{' '}
          <a
            className="text-blue-400 underline"
            href="/Sumedh_Badnore_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Sumedh_Badnore_Resume.pdf
          </a>
        </>
      ),
    },
    {
      cmd: 'game --help',
      output: (
        <div className="text-gray-300">
          <div className="text-[#55f89f] font-bold mb-1">
            Devdle — 5-letter dev word
          </div>
          <div>
            Start: <span className="text-yellow-400">game --play</span>
          </div>
          <div>
            Quit: <span className="text-yellow-400">game --quit</span>
          </div>
          <div className="mt-1 text-gray-400">
            While active, just type guesses (5 letters).
          </div>
          <div>🟩 correct • 🟨 present • ⬛ absent</div>
        </div>
      ),
    },
    {
      cmd: 'game --play',
      output: (
        <div className="text-gray-300">
          <div className="text-[#55f89f] font-bold">Devdle started!</div>
          <div>Guess the 5-letter dev word in 6 tries.</div>
          <div className="text-gray-400">
            Type a guess like <span className="text-yellow-400">react</span> and
            hit Enter.
          </div>
          <div className="text-gray-500 mt-1">
            Need help? <span className="text-yellow-400">game --help</span> | <span className="text-yellow-400">game --quit</span>
          </div>
        </div>
      ),
    },
    {
      cmd: 'game --quit',
      output: (
        <div className="text-gray-300">
          <div className="text-[#55f89f] font-bold">Devdle ended.</div>
          <div className="text-gray-400">
            Come back with <span className="text-yellow-400">game --play</span>.
          </div>
        </div>
      ),
    },
    {
      cmd: 'help',
      output: (
        <div className="text-gray-300">
          <p className="text-[#55f89f] mb-2">Available commands:</p>
          {[
            'whoami --info',
            'contact --all',
            'metrics --highlights',
            'stack --top',
            'experience --recent',
            'projects --list',
            'quote --random',
            'dog --summon',
            'resume --download',
            'game --play',
            'clear',
          ].map((c, i) => (
            <div key={i} className="mb-1">
              <span className="text-yellow-400">{c}</span>
            </div>
          ))}
        </div>
      ),
    },
  ]

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }

  const processCommand = (raw: string) => {
    let output: CommandOutput
    const cmd = raw.trim().toLowerCase()

    // If game active, treat input as a guess unless user types game control
    if (gameActive && !cmd.startsWith('game --')) {
      // Validate guess
      if (cmd.length !== 5 || /[^a-z]/.test(cmd)) {
        output = (
          <span className="text-red-400">
            Enter a 5-letter word. Example: react
          </span>
        )
      } else {
        const score = scoreGuess(cmd, gameSecret)
        const attemptLine = (
          <div className="text-gray-300">
            <span className="text-yellow-400 mr-2">{cmd}</span>
            <span className="font-bold">{score}</span>
          </div>
        )

        const newAttempts = [...gameAttempts, cmd]
        setGameAttempts(newAttempts)

        if (cmd === gameSecret) {
          output = (
            <div className="text-[#55f89f]">
              {attemptLine}
              <div className="mt-1 font-bold">
                🎉 Correct! The word was{' '}
                <span className="text-yellow-400">{gameSecret}</span>.
              </div>
              <div className="text-gray-400">
                Play again with{' '}
                <span className="text-yellow-400">game --play</span>
              </div>
            </div>
          )
          endDevdle()
        } else if (newAttempts.length >= maxAttempts) {
          output = (
            <div className="text-red-400">
              {attemptLine}
              <div className="mt-1 font-bold">
                Out of tries. The word was{' '}
                <span className="text-yellow-400">{gameSecret}</span>.
              </div>
              <div className="text-gray-400">
                Try again with{' '}
                <span className="text-yellow-400">game --play</span>
              </div>
            </div>
          )
          endDevdle()
        } else {
          output = attemptLine
        }
      }

      setTerminalHistory((prev: HistoryEntry[]) => [
        ...prev,
        { command: raw, output },
      ])
      setTimeout(scrollToBottom, 0)
      return
    }

    // Normal command handling
    if (cmd === 'help') {
      output = (
        // <div className="text-gray-300">
        //   <p className="text-[#55f89f] mb-2">Available commands:</p>
        //   {commands.map((command, index) => (
        //     <div key={index} className="mb-1">
        //       <span className="text-yellow-400">{command.cmd}</span>
        //     </div>
        //   ))}
        //   <div className="mb-1">
        //     <span className="text-yellow-400">help</span> - Display this help
        //     message
        //   </div>
        //   <div className="mb-1">
        //     <span className="text-yellow-400">clear</span> - Clear the terminal
        //   </div>
        // </div>
        <div className="text-gray-300">
          <p className="text-[#55f89f] mb-2">Available commands:</p>
          {[
            'whoami --info',
            'contact --all',
            'metrics --highlights',
            'stack --top',
            'experience --recent',
            'projects --list',
            'quote --random',
            'dog --summon',
            'game --play',
            'resume --download',
            'clear',
          ].map((c, i) => (
            <div key={i} className="mb-1">
              <span className="text-yellow-400">{c}</span>
            </div>
          ))}
        </div>
      )}
       else if (cmd === 'clear') {
      setTerminalHistory([])
      return
    } else if (cmd === 'game --play') {
      startDevdle()
      // Also show the "started" message styled same as commands entry
      const found = commands.find((c) => c.cmd === 'game --play')
      output = found ? (
        found.output
      ) : (
        <span className="text-[#55f89f]">Devdle started.</span>
      )
    } else if (cmd === 'game --quit') {
      endDevdle()
      const found = commands.find((c) => c.cmd === 'game --quit')
      output = found ? (
        found.output
      ) : (
        <span className="text-gray-300">Devdle ended.</span>
      )
    } else {
      const foundCommand = commands.find((command) => command.cmd === raw)
      if (foundCommand) {
        output = foundCommand.output
      } else {
        output = (
          <span className="text-red-400">
            Command not found: {raw}. Type 'help' for available commands.
          </span>
        )
      }
    }

    setTerminalHistory((prev: HistoryEntry[]) => [
      ...prev,
      { command: raw, output },
    ])
    setTimeout(scrollToBottom, 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const command = userInput.trim()
      if (command) {
        processCommand(command)
        setCommandHistory((prev) => [command, ...prev])
        setHistoryIndex(-1)
        setUserInput('')
        setTimeout(scrollToBottom, 50)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()

      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex < commandHistory.length - 1
            ? historyIndex + 1
            : historyIndex
        setHistoryIndex(newIndex)
        setUserInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()

      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setUserInput(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setUserInput('')
      }
    }
  }

  const focusTerminal = () => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus()
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [terminalHistory])

  useEffect(() => {
    const handleGlobalKeyPress = () => {
      if (
        document.activeElement !== terminalInputRef.current &&
        terminalState !== 'closed'
      ) {
        terminalInputRef.current?.focus()
      }
    }

    window.addEventListener('keypress', handleGlobalKeyPress)
    return () => {
      window.removeEventListener('keypress', handleGlobalKeyPress)
    }
  }, [terminalState])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && terminalState === 'maximized') {
        setTerminalState('open')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [terminalState, previousTerminalState])

  useEffect(() => {
    if (terminalInputRef.current && historyIndex >= 0) {
      const length = terminalInputRef.current.value.length
      setTimeout(() => {
        terminalInputRef.current?.setSelectionRange(length, length)
      }, 0)
    }
  }, [historyIndex])

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [terminalHistory])

  const handleCloseTerminal = (e: React.MouseEvent) => {
    e.stopPropagation()
    setTerminalState('closed')
  }

  const handleMinimizeTerminal = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (terminalState !== 'minimized') {
      setPreviousTerminalState(
        terminalState === 'closed' ? 'open' : terminalState
      )
      setTerminalState('minimized')
    } else {
      setTerminalState(previousTerminalState)
    }
  }

  const handleMaximizeTerminal = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (terminalState !== 'maximized') {
      setPreviousTerminalState(
        terminalState === 'closed' ? 'open' : terminalState
      )
      setTerminalState('maximized')
    } else {
      setTerminalState('open')
    }
  }

  const handleReopenTerminal = () => {
    setTerminalState('open')
    setTerminalHistory([])
    setCommandHistory([])
    setHistoryIndex(-1)
  }

  return (
    <div className="w-full flex justify-center lg:justify-center items-center">
      {terminalState === 'closed' ? (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-4 shadow-lg bg-black text-[#55f89f] border border-[#215237] rounded-none transition-all duration-300 hover:border-[#55f89f] z-10 font-geist"
          onClick={handleReopenTerminal}
        >
          <Terminal className="w-6 h-6 mb-2 mx-auto" />
          <span className="text-sm font-roboto_mono">Open Terminal</span>
        </motion.button>
      ) : (
        <>
          {terminalState === 'maximized' && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 z-40"
              onClick={() => setTerminalState('open')}
            />
          )}

          {terminalState === 'maximized' ? (
            <div
              className="fixed inset-0 flex items-center justify-center z-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setTerminalState('open')
                } else {
                  focusTerminal()
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-4/5 max-w-4xl"
              >
                <div className="terminal-window flex flex-col">
                  <div className="terminal-header cursor-move flex-shrink-0">
                    <div className="terminal-buttons">
                      <button
                        className="terminal-button close"
                        onClick={handleCloseTerminal}
                        title="Close"
                      ></button>
                      <button
                        className="terminal-button minimize"
                        onClick={handleMinimizeTerminal}
                        title="Minimize"
                      ></button>
                      <button
                        className="terminal-button maximize"
                        onClick={handleMaximizeTerminal}
                        title="Exit Full Screen"
                      ></button>
                    </div>
                    <div className="terminal-title font-roboto_mono truncate">
                      sumedh@dev: ~/sumedh-portfolio (Full Screen)
                    </div>
                  </div>
                  <div
                    className="terminal-body overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 flex-grow"
                    ref={terminalBodyRef}
                    style={{
                      height: '70vh',
                      maxHeight: 'calc(80vh - 30px)',
                      overflowY: 'auto',
                      scrollBehavior: 'smooth',
                    }}
                  >
                    {terminalHistory.length === 0 && (
                      <div className="terminal-welcome mb-2">
                        <p className="text-[#55f89f]">
                          Welcome to Sumedh's Terminal!
                        </p>
                        <p className="text-gray-400">
                          Type 'help' to see available commands.
                        </p>
                      </div>
                    )}

                    {terminalHistory.map((entry, index) => (
                      <div key={index} className="mb-4">
                        <div className="terminal-line">
                          <span className="terminal-prompt font-roboto_mono">
                            $
                          </span>{' '}
                          <span className="terminal-command font-roboto_mono">
                            {entry.command}
                          </span>
                        </div>
                        <div className="terminal-output font-roboto_mono mt-1">
                          {entry.output}
                        </div>
                      </div>
                    ))}

                    <div className="terminal-line">
                      <span className="terminal-prompt font-roboto_mono">
                        $
                      </span>{' '}
                      <span className="terminal-command font-roboto_mono">
                        {userInput}
                      </span>
                      <span className="terminal-caret"></span>
                    </div>

                    <input
                      ref={terminalInputRef}
                      type="text"
                      className="terminal-hidden-input"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      autoCorrect="off"
                      autoCapitalize="off"
                      autoComplete="off"
                      spellCheck="false"
                      autoFocus
                      aria-label="Terminal command input"
                      style={{
                        position: 'absolute',
                        opacity: 0,
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`relative terminal-container w-full ${
                terminalState === 'minimized' ? 'terminal-minimized' : ''
              }`}
              onClick={focusTerminal}
              style={{
                maxWidth: '500px',
              }}
            >
              <div
                className={`terminal-window ${
                  terminalState === 'minimized'
                    ? 'terminal-minimized-window'
                    : ''
                }`}
              >
                <div className="terminal-header cursor-move">
                  <div className="terminal-buttons">
                    <button
                      className="terminal-button close"
                      onClick={handleCloseTerminal}
                      title="Close"
                    ></button>
                    <button
                      className="terminal-button minimize"
                      onClick={handleMinimizeTerminal}
                      title="Minimize"
                    ></button>
                    <button
                      className="terminal-button maximize"
                      onClick={handleMaximizeTerminal}
                      title="Full Screen"
                    ></button>
                  </div>
                  <div className="terminal-title font-roboto_mono truncate">
                    sumedh@dev: ~/sumedh-portfolio
                  </div>
                </div>
                <div
                  className={`terminal-body overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 ${
                    terminalState === 'minimized' ? 'hidden' : ''
                  }`}
                  ref={terminalBodyRef}
                  style={{
                    height: '320px',
                    overflowY: 'auto',
                    scrollBehavior: 'smooth',
                  }}
                >
                  {terminalHistory.length === 0 && (
                    <div className="terminal-welcome mb-2">
                      <p className="text-[#55f89f]">
                        Welcome to Sumedh's Terminal!
                      </p>
                      <p className="text-gray-400">
                        Type 'help' to see available commands.
                      </p>
                    </div>
                  )}

                  {terminalHistory.map((entry, index) => (
                    <div key={index} className="mb-4">
                      <div className="terminal-line">
                        <span className="terminal-prompt font-roboto_mono">
                          $
                        </span>{' '}
                        <span className="terminal-command font-roboto_mono">
                          {entry.command}
                        </span>
                      </div>
                      <div className="terminal-output font-roboto_mono mt-1">
                        {entry.output}
                      </div>
                    </div>
                  ))}

                  <div className="terminal-line">
                    <span className="terminal-prompt font-roboto_mono">$</span>{' '}
                    <span className="terminal-command font-roboto_mono">
                      {userInput}
                    </span>
                    <span className="terminal-caret"></span>
                  </div>

                  <input
                    ref={terminalInputRef}
                    type="text"
                    className="terminal-hidden-input"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoCorrect="off"
                    autoCapitalize="off"
                    autoComplete="off"
                    spellCheck="false"
                    autoFocus
                    aria-label="Terminal command input"
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      pointerEvents: 'none',
                      display: terminalState === 'minimized' ? 'none' : 'block',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  )
}
