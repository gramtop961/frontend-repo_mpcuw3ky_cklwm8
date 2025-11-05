import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2, Palette } from 'lucide-react';

export default function DesignerPreview() {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    if (!/(png|svg|pdf|jpg|jpeg)$/i.test(f.name)) {
      alert('Please upload PNG, SVG, PDF, or JPG files.');
      return;
    }
    setFile(f);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!file) return;
    let mounted = true;
    const timer = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + 8);
        return next;
      });
    }, 150);
    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [file]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Designer Panel */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <h3 className="text-white text-2xl font-bold">Custom Designer</h3>
          <p className="text-white/70 mt-1">Drag in your artwork, preview instantly, and fine-tune colors with pro-grade controls.</p>

          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={`mt-5 relative grid place-items-center rounded-xl border-2 p-8 text-white transition-all ${dragOver ? 'border-[#00D9FF] bg-[#00D9FF]/10' : 'border-white/15 bg-white/5'}`}
          >
            <div className="text-center">
              <Upload className={`mx-auto mb-3 ${dragOver ? 'text-[#00D9FF]' : 'text-white/80'}`} />
              <p className="text-white/80">Drop files here or</p>
              <button
                onClick={() => inputRef.current?.click()}
                className="mt-2 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#FF006E] px-3 py-2 text-sm font-semibold text-black"
              >
                Browse
              </button>
              <input ref={inputRef} type="file" className="hidden" onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) setFile(f);
              }} />
            </div>
            <AnimatePresence>
              {file && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-x-4 -bottom-5 rounded-xl border border-white/10 bg-[#121212] p-3"
                >
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span className="truncate">{file.name}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: 'easeOut', duration: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] via-[#FF006E] to-[#FFD700]"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {['#00D9FF', '#FF006E', '#FFD700'].map((c) => (
              <motion.button
                key={c}
                whileTap={{ scale: 0.96 }}
                className="h-10 rounded-xl border border-white/10"
                style={{ background: `${c}33` }}
              >
                <div className="flex items-center justify-center gap-2 text-white">
                  <span className="h-3 w-3 rounded-full" style={{ background: c }} />
                  <span className="text-sm" style={{ color: c }}>Swatch</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-2xl font-bold">Live Preview</h3>
            <span className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/70">DTF Simulation</span>
          </div>
          <div className="mt-4 relative h-[320px] rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
            <motion.div
              initial={{ x: '-8%' }}
              animate={{ x: '8%' }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 4 }}
              className="absolute inset-0"
              style={{ background: 'radial-gradient(500px 160px at 20% 30%, rgba(0,217,255,0.18), transparent 60%)' }}
            />
            <div className="absolute inset-0 grid place-items-center text-white/80">
              {progress >= 100 ? (
                <div className="text-center">
                  <CheckCircle2 className="mx-auto text-[#00D9FF]" />
                  <p className="mt-2">Ready to press</p>
                </div>
              ) : (
                <div className="text-center">
                  <Palette className="mx-auto" />
                  <p className="mt-2">Upload artwork to preview</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-white/70 text-sm">Resolution: 300 DPI • White Ink Underbase: Auto • Heat: 300°F</div>
            <button className="rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FF006E] px-4 py-2 text-sm font-semibold text-black">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
