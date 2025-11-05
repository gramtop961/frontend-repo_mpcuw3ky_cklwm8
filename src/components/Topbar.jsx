import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, User, Sparkles } from 'lucide-react';

export default function Topbar() {
  const [query, setQuery] = useState('');
  const [cartCount] = useState(2);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#0f0f0f]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#00D9FF] via-[#FF006E] to-[#FFD700] p-[2px]">
            <div className="h-full w-full rounded-[6px] bg-[#1A1A1A] grid place-items-center">
              <Sparkles className="text-[#00D9FF]" size={18} />
            </div>
          </div>
          <span className="font-semibold text-white tracking-wide">PrimeDTF</span>
        </div>

        <div className="hidden md:flex items-center relative ml-4 flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search materials, sizes, equipment…"
            className="w-full pl-10 pr-3 py-2 rounded-xl bg-white/5 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/60 focus:border-transparent"
          />
          {/* AI hint pill */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-7 left-2 text-xs text-white/70"
          >
            Try: “high stretch white ink transfers for nylon”
          </motion.div>
        </div>

        <nav className="ml-auto flex items-center gap-3">
          <button className="relative group rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 transition-colors">
            <User size={18} />
            <span className="sr-only">Account</span>
            <span className="pointer-events-none absolute -right-2 -top-2 rounded-full bg-[#FFD700] px-1.5 py-0.5 text-[10px] font-bold text-black shadow">PRO</span>
          </button>
          <button className="relative rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 transition-colors">
            <ShoppingCart size={18} />
            <span className="sr-only">Cart</span>
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-1.5 -top-1.5 grid place-items-center rounded-full bg-[#FF006E] px-1.5 py-0.5 text-[10px] font-bold text-white shadow"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
