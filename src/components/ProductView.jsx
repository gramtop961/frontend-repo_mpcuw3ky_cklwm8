import { X, Star, ShieldCheck, Package } from 'lucide-react';

export default function ProductView({ product, open, onClose, onAdd }) {
  if (!product) return null;

  return (
    <div className={`fixed inset-0 z-[55] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-xl border border-white/10 bg-[#1A1D24] shadow-2xl transition-all ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} role="dialog" aria-modal>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <img src={product.img} alt={product.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">{product.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-yellow-300/80">
                  <Star className="h-3.5 w-3.5 fill-yellow-300/30" /> {product.rating}
                </div>
              </div>
              <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-white/70 hover:border-white/20">
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 text-sm text-white/70">
              Industrial-grade color fidelity and stretch-safe adhesion. Ideal for apparel, signage, and premium merch.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {['S', 'M', 'L'].map((s) => (
                <button key={s} className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/80 hover:border-white/20">{s}</button>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-2xl font-semibold text-white">${product.price.toFixed(2)}</p>
              <button onClick={() => onAdd(product)} className="rounded-md bg-[#5B8FA8] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">Add to cart</button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-white/70">
              <div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#0F1117] p-2">
                <ShieldCheck className="h-4 w-4 text-white/60" /> 50+ Wash Tested
              </div>
              <div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#0F1117] p-2">
                <Package className="h-4 w-4 text-white/60" /> Same-Day Dispatch
              </div>
              <div className="flex items-center gap-2 rounded-md border border-white/10 bg-[#0F1117] p-2">
                ISO Color Calibrated
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
