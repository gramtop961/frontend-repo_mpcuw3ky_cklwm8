import { useState } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

export default function Topbar() {
  const [query, setQuery] = useState('');
  const cartCount = 0;

  return (
    <header className="sticky top-0 z-40 border-b border-[#252932] bg-[#0F1117]/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md border border-[#252932] bg-[#1A1D24] grid place-items-center text-[#5B8FA8]">P</div>
          <span className="font-medium text-white">PrimeDTF</span>
        </div>

        <div className="relative ml-4 flex-1 max-w-xl hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, materials, specs"
            className="w-full pl-9 pr-3 h-9 rounded-md border border-[#252932] bg-[#1A1D24] text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#3A4550] focus:border-transparent"
          />
        </div>

        <nav className="ml-auto flex items-center gap-2">
          <button className="h-9 w-9 grid place-items-center rounded-md border border-[#252932] bg-[#1A1D24] text-white hover:bg-[#1A1D24]/80 transition-colors" aria-label="Account">
            <User size={18} />
          </button>
          <button className="relative h-9 w-9 grid place-items-center rounded-md border border-[#252932] bg-[#1A1D24] text-white hover:bg-[#1A1D24]/80 transition-colors" aria-label="Cart">
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 rounded-full bg-[#3A4550] text-white text-[10px] px-1.5 py-0.5">{cartCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
