import { useEffect, useRef, useState, createElement, type ReactNode, type CSSProperties, type ElementType } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
  style?: CSSProperties
  /** Distance in px to translate on enter. Default 24. */
  y?: number
  /** Once revealed, do not hide again. Default true. */
  once?: boolean
}

export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  style,
  y = 24,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [once])

  const combinedStyle: CSSProperties = {
    ...style,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    transitionDelay: visible ? `${delay}ms` : '0ms',
    willChange: 'opacity, transform',
  }

  return createElement(
    Tag,
    { ref, className, style: combinedStyle },
    children
  )
}
