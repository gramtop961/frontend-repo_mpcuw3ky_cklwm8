import { useState } from 'react';
import { Package, Layers, Wrench, Palette, Settings } from 'lucide-react';

const items = [
  { id: 'dtf', label: 'DTF Transfers', icon: Layers },
  { id: 'custom', label: 'Custom Printing', icon: Palette },
  { id: 'press', label: 'Heat Press Supplies', icon: Wrench },
  { id: 'vinyl', label: 'Vinyl', icon: Package },
  { id: 'equipment', label: 'Equipment', icon: Settings },
];

export default function Sidebar() {
  const [active] = useState('dtf');

  return (
    <aside className="group relative h-[calc(100vh-56px)] w-16 hover:w-56 transition-[width] duration-200 ease-out border-r border-[#252932] bg-[#0F1117]">
      <nav className="py-4">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                isActive ? 'text-white bg-[#1A1D24]' : 'text-white/70 hover:text-white hover:bg-[#1A1D24]'
              }`}
            >
              <span className="shrink-0 h-9 w-9 grid place-items-center rounded-md border border-[#252932] bg-[#1A1D24]"><Icon size={18} /></span>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">{it.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
