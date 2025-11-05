import { useMemo, useState } from 'react';
import { Filter, Star, Plus, Upload } from 'lucide-react';
import ProductView from './ProductView.jsx';

const demoProducts = [
  { id: 'p1', name: 'DTF Transfer Sheet – A3', price: 3.9, rating: 4.8, img: 'https://images.unsplash.com/photo-1520974735194-6cde52d85e14?q=80&w=800&auto=format&fit=crop' },
  { id: 'p2', name: 'Premium Cotton Tee – Black', price: 12.5, rating: 4.6, img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop' },
  { id: 'p3', name: 'Hoodie – Heavyweight 420gsm', price: 32.0, rating: 4.9, img: 'https://images.unsplash.com/photo-1548883354-c25cfa07e3d1?q=80&w=800&auto=format&fit=crop' },
  { id: 'p4', name: 'Sticker Vinyl – Gloss', price: 1.2, rating: 4.7, img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop' },
];

function ProductCard({ product, onOpen }) {
  return (
    <button onClick={() => onOpen(product)} className="group overflow-hidden rounded-lg border border-white/10 bg-[#252932] text-left transition hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-[#5B8FA8]/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" decoding="async" />
        <span className="pointer-events-none absolute right-2 top-2 rounded-md border border-white/10 bg-[#1A1D24]/80 px-2 py-1 text-xs text-white/80 backdrop-blur">Quick view</span>
      </div>
      <div className="space-y-1 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm font-medium text-white/90">{product.name}</h3>
          <div className="flex items-center gap-1 text-xs text-yellow-300/80">
            <Star className="h-3.5 w-3.5 fill-yellow-300/30" /> {product.rating}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white">${product.price.toFixed(2)}</p>
          <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-[#1A1D24] px-2 py-1 text-xs text-white/60">
            <Plus className="h-3.5 w-3.5" /> Details
          </span>
        </div>
      </div>
    </button>
  );
}

export default function Workspace({ onAddToCart }) {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return demoProducts.filter((p) =>
      filter === 'all' ? true : filter === 'dtf' ? p.id === 'p1' || p.id === 'p4' : p.id === 'p2' || p.id === 'p3'
    );
  }, [filter]);

  return (
    <section id="catalog" className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-3">
      {/* Catalog */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-white">Catalog</h2>
          <div className="flex items-center gap-2">
            <button onClick={() => setFilter('all')} className={`rounded-md px-3 py-1.5 text-xs ${filter === 'all' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'}`}>All</button>
            <button onClick={() => setFilter('dtf')} className={`rounded-md px-3 py-1.5 text-xs ${filter === 'dtf' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'}`}>DTF</button>
            <button onClick={() => setFilter('garments')} className={`rounded-md px-3 py-1.5 text-xs ${filter === 'garments' ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'}`}>Garments</button>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/70 hover:border-white/20">
              <Filter className="h-3.5 w-3.5" />
              Filters
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {/* Designer */}
      <div id="designer" className="space-y-4">
        <div className="rounded-lg border border-white/10 bg-[#1A1D24] p-4">
          <h3 className="text-sm font-medium text-white">DTF Designer</h3>
          <p className="mt-1 text-xs text-white/60">Upload transparent PNG art or drag files here.</p>
          <label className="mt-4 block cursor-pointer rounded-md border-2 border-dashed border-white/10 bg-[#0F1117] p-6 text-center transition hover:border-white/20">
            <input type="file" className="hidden" multiple accept="image/png,image/svg+xml" />
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-5 w-5 text-white/50" />
              <span className="text-xs text-white/70">Drop files to upload</span>
            </div>
          </label>
          <div className="mt-4 flex items-center justify-between">
            <button className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/80 hover:border-white/20">Templates</button>
            <button className="rounded-md bg-[#5B8FA8] px-3 py-1.5 text-xs font-medium text-white hover:brightness-110">Create Sheet</button>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#252932] p-4">
          <h3 className="text-sm font-medium text-white">Highlights</h3>
          <ul className="mt-2 space-y-2 text-xs text-white/70">
            <li>• Wash-tested 50+ cycles</li>
            <li>• High-density white underbase</li>
            <li>• ICC calibrated for sRGB/CMYK</li>
          </ul>
        </div>
      </div>

      <ProductView
        product={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
        onAdd={(p) => {
          onAddToCart?.(p);
          setSelected(null);
        }}
      />
    </section>
  );
}
