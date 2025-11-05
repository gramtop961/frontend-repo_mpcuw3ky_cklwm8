import { useState } from 'react';
import { Filter, Star, Plus, Upload } from 'lucide-react';

const demoProducts = [
  { id: 'p1', name: 'DTF Transfer Sheet – A3', price: 3.9, rating: 4.8, img: 'https://images.unsplash.com/photo-1520974735194-6cde52d85e14?q=80&w=800&auto=format&fit=crop' },
  { id: 'p2', name: 'Premium Cotton Tee – Black', price: 12.5, rating: 4.6, img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop' },
  { id: 'p3', name: 'Hoodie – Heavyweight 420gsm', price: 32.0, rating: 4.9, img: 'https://images.unsplash.com/photo-1548883354-c25cfa07e3d1?q=80&w=800&auto=format&fit=crop' },
  { id: 'p4', name: 'Sticker Vinyl – Gloss', price: 1.2, rating: 4.7, img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop' },
];

function ProductCard({ product, onQuickView }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-white/10 bg-[#252932] transition hover:border-white/20">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        <button
          onClick={() => onQuickView(product)}
          className="absolute right-2 top-2 rounded-md border border-white/10 bg-[#1A1D24]/80 px-2 py-1 text-xs text-white/80 opacity-0 backdrop-blur transition group-hover:opacity-100"
        >
          Quick view
        </button>
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
          <button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-[#1A1D24] px-2 py-1 text-xs text-white/80 transition hover:border-white/20 hover:bg-[#2b3040]">
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

function QuickView({ product, onClose }) {
  if (!product) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" role="dialog" aria-modal>
      <div className="w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-[#1A1D24] shadow-2xl">
        <div className="relative aspect-video w-full">
          <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium text-white">{product.name}</h3>
              <p className="mt-1 text-sm text-white/70">Ultra-fine dot pattern, stretch-safe adhesive for cotton, blends, and performance wear.</p>
            </div>
            <button onClick={onClose} className="rounded-md border border-white/10 px-2 py-1 text-sm text-white/70 hover:border-white/20">Close</button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xl font-semibold text-white">${product.price.toFixed(2)}</p>
            <button className="rounded-md bg-[#5B8FA8] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Workspace() {
  const [filter, setFilter] = useState('all');
  const [quick, setQuick] = useState(null);

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
          {demoProducts
            .filter((p) =>
              filter === 'all' ? true : filter === 'dtf' ? p.id === 'p1' || p.id === 'p4' : p.id === 'p2' || p.id === 'p3'
            )
            .map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={setQuick} />
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

      <QuickView product={quick} onClose={() => setQuick(null)} />
    </section>
  );
}
