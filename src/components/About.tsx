import { SectionHeader } from './SectionHeader'

const STATS = [
  { num: <em>13+</em>, lbl: 'Years Shipping' },
  // Deliberately NOT "TOP 3%" per content rules — matches the mockup's own
  // "TOPTAL · VETTED" language used in the readout and ticker.
  { num: <em>VETTED</em>, lbl: 'Toptal Network' },
  { num: <em>3</em>, lbl: 'EN / RU / KA' },
  { num: 'TBS', lbl: 'Tbilisi · Remote' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="container">
        <SectionHeader
          idx="02"
          id="about-h"
          title="About"
          sub="// OPERATOR PROFILE"
          meta="DOSSIER"
        />

        <div className="about-grid">
          <div className="about-panel hud">
            <span className="plus" style={{ top: '-5px', right: '-5px' }} aria-hidden="true" />
            <p>
              <span className="em">Self-taught senior engineer</span> with 13+ years shipping web,
              mobile, and streaming platforms. I've built{' '}
              <span className="ac">live video for national broadcasters</span>, real-time WebRTC
              systems, Web3 apps, and large-scale platforms — and I'm currently building{' '}
              <span className="ac">AI agents</span>. Member of the Toptal network. Based in Tbilisi;
              I work remotely across time zones and speak English, Russian, and Georgian.
            </p>
          </div>
          <div className="about-stats">
            {STATS.map((s, i) => (
              <div className="stat-cell hud" key={i}>
                <span className="num">{s.num}</span>
                <span className="lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
