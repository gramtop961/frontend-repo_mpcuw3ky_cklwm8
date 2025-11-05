import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/30 via-transparent to-[#1A1A1A]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Precision DTF & Premium Print Manufacturing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg text-white/80"
          >
            Industrial-grade quality meets a designer-first experience. Build custom transfers, explore materials, and see your ideas come alive in real time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <button className="group relative overflow-hidden rounded-2xl px-5 py-3 font-semibold text-black">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D9FF] via-[#FF006E] to-[#FFD700]" />
              <span className="relative">Start Your Custom Order</span>
            </button>
            <button className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors">Explore Catalog</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center gap-6"
          >
            <div className="flex items-center gap-2 text-white/80">
              <div className="h-2 w-2 rounded-full bg-[#00D9FF] shadow-[0_0_12px_2px_rgba(0,217,255,0.6)]" />
              <span className="text-sm">Live 3D process preview</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="h-2 w-2 rounded-full bg-[#FF006E] shadow-[0_0_12px_2px_rgba(255,0,110,0.5)]" />
              <span className="text-sm">Pro-grade color fidelity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
