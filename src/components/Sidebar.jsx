import { Home, Brush, Shirt, Package, Settings, ChevronRight, Star } from 'lucide-react';

const items = [
  { icon: Home, label: 'Overview' },
  { icon: Brush, label: 'DTF Designer' },
  { icon: Shirt, label: 'Garments' },
  { icon: Package, label: 'Supplies' },
  { icon: Star, label: 'Bestsellers' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="group fixed left-0 top-14 z-40 h-[calc(100vh-56px)] w-16 overflow-hidden border-r border-white/5 bg-[#1A1D24] transition-all duration-300 hover:w-56">
      <nav className="flex h-full flex-col justify-between py-4">
        <ul className="space-y-1 px-2">
          {items.map(({ icon: Icon, label }) => (
            <li key={label}>
              <button className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-sm text-white/80 transition hover:bg-white/5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 bg-[#252932] text-white/80">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="pointer-events-none hidden translate-x-2 whitespace-nowrap text-white/80 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:inline">
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="px-2">
          <div className="flex items-center justify-between rounded-md border border-white/10 bg-[#252932] p-2 text-white/70">
            <div>
              <p className="text-xs">Expand</p>
              <p className="text-[10px] text-white/50">Hover to reveal</p>
            </div>
            <ChevronRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-1" />
          </div>
        </div>
      </nav>
    </aside>
  );
}
