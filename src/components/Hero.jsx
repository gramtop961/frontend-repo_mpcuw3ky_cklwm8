import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[56vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F1117]/60 via-transparent to-[#0F1117]/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F1117] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium leading-tight text-white md:text-4xl">
            Premium DTF & Fine Art Prints
          </h1>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Archival inks, precision color, and garments that outlast trends. Manufacture quality on-demand with our professional toolkit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalog" className="inline-flex items-center gap-2 rounded-md bg-[#5B8FA8] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110">
              <Rocket className="h-4 w-4" /> Start shopping
            </a>
            <a href="#designer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#1A1D24]/70 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-[#252932]">
              <Play className="h-4 w-4" /> Try designer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
