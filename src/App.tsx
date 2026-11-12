import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologySection from './components/TechnologySection'
import Footer from './components/Footer'
import type { Technology } from './types/technology'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState<Technology[]>([])

  useEffect(() => {
    import('./data/technologies.json')
      .then((jsonFile) => {
        setTechnologies(jsonFile.default as Technology[])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Failed to load technologies:', error)
        setLoading(false)
      })
  }, [])

  const handleAdd = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id)
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`)
      return
    }
    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack`)
  }

  const handleRemove = (id: string) => {
    const removedTech = stack.find((item) => item.id === id)
    if (!removedTech) {
      return
    }
    setStack(stack.filter((item) => item.id !== id))
    toast.info(`${removedTech.name} removed from your stack`)
  }

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return
    }
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
