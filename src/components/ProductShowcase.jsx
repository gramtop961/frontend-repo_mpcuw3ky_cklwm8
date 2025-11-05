import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Palette, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'dtf-pro',
    name: 'DTF Pro Transfers',
    price: '$6.50 / sq ft',
    badge: 'Most Popular',
    specs: ['High-stretch white ink', 'Nylon-safe adhesive', 'Soft-hand finish'],
    accent: '#00D9FF',
  },
  {
    id: 'metallic-gold',
    name: 'Metallic Gold Film',
    price: '$8.20 / sq ft',
    badge: 'Premium',
    specs: ['Luxury sheen', 'Heat press safe', 'Wash durable'],
    accent: '#FFD700',
  },
  {
    id: 'neon-pack',
    name: 'Neon Color Pack',
    price: '$7.40 / sq ft',
    badge: 'Vibrant',
    specs: ['Cyan, Magenta, Lime', 'UV reactive', 'Pro calibration'],
    accent: '#FF006E',
  },
];

function ProductCard({ p, onQuickView }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div
          className="absolute -inset-40 rotate-12"
          style={{
            background: `radial-gradient(600px 200px at 20% 10%, ${p.accent}22, transparent 60%)`,
          }}
        />
      </div>
      <div className="relative flex items-start justify-between">
        <div>
          <h3 className="text-white font-semibold text-lg">{p.name}</h3>
          <p className="text-white/70 text-sm mt-1">{p.price}</p>
        </div>
        <span
          className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/5 text-white/80"
        >
          {p.badge}
        </span>
      </div>
      <div className="relative mt-4 h-32 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden">
        <motion.div
          initial={{ rotate: -6 }}
          whileHover={{ rotate: 6 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${p.accent}33, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 grid place-items-center text-white/70">
          <Layers size={28} />
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-white/80 text-sm">
        {p.specs.map((s) => (
          <li key={s} className="flex items-center gap-2">
            <CheckCircle2 className="text-white/60" size={16} />
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => onQuickView(p)}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10 transition-colors"
        >
          Quick View
        </button>
        <button className="flex-1 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-black font-semibold px-3 py-2">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

function QuickViewModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#121212] p-5 text-white shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-white/70">{product.price}</p>
              </div>
              <button onClick={onClose} className="text-white/60 hover:text-white">Close</button>
            </div>
            <div className="mt-4 h-48 rounded-xl border border-white/10 bg-white/5 relative overflow-hidden">
              <motion.div
                initial={{ x: '-10%' }}
                animate={{ x: '10%' }}
                transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3 }}
                className="absolute inset-0"
                style={{ background: `radial-gradient(400px 120px at 30% 30%, ${product.accent}33, transparent 60%)` }}
              />
              <div className="absolute inset-0 grid place-items-center text-white/70">
                <Palette size={26} />
                <span className="mt-2 text-xs">Interactive 360° preview</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {['XS','M','L'].map((t) => (
                <button key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">{t} Sample</button>
              ))}
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={onClose} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">Cancel</button>
              <button className="rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FF006E] text-black font-semibold px-4 py-2">Add to Cart</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProductShowcase() {
  const [quickProduct, setQuickProduct] = useState(null);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Materials & Transfers</h2>
          <p className="text-white/70 mt-1">Engineered for pro creators — calibrated for color, stretch, and durability.</p>
        </div>
        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10">View All</button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} onQuickView={setQuickProduct} />
        ))}
      </div>
      <QuickViewModal product={quickProduct} onClose={() => setQuickProduct(null)} />
    </section>
  );
}
