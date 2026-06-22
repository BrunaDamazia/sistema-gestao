import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Voluntarios from '../pages/Voluntarios';
import Beneficiarios from '../pages/Beneficiarios';
import Tarefas from '../pages/Tarefas';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-slate-50 font-sans">
        <aside className="w-64 bg-indigo-900 text-white flex flex-col shadow-xl">
          <div className="p-6 border-b border-indigo-800">
            <h1 className="text-2xl font-bold tracking-tight">
              Impacto<span className="text-indigo-400">Social</span>
            </h1>
            <p className="text-indigo-300 text-sm mt-1">Unidade Caucaia - CE</p>
          </div>

          <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-left px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-700 font-semibold' : 'hover:bg-indigo-800'}`
              }
            >
              📊 Visão Geral
            </NavLink>
            <NavLink
              to="/voluntarios"
              className={({ isActive }) =>
                `text-left px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-700 font-semibold' : 'hover:bg-indigo-800'}`
              }
            >
              🤝 Voluntários
            </NavLink>
            <NavLink
              to="/beneficiarios"
              className={({ isActive }) =>
                `text-left px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-700 font-semibold' : 'hover:bg-indigo-800'}`
              }
            >
              💙 Beneficiários
            </NavLink>
            <NavLink
              to="/tarefas"
              className={({ isActive }) =>
                `text-left px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-700 font-semibold' : 'hover:bg-indigo-800'}`
              }
            >
              ✅ Gestão de Tarefas
            </NavLink>
          </nav>

          <div className="p-4 border-t border-indigo-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-lg">
                A
              </div>
              <div>
                <p className="font-semibold text-sm">Administrador</p>
                <p className="text-xs text-indigo-300">Acesso Total</p>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/voluntarios" element={<Voluntarios />} />
            <Route path="/beneficiarios" element={<Beneficiarios />} />
            <Route path="/tarefas" element={<Tarefas />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
