import { useCallback, useMemo, useState } from 'react';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import Workspace from './components/Workspace.jsx';
import CartDrawer from './components/CartDrawer.jsx';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(() => cart.reduce((s, it) => s + it.qty, 0), [cart]);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const increase = useCallback((id) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  }, []);

  const decrease = useCallback((id) => {
    setCart((prev) => prev.flatMap((p) => (p.id === id ? (p.qty > 1 ? [{ ...p, qty: p.qty - 1 }] : []) : [p])));
  }, []);

  const remove = useCallback((id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1117] text-white antialiased">
      <Topbar onCartClick={() => setCartOpen(true)} cartCount={cartCount} />
      <Sidebar />
      <main className="pl-16 pt-14 transition-all duration-300 hover:pl-56">
        <Hero />
        <Workspace onAddToCart={addToCart} />
        <footer className="mx-auto mt-8 max-w-7xl px-4 pb-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} PrimePrint Studio. All rights reserved.
        </footer>
      </main>

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onIncrease={increase}
        onDecrease={decrease}
        onRemove={remove}
      />
    </div>
  );
}
