import TechnologyCard from './TechnologyCard'
import StackSidebar from './StackSidebar'
import type { Technology } from '../types/technology'

interface TechnologySectionProps {
  technologies: Technology[]
  loading: boolean
  stack: Technology[]
  onAdd: (tech: Technology) => void
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function TechnologySection({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologySectionProps) {
  return (
    <section id="technologies" className="scroll-mt-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Explore the <span className="text-brand">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <div className="lg:col-span-9">
            {loading ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16">
                <span className="loading loading-spinner loading-lg"></span>
                <p className="text-slate-500">Loading technologies...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {technologies.map((tech) => (
                  <TechnologyCard
                    key={tech.id}
                    technology={tech}
                    isAdded={stack.some((item) => item.id === tech.id)}
                    onAdd={onAdd}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
