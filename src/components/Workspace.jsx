import { useState } from 'react';
import { Search, ChevronRight, X, Upload } from 'lucide-react';

const sampleProducts = [
  {
    id: 'p1',
    name: 'DTF Pro Transfer – White Ink',
    price: '$6.50 / sq ft',
    specs: ['High stretch', 'Nylon-safe', 'Soft-hand'],
    img: '',
  },
  {
    id: 'p2',
    name: 'Matte Film – Standard',
    price: '$3.20 / sq ft',
    specs: ['Matte finish', 'Heat stable', 'Anti-static'],
    img: '',
  },
  {
    id: 'p3',
    name: 'Adhesive Powder – Fine',
    price: '$18 / kg',
    specs: ['Fine grain', 'Clean edges', 'Consistent bond'],
    img: '',
  },
];

function ProductCard({ product, onQuickView }) {
  return (
    <button
      onClick={() => onQuickView(product)}
      className="group text-left rounded-md border border-[#252932] bg-[#1A1D24] hover:bg-[#1A1D24]/90 transition-colors p-4"
    >
      <div className="aspect-video w-full rounded-md border border-[#252932] bg-[#0F1117]" />
      <div className="mt-3 flex items-start justify-between">
        <div>
          <h3 className="text-white text-sm font-medium">{product.name}</h3>
          <p className="text-white/70 text-sm mt-1">{product.price}</p>
        </div>
        <ChevronRight className="text-white/40 group-hover:text-white/60" size={18} />
      </div>
      <ul className="mt-2 text-xs text-white/60 space-y-1">
        {product.specs.map((s) => (
          <li key={s}>• {s}</li>
        ))}
      </ul>
    </button>
  );
}

function QuickView({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-md border border-[#252932] bg-[#0F1117] text-white">
        <div className="flex items-center justify-between p-4 border-b border-[#252932]">
          <div>
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-sm text-white/70">{product.price}</p>
          </div>
          <button onClick={onClose} className="h-8 w-8 grid place-items-center rounded-md border border-[#252932] text-white/80"><X size={16} /></button>
        </div>
        <div className="p-4">
          <div className="aspect-video w-full rounded-md border border-[#252932] bg-[#1A1D24]" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {['Specs','Applications','Care'].map((t) => (
              <div key={t} className="rounded-md border border-[#252932] bg-[#1A1D24] p-2 text-xs text-white/70">{t}</div>
            ))}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button onClick={onClose} className="h-9 rounded-md border border-[#252932] bg-transparent px-4 text-sm text-white/80">Close</button>
            <button className="h-9 rounded-md border border-[#3A4550] bg-[#1A1D24] px-4 text-sm text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div className="rounded-md border border-[#252932] bg-[#0F1117] p-3">
      <div className="flex items-center gap-2 text-white/70 text-sm">
        <Search size={16} />
        <input placeholder="Filter by material, size, application" className="flex-1 bg-transparent outline-none placeholder-white/40 text-white" />
      </div>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        {['Material','Color','Size','Application'].map((f) => (
          <button key={f} className="rounded-md border border-[#252932] bg-[#1A1D24] px-3 py-2 text-white/80 text-left">{f}</button>
        ))}
      </div>
    </div>
  );
}

function DesignerPanel() {
  return (
    <div className="rounded-md border border-[#252932] bg-[#0F1117] p-4">
      <h3 className="text-white font-medium">Custom Designer</h3>
      <p className="text-sm text-white/70 mt-1">Upload artwork for real-time preview. Supported: PNG, SVG, PDF, JPG.</p>
      <label className="mt-3 block border-2 border-dashed border-[#252932] rounded-md p-6 text-center text-white/70 hover:border-[#3A4550] transition-colors cursor-pointer">
        <div className="mx-auto mb-2 h-10 w-10 grid place-items-center rounded-md border border-[#252932] text-white/70"><Upload size={18} /></div>
        <span className="text-sm">Drag & drop or click to upload</span>
        <input type="file" className="hidden" />
      </label>
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        {['Templates','Guides','Color Profiles'].map((t) => (
          <div key={t} className="rounded-md border border-[#252932] bg-[#1A1D24] p-2 text-white/70">{t}</div>
        ))}
      </div>
    </div>
  );
}

export default function Workspace() {
  const [qv, setQv] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-medium">Catalog</h2>
        <button className="h-9 rounded-md border border-[#252932] bg-transparent px-3 text-sm text-white/80">View All</button>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <Filters />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleProducts.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={setQv} />
            ))}
          </div>
        </div>
        <DesignerPanel />
      </div>

      <QuickView product={qv} onClose={() => setQv(null)} />
    </section>
  );
}
