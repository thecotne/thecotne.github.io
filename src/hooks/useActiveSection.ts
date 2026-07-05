import { useEffect, useState } from 'react'

/**
 * Highlights the nav link for whichever section is currently in view, using an
 * IntersectionObserver tuned to the mockup's rootMargin. Client-only; returns
 * an empty string during SSR/prerender.
 */
export function useActiveSection(ids: Array<string>): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return active
}
