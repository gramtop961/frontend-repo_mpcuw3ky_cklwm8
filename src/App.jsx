import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Workspace from './components/Workspace';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Topbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-[auto_1fr] gap-0 px-0 sm:px-0 lg:px-0">
        <Sidebar />
        <div className="min-h-[calc(100vh-56px)] overflow-hidden">
          <Workspace />
        </div>
      </div>
      <footer className="border-t border-[#252932] bg-[#0F1117] py-8 text-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PrimeDTF — Professional Print & DTF</p>
          <div className="text-sm">Uptime: 99.9% • SLA: 24h support</div>
        </div>
      </footer>
    </div>
  );
}
