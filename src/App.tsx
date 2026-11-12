import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologySection from './components/TechnologySection'
import Footer from './components/Footer'
import type { Technology } from './types/technology'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  // Load the JSON once, when the page first opens (empty [] = run only once).
  // A dynamic import() loads the file asynchronously, so we get a real loading state.
  useEffect(() => {
    import('./data/technologies.json')
      .then((module) => {
        setTechnologies(module.default as Technology[])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to load technologies:', error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection technologies={technologies} loading={loading} />
      <Footer />
    </>
  )
}

export default App
