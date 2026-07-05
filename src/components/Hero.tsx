import { Clock } from './Clock'
import { Reticle } from './Reticle'

const PROFILES = [
  { label: 'GitHub', url: 'https://github.com/thecotne', display: 'github.com/thecotne' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/cotne', display: 'linkedin.com/in/cotne' },
  { label: 'Toptal', url: 'https://www.toptal.com/resume/tsotne-nazarashvili', display: 'toptal.com/resume' },
  { label: 'X', url: 'https://x.com/thecotne', display: 'x.com/thecotne' },
]

// Uptime signal bars: [height px, illuminated?]
const UPTIME_BARS: Array<[number, boolean]> = [
  [6, true], [9, true], [7, true], [12, true], [10, true],
  [14, true], [11, true], [16, true], [13, true], [16, false],
]

const READOUT_ROWS = [
  { k: 'Callsign', v: 'T. NAZARASHVILI', acc: false },
  { k: 'Role', v: 'SR. SOFTWARE ENGINEER', acc: true },
  { k: 'Base', v: 'TBILISI, GE', acc: false },
  { k: 'Coord', v: '41.71°N 44.83°E', acc: false },
  { k: 'Service', v: '13+ YEARS', acc: false },
  { k: 'Network', v: 'TOPTAL · VETTED', acc: true },
]

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-name">
      <span className="beam" aria-hidden="true" />
      <Reticle variant="hero" className="hero-reticle-bg" />

      <div className="container hero-grid">
        <div className="hero-main">
          <span className="eyebrow">
            <span className="tick" aria-hidden="true" />
            Senior Software Engineer
            <span className="eb-id" aria-hidden="true">
              // ID:TN-01
            </span>
          </span>
          <h1 className="hero-name" id="hero-name">
            <span>Tsotne</span>
            <span className="l2">Nazarashvili</span>
          </h1>
          <p className="hero-headline">
            I build <span className="hl">production video-streaming systems</span> and{' '}
            <span className="hl">AI agents</span>.
          </p>
          <p className="hero-sub">
            <b>13+ years</b> · React · TypeScript · Node.js · Remote, any timezone
          </p>
          <div className="hero-cta">
            <a className="btn btn--solid" href="#work">
              View work{' '}
              <span className="arw" aria-hidden="true">
                {'>'}
              </span>
            </a>
            <a className="btn btn--ghost" href="mailto:cotne.95@gmail.com">
              Get in touch
            </a>
          </div>
          <nav className="hero-links" aria-label="Profiles">
            {PROFILES.map((p) => (
              <a key={p.label} href={p.url} target="_blank" rel="noopener">
                <b>{p.label}</b>
                <span className="u">{p.display}</span>
                <span className="arw" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* SIGNATURE: operator status readout */}
        <aside className="readout hud" aria-label="Operator status">
          <span className="plus" style={{ top: '-5px', left: '-5px' }} aria-hidden="true" />
          <div className="readout-head">
            <span className="title">Operator</span>
            <span className="st">
              <span className="dot live" aria-hidden="true" />
              AVAILABLE
            </span>
          </div>
          {READOUT_ROWS.map((row) => (
            <div className="ro" key={row.k}>
              <span className="k">{row.k}</span>
              <span className="lead" aria-hidden="true" />
              <span className={row.acc ? 'v acc' : 'v'}>{row.v}</span>
            </div>
          ))}
          <div className="ro">
            <span className="k">Local</span>
            <span className="lead" aria-hidden="true" />
            <span className="v acc">
              <Clock /> UTC+4
            </span>
          </div>
          <div className="readout-foot">
            <span className="lbl">Uptime</span>
            <span className="bars" aria-hidden="true">
              {UPTIME_BARS.map(([h, on], i) => (
                <i key={i} className={on ? 'on' : undefined} style={{ height: `${h}px` }} />
              ))}
            </span>
            <span className="lbl" style={{ color: 'var(--accent)' }}>
              99.9%
            </span>
          </div>
        </aside>
      </div>
    </section>
  )
}
