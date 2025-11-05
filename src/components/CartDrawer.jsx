import { X, Minus, Plus, Trash2, CreditCard } from 'lucide-react';

export default function CartDrawer({ open, items, onClose, onIncrease, onDecrease, onRemove }) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div className={`fixed inset-0 z-[60] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md translate-x-full border-l border-white/10 bg-[#1A1D24] shadow-2xl transition-transform duration-300 ${open ? '!translate-x-0' : ''}`}
        role="dialog"
        aria-modal
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h3 className="text-sm font-medium text-white">Your Cart</h3>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-white/70 hover:border-white/20">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex h-[calc(100%-160px)] flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-sm text-white/60">Your cart is empty.</p>
            ) : (
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it.id} className="flex items-center gap-3 rounded-md border border-white/10 bg-[#252932] p-3">
                    <img
                      src={it.img}
                      alt={it.name}
                      className="h-14 w-14 shrink-0 rounded object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-white/90">{it.name}</p>
                      <p className="mt-0.5 text-xs text-white/60">${it.price.toFixed(2)}</p>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#1A1D24] p-1">
                        <button onClick={() => onDecrease(it.id)} className="grid h-6 w-6 place-items-center text-white/70 hover:text-white">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-[1.5rem] text-center text-xs text-white/80">{it.qty}</span>
                        <button onClick={() => onIncrease(it.id)} className="grid h-6 w-6 place-items-center text-white/70 hover:text-white">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm text-white">${(it.price * it.qty).toFixed(2)}</p>
                      <button onClick={() => onRemove(it.id)} className="mt-2 inline-flex items-center gap-1 text-xs text-white/60 hover:text-white">
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Subtotal</span>
              <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#5B8FA8] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">
              <CreditCard className="h-4 w-4" />
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
