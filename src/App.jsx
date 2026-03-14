import { useEffect } from 'react'
import { BOT_USERNAME, BOT_START_PARAM } from './config'

const botLink = `tg://resolve?domain=${BOT_USERNAME}${BOT_START_PARAM ? `&start=${BOT_START_PARAM}` : ''}`
const webLink = `https://t.me/${BOT_USERNAME}${BOT_START_PARAM ? `?start=${BOT_START_PARAM}` : ''}`

function TelegramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function App() {
  useEffect(() => {
    window.location.href = botLink
  }, [])

  return (
    <div className="flex flex-col min-h-screen p-6 pb-8">
      <div className="flex flex-col items-center text-center max-w-[360px] mx-auto flex-1">
        <img
          src="/logo.png"
          alt="ЛовиТалон"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h2 className="text-lg font-bold text-white mb-1">ЛовиТалон</h2>
        <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-6">
          Талони в МРЕО
        </p>
        <h1 className="text-2xl font-bold text-white leading-tight mb-3">
          Не можеш знайти талон на водіння?
        </h1>
        <p className="text-xl font-bold text-[#FDCB00] italic leading-tight mb-6">
          {`Повідомлю, коли з'явиться вільне місце`}
        </p>


        <div className="mt-auto pt-4 pb-2">
          <a
            href={webLink}
            className="flex items-center justify-center gap-2 w-full min-h-[56px] py-5 px-10 bg-[#FDCB00] text-[#1A403A] font-bold rounded-full text-base transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-[#FDCB00]/40"
          >
            <TelegramIcon className="w-6 h-6" />
            Відкрити в Telegram
          </a>
          <p className="mt-6 text-sm text-white/70">Працює 24/7 по всій Україні</p>
        </div>
      </div>
    </div>
  )
}

export default App
