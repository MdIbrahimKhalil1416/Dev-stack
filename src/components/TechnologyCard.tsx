import type { Technology } from '../types/technology'

interface TechnologyCardProps {
  technology: Technology
  isAdded: boolean
  onAdd: (tech: Technology) => void
}

function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  const { name, icon, badge, description, category, difficulty, rating } = technology

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} logo`} className="h-10 w-10 object-contain" loading="lazy" />
        <span className="rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900">{name}</h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="my-4 border-t border-slate-100"></div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-600">{category}</span>
        <span className="text-slate-500">{difficulty}</span>
        <span className="flex items-center gap-1">
          <span className="text-amber-400">★</span>
          <span className="font-semibold text-slate-800">{rating.toFixed(1)}</span>
        </span>
      </div>

      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={
            isAdded
              ? 'w-full cursor-not-allowed rounded-lg border border-green-200 bg-green-50 py-2.5 text-sm font-medium text-green-700'
              : 'w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700'
          }
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  )
}

export default TechnologyCard
