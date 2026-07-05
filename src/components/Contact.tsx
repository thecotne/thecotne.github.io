import { Reticle } from './Reticle'
import { SectionHeader } from './SectionHeader'

const PROFILES = [
  { label: 'GitHub', url: 'https://github.com/thecotne', display: 'github.com/thecotne' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/cotne', display: 'linkedin.com/in/cotne' },
  { label: 'Toptal', url: 'https://www.toptal.com/resume/tsotne-nazarashvili', display: 'toptal.com/resume' },
  { label: 'X', url: 'https://x.com/thecotne', display: 'x.com/thecotne' },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h">
      <div className="container">
        <SectionHeader
          idx="04"
          id="contact-h"
          title="Contact"
          sub="// OPEN CHANNEL"
          meta="TX READY"
        />

        <div className="contact-panel hud">
          <span className="plus" style={{ top: '-5px', left: '-5px' }} aria-hidden="true" />
          <span className="plus" style={{ bottom: '-5px', right: '-5px' }} aria-hidden="true" />
          <Reticle variant="contact" className="contact-reticle" />
          <div className="contact-inner">
            <span className="contact-tag">
              <span className="dot live" aria-hidden="true" />
              Transmission ready
            </span>
            <p className="contact-lead">
              Open to senior full-stack, streaming, and AI-engineering roles — contract or
              full-time.
            </p>
            <a className="contact-email" href="mailto:cotne.95@gmail.com">
              <span className="arw" aria-hidden="true">
                {'>'}
              </span>
              cotne.95@gmail.com
            </a>
            <nav className="contact-links" aria-label="Profiles">
              {PROFILES.map((p) => (
                <a key={p.label} href={p.url} target="_blank" rel="noopener">
                  <b>{p.label}</b>
                  {p.display}
                  <span className="arw" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
            <div className="contact-actions">
              <a className="btn btn--solid" href="mailto:cotne.95@gmail.com">
                Get in touch{' '}
                <span className="arw" aria-hidden="true">
                  {'>'}
                </span>
              </a>
              <a
                className="btn btn--ghost"
                href="/Tsotne_Nazarashvili_Resume.pdf"
                target="_blank"
                rel="noopener"
              >
                R&eacute;sum&eacute;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
