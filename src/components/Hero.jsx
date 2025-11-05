import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[56vh] min-h-[480px] w-full overflow-hidden border-b border-[#252932]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F1117]/40 via-transparent to-[#0F1117]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-2xl">
          <h1 className="text-[28px] sm:text-[36px] font-medium leading-tight text-white">Enterprise‑grade Print & DTF Production</h1>
          <p className="mt-3 text-sm sm:text-base text-white/80">Precision manufacturing, calibrated workflows, and consistent results at scale — built for teams that need reliability.</p>
          <div className="mt-6 flex items-center gap-3">
            <button className="h-10 rounded-md border border-[#3A4550] bg-[#1A1D24] px-4 text-sm text-white hover:bg-[#1A1D24]/80 transition-colors">Start a Custom Order</button>
            <button className="h-10 rounded-md border border-[#252932] bg-transparent px-4 text-sm text-white/80 hover:text-white">View Catalog</button>
          </div>
        </div>
      </div>
    </section>
  );
}
