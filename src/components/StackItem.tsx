import type { Technology } from '../types/technology'

interface StackItemProps {
  technology: Technology
  onRemove: (id: string) => void
}

function StackItem({ technology, onRemove }: StackItemProps) {
  const { id, name, icon, category } = technology

  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
      <img src={icon} alt={`${name} logo`} className="h-8 w-8 object-contain" />
      <div>
        <p className="text-sm font-semibold text-slate-900">{name}</p>
        <p className="text-xs text-slate-400">{category}</p>
      </div>
      <button
        type="button"
        aria-label={`Remove ${name}`}
        onClick={() => onRemove(id)}
        className="ml-auto px-1 text-slate-400 transition hover:text-slate-700"
      >
        ✕
      </button>
    </div>
  )
}

export default StackItem
