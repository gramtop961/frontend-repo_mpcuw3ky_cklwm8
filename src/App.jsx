import Topbar from './components/Topbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import DesignerPreview from './components/DesignerPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Industrial subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Topbar />
      <Hero />
      <main>
        <ProductShowcase />
        <DesignerPreview />
      </main>

      <footer className="border-t border-white/10 bg-[#121212] py-8 text-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PrimeDTF — Precision for Creators</p>
          <div className="flex items-center gap-3 text-sm">
            <span className="h-2 w-2 rounded-full bg-[#00D9FF] shadow-[0_0_12px_2px_rgba(0,217,255,0.6)]" />
            <span>Operational • 2-3 day turnaround</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
