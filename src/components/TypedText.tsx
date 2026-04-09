import { useEffect, useState } from 'react'

export type TypedSegment = { text: string; gold?: boolean; lineBreak?: boolean }

type TypedTextProps = {
  segments: TypedSegment[]
  /** ms per character. Default 28. */
  speed?: number
  /** Delay before starting (ms). Default 0. */
  startDelay?: number
  /** Show a blinking cursor while typing. Default true. */
  cursor?: boolean
  /** Cursor color. Default gold. */
  cursorColor?: string
}

export default function TypedText({
  segments,
  speed = 28,
  startDelay = 0,
  cursor = true,
  cursorColor = '#D2B06B',
}: TypedTextProps) {
  const total = segments.reduce((acc, s) => acc + (s.lineBreak ? 0 : s.text.length), 0)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(startDelay === 0)

  useEffect(() => {
    if (started) return
    const id = window.setTimeout(() => setStarted(true), startDelay)
    return () => window.clearTimeout(id)
  }, [started, startDelay])

  useEffect(() => {
    if (!started) return
    if (count >= total) return
    const id = window.setTimeout(() => setCount((c) => c + 1), speed)
    return () => window.clearTimeout(id)
  }, [count, total, speed, started])

  let remaining = count
  return (
    <>
      {segments.map((seg, i) => {
        if (seg.lineBreak) return <br key={i} />
        const visible = Math.max(0, Math.min(remaining, seg.text.length))
        remaining -= seg.text.length
        const shown = seg.text.slice(0, visible)
        return seg.gold ? (
          <span key={i} className="text-[#D2B06B]">
            {shown}
          </span>
        ) : (
          <span key={i}>{shown}</span>
        )
      })}
      {cursor && count < total && (
        <span
          aria-hidden
          className="inline-block align-baseline ml-[2px] typed-cursor"
          style={{ width: '0.5ch', height: '0.9em', backgroundColor: cursorColor }}
        />
      )}
    </>
  )
}
