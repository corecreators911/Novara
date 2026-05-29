import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useTextScramble } from '../../hooks/useTextScramble'

export function SectionHeader({ label, heading, subtext, align = 'left', light = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })
  const scrambledLabel = useTextScramble(label, isInView)

  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const subtextAlign = align === 'center' ? 'mx-auto' : ''

  const headingColor = light ? 'text-white' : 'text-novara-text'
  const subtextColor = light ? 'text-white/80' : 'text-novara-muted'

  return (
    <div ref={ref} className={`mb-12 ${alignClass}`}>
      <span className="text-xs font-['DM_Sans'] font-semibold tracking-[0.2em] uppercase text-novara-accent">
        {scrambledLabel}
      </span>
      <h2 className={`font-['DM_Serif_Display'] text-4xl md:text-5xl tracking-tight leading-tight mt-3 ${headingColor}`}>
        {heading}
      </h2>
      {subtext && (
        <p className={`text-base font-['DM_Sans'] mt-4 max-w-2xl leading-relaxed ${subtextAlign} ${subtextColor}`}>
          {subtext}
        </p>
      )}
    </div>
  )
}

export default SectionHeader;
