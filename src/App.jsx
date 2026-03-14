import { useEffect, useState } from 'react'
import { BOT_USERNAME } from './config'
import './App.css'
const botLink = `tg://resolve?domain=${BOT_USERNAME}`
const webLink = `https://t.me/${BOT_USERNAME}`

function App() {
  const [buttonHref, setButtonHref] = useState(botLink)

  useEffect(() => {
    // Автоматична спроба відкрити додаток Telegram
    window.location.href = botLink

    // Через 2 секунди — показуємо веб-посилання як fallback
    const timer = setTimeout(() => {
      setButtonHref(webLink)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container">
      <h2>ЛовиТалон 🚗</h2>
      <p>Відкриваємо Telegram для пошуку вільних місць...</p>
      <a href={buttonHref} className="btn" id="open-btn">
        ПЕРЕЙТИ В ТЕЛЕГРАМ
      </a>
    </div>
  )
}

export default App
