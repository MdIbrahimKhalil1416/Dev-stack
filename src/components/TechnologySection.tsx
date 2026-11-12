import TechnologyCard from './TechnologyCard'
import StackSidebar from './StackSidebar'
import type { Technology } from '../types/technology'

// The props this component receives from App
interface TechnologySectionProps {
  technologies: Technology[]
  loading: boolean
}

function TechnologySection({ technologies, loading }: TechnologySectionProps) {
  return (
    <section id="technologies" className="border border-gray-300 p-4">
      <p>TechnologySection section</p>

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-3 py-12">
          <span className="loading loading-spinner loading-lg"></span>
          <p className="text-slate-500">Loading technologies...</p>
        </div>
      ) : (
        <>
          {/* TEMP: Phase 4 check — replaced by the card grid in Phase 5 */}
          <p className="py-4 font-medium text-slate-700">
            {technologies.length} technologies loaded
          </p>
        </>
      )}

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <TechnologyCard />
        </div>
        <div className="md:w-1/3">
          <StackSidebar />
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
