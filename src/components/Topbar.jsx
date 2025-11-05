import { ShoppingCart, User, Search, Menu, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function Topbar() {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b border-white/5 bg-[#1A1D24]/80 backdrop-blur supports-[backdrop-filter]:bg-[#1A1D24]/60">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-[#5B8FA8] to-[#3b5e6f] text-white font-semibold">DTF</div>
          <span className="text-sm font-medium tracking-wide text-white/90">PrimePrint Studio</span>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex md:min-w-[420px] lg:min-w-[560px]">
          <div className="relative flex w-full items-center">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search films, DTF sheets, garments, SKU…"
              className="h-9 w-full rounded-md border border-white/10 bg-[#0F1117]/60 pl-9 pr-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#5B8FA8]/50 focus:ring-2 focus:ring-[#5B8FA8]/20"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 bg-[#252932] px-3 text-xs text-white/80 transition hover:border-white/20 hover:bg-[#2b3040]">
            <HelpCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Help</span>
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-[#252932] text-white/80 transition hover:border-white/20 hover:bg-[#2b3040]">
            <User className="h-4 w-4" />
          </button>
          <button className="relative grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-[#5B8FA8] text-white transition hover:brightness-110">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-white text-[10px] font-semibold text-[#0F1117]">2</span>
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-[#252932] text-white/80 transition hover:border-white/20 hover:bg-[#2b3040] md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
