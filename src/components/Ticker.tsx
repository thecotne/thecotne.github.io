import { Fragment } from 'react'

type Item = { text: string; strong?: boolean }

const ITEMS: Array<Item> = [
  { text: 'SYSTEM ONLINE', strong: true },
  { text: '13+ YEARS SHIPPING PRODUCTION SOFTWARE' },
  { text: 'TOPTAL — VETTED', strong: true },
  { text: 'LIVE VIDEO · WEBRTC · WEB3 · AI AGENTS' },
  { text: 'REMOTE · ANY TIMEZONE' },
  { text: 'OPEN FOR SENIOR ROLES', strong: true },
]

/** Infinite marquee. Items are duplicated so the -50% keyframe loops seamlessly. */
export function Ticker() {
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <Fragment key={i}>
            <span>{item.strong ? <b>{item.text}</b> : item.text}</span>
            <span className="sep">//</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
