import StackItem from './StackItem'
import type { Technology } from '../types/technology'

interface StackSidebarProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  const isEmpty = stack.length === 0

  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {isEmpty ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
      </p>

      <div className="mt-4">
        {isEmpty ? (
          <div className="rounded-lg border-2 border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {stack.map((tech) => (
              <StackItem key={tech.id} technology={tech} onRemove={onRemove} />
            ))}
          </div>
        )}
      </div>

      {!isEmpty && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-lg border border-red-300 bg-white py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}

export default StackSidebar
