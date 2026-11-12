import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologySection from './components/TechnologySection'
import Footer from './components/Footer'
import type { Technology } from './types/technology'

// Note: react-toastify v11 injects its own CSS automatically,
// so we do NOT import 'react-toastify/dist/ReactToastify.css'.

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

  // Toasts are always called OUTSIDE setStack (never inside an updater function),
  // because StrictMode runs updaters twice in development and the toast would show twice.

  // Add a technology to the stack (a NEW array — never push into state)
  const handleAdd = (tech: Technology) => {
    // Safety net: the button is disabled after adding, but we still block duplicates here.
    if (stack.some((t) => t.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack`)
      return
    }
    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack`)
  }

  // Remove one technology by id (filter returns a NEW array without it)
  const handleRemove = (id: string) => {
    const removed = stack.find((t) => t.id === id)
    if (!removed) return
    setStack(stack.filter((t) => t.id !== id))
    toast.info(`${removed.name} removed from your stack`)
  }

  // Clear the whole stack (do nothing if it is already empty)
  const handleRemoveAll = () => {
    if (stack.length === 0) return
    setStack([])
    toast.error('All technologies removed from your stack')
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
      <ToastContainer position="top-right" autoClose={2000} newestOnTop />
    </>
  )
}

export default App
