import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const formatIndian = (num) => {
  return Math.round(num).toLocaleString('en-IN')
}

export function StatCounter({ target, suffix, label, duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      motionValue.set(target)
      return
    }
    if (isInView) {
      animate(motionValue, target, {
        duration: duration,
        ease: [0.0, 0.0, 0.2, 1],
      })
    }
  }, [isInView, target, duration, motionValue, prefersReducedMotion])

  const formattedValue = useTransform(motionValue, (val) => {
    const rounded = Math.round(val)
    if (target > 9999) {
      return rounded.toLocaleString('en-IN')
    }
    return rounded.toString()
  })

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="w-10 h-[2px] bg-novara-accent mb-5" />
      <span className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-none tracking-tight">
        <motion.span>{formattedValue}</motion.span>{suffix}
      </span>
      <span className="font-DM_Sans text-sm text-white/60 tracking-widest uppercase mt-3">
        {label}
      </span>
    </div>
  )
}
