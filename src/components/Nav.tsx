import { useActiveSection } from '../hooks/useActiveSection'

const LINKS = [
  { num: '01', label: 'Work', id: 'work' },
  { num: '02', label: 'About', id: 'about' },
  { num: '03', label: 'Skills', id: 'skills' },
  { num: '04', label: 'Contact', id: 'contact' },
]

const SECTION_IDS = LINKS.map((l) => l.id)

export function Nav() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Tsotne Nazarashvili — home">
          <span className="mark">TN</span>
          <span className="sig">
            <span className="dot live" aria-hidden="true" />
            SYS.ONLINE
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.id}
              className={active === link.id ? 'nav-link active' : 'nav-link'}
              href={`#${link.id}`}
            >
              <span className="num">{link.num}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="nav-cta"
          href="/Tsotne_Nazarashvili_Resume.pdf"
          target="_blank"
          rel="noopener"
        >
          R&eacute;sum&eacute;
        </a>
      </div>
    </header>
  )
}
