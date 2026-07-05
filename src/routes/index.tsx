import { createFileRoute } from '@tanstack/react-router'
import { Background } from '../components/Background'
import { HudFrame } from '../components/HudFrame'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Ticker } from '../components/Ticker'
import { SelectedWork } from '../components/SelectedWork'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Background />
      <HudFrame />
      <Nav />
      <main id="top">
        <Hero />
        <Ticker />
        <SelectedWork />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
