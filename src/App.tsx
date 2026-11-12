import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologySection from './components/TechnologySection'
import Footer from './components/Footer'
import type { Technology } from './types/technology'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  // The user's selected stack. Lives here (the common parent) so cards and sidebar share it.
  const [stack, setStack] = useState<Technology[]>([])

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

  // Add a technology to the stack (a NEW array — never push into state)
  const handleAdd = (tech: Technology) => {
    if (stack.some((t) => t.id === tech.id)) {
      // duplicate warning toast will be added in Phase 6B
      return
    }
    setStack([...stack, tech])
  }

  // Remove one technology by id (filter returns a NEW array without it)
  const handleRemove = (id: string) => {
    setStack(stack.filter((t) => t.id !== id))
  }

  // Clear the whole stack
  const handleRemoveAll = () => {
    setStack([])
  }

  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection
        technologies={technologies}
        loading={loading}
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
    </>
  )
}

export default App
