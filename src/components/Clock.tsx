import { useEffect, useState } from 'react'

const pad = (n: number) => String(n).padStart(2, '0')

/** Tbilisi local time (UTC+4, no DST). Renders a placeholder on the server
 *  and ticks once per second after hydration. */
export function Clock() {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const utc = now.getTime() + now.getTimezoneOffset() * 60000
      const t = new Date(utc + 4 * 3600000)
      setTime(`${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return <span id="clock">{time}</span>
}
