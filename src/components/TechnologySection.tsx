import TechnologyCard from './TechnologyCard'
import StackSidebar from './StackSidebar'

function TechnologySection() {
  return (
    <section id="technologies" className="border border-gray-300 p-4">
      <p>TechnologySection section</p>
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
