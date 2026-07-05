import { Reticle } from './Reticle'
import { SectionHeader } from './SectionHeader'

type Work = {
  idx: string
  top: string
  status: string
  live?: boolean
  title: string
  desc: React.ReactNode
  tags: Array<string>
}

const WORKS: Array<Work> = [
  {
    idx: '02',
    top: 'PROJECT_02 // HEALTH',
    status: 'SHIPPED',
    title: 'WebRTC Telemedicine',
    desc: 'Real-time doctor–patient video consultations and secure chat for a healthcare platform.',
    tags: ['WebRTC', 'React', 'Realtime'],
  },
  {
    idx: '03',
    top: 'PROJECT_03 // WEB3',
    status: 'SHIPPED',
    title: 'Web3 · Starknet',
    desc: 'Frontend for the Gol2 blockchain game and the Starknet ecosystem site.',
    tags: ['Web3', 'React', 'TypeScript'],
  },
  {
    idx: '04',
    top: 'PROJECT_04 // EDU',
    status: 'DEPLOYED · 17K USERS',
    title: 'ARGUS LMS',
    desc: 'Modernized a university learning platform serving 17,000+ students and staff with a new React architecture.',
    tags: ['React', 'UX', 'Scale'],
  },
  {
    idx: '05',
    top: 'PROJECT_05 // AI',
    status: 'LIVE · CURRENT FOCUS',
    live: true,
    title: 'AI Agents — current focus',
    desc: 'Building production, tool-using agents (OpenRouter-based).',
    tags: ['AI', 'Agents', 'Node'],
  },
]

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-h">
      <div className="container">
        <SectionHeader
          idx="01"
          id="work-h"
          title="Selected Work"
          sub="// FIELD OPERATIONS LOG"
          meta="05 / 05 ENTRIES"
        />

        <div className="work-grid">
          {/* Featured */}
          <article className="work feat hud">
            <span className="work-idx" aria-hidden="true">
              01
            </span>
            <div className="work-top">
              <span>PROJECT_01 // BROADCAST</span>
              <span className="stat">
                <span className="dot" aria-hidden="true" />
                DEPLOYED · NATIONWIDE
              </span>
            </div>
            <div className="feat-body">
              <div className="feat-text">
                <h3 className="work-title feat-title-lg">Live TV Streaming</h3>
                <p className="work-desc">
                  1TV (Georgian Public Broadcasting) &amp; the Parliament of Georgia. Custom HTML5
                  players, HLS/DASH, Flash→HTML5 migration; nationwide live video to hundreds of
                  thousands.
                </p>
                <ul className="tags">
                  <li>HLS</li>
                  <li>DASH</li>
                  <li>Video</li>
                  <li>WebRTC</li>
                </ul>
              </div>
              <div className="feat-viz">
                <Reticle variant="featured" />
                <div className="feat-readout">
                  <div className="ro">
                    <span className="k">Signal</span>
                    <span className="lead" aria-hidden="true" />
                    <span className="v acc">LOCKED</span>
                  </div>
                  <div className="ro">
                    <span className="k">Reach</span>
                    <span className="lead" aria-hidden="true" />
                    <span className="v">~500K VIEWERS</span>
                  </div>
                  <div className="ro">
                    <span className="k">Protocol</span>
                    <span className="lead" aria-hidden="true" />
                    <span className="v">HLS / DASH</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {WORKS.map((w) => (
            <article className="work hud" key={w.idx}>
              <span className="work-idx" aria-hidden="true">
                {w.idx}
              </span>
              <div className="work-top">
                <span>{w.top}</span>
                <span className="stat">
                  <span className={w.live ? 'dot live' : 'dot'} aria-hidden="true" />
                  {w.status}
                </span>
              </div>
              <h3 className="work-title">{w.title}</h3>
              <p className="work-desc">{w.desc}</p>
              <ul className="tags">
                {w.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
