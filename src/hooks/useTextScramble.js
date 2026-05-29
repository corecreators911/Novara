import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export function useTextScramble(text, trigger) {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!trigger || hasRun.current) return
    hasRun.current = true

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setDisplayText(text)
      return
    }

    let frame = 0
    const duration = text.length * 4

    intervalRef.current = setInterval(() => {
      frame++
      const progress = frame / duration
      const revealedLength = Math.floor(progress * text.length)

      const newText = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < revealedLength) return text[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setDisplayText(newText)

      if (frame >= duration) {
        clearInterval(intervalRef.current)
        setDisplayText(text)
      }
    }, 30)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [trigger, text])

  return displayText
}
