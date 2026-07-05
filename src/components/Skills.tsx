import { SectionHeader } from './SectionHeader'

// level = number of illuminated bars (out of 3), matching the mockup.
const SKILLS: Array<{ name: string; level: number }> = [
  { name: 'React', level: 3 },
  { name: 'Next.js', level: 3 },
  { name: 'React Native', level: 2 },
  { name: 'TypeScript', level: 3 },
  { name: 'Node.js', level: 3 },
  { name: 'NestJS', level: 2 },
  { name: 'WebRTC', level: 3 },
  { name: 'HLS/DASH', level: 3 },
  { name: 'Video Streaming', level: 3 },
  { name: 'AI Agents', level: 3 },
  { name: 'Web3', level: 2 },
  { name: 'GraphQL', level: 2 },
  { name: 'PostgreSQL', level: 2 },
  { name: 'Docker', level: 2 },
  { name: 'AWS', level: 2 },
]

const BAR_HEIGHTS = [7, 11, 14]

function Bars({ level }: { level: number }) {
  return (
    <span className="bars" aria-hidden="true">
      {BAR_HEIGHTS.map((h, i) => (
        <i key={i} className={i < level ? 'on' : undefined} style={{ height: `${h}px` }} />
      ))}
    </span>
  )
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <div className="container">
        <SectionHeader
          idx="03"
          id="skills-h"
          title="Skills"
          sub="// SYSTEMS ARRAY"
          meta="15 MODULES"
        />

        <ul className="skills-grid" id="skills-grid">
          {SKILLS.map((skill, i) => (
            <li className="skill hud" key={skill.name}>
              <span className="s-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="s-name">{skill.name}</span>
              <Bars level={skill.level} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
