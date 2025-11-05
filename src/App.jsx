import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import Workspace from './components/Workspace.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white antialiased">
      <Topbar />
      <Sidebar />
      <main className="pl-16 pt-14 transition-all duration-300 hover:pl-56">
        <Hero />
        <Workspace />
        <footer className="mx-auto mt-8 max-w-7xl px-4 pb-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} PrimePrint Studio. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
