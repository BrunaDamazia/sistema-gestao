import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const atividadesRecentes = [
    { id: 1, nome: 'Maria Silva', tipo: 'Beneficiário', data: '22/06/2026', status: 'Aprovado' },
    { id: 2, nome: 'João Pedro', tipo: 'Voluntário', data: '21/06/2026', status: 'Ativo' },
    { id: 3, nome: 'Ana Souza', tipo: 'Beneficiário', data: '20/06/2026', status: 'Em Análise' },
  ];

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Painel de Gestão</h2>
        <p className="text-slate-500 mt-1">Resumo das atividades da instituição.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl">🤝</div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Voluntários Ativos</p>
            <p className="text-2xl font-bold text-slate-800">24</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl">💙</div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Famílias Atendidas</p>
            <p className="text-2xl font-bold text-slate-800">158</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl">📦</div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Ações no Mês</p>
            <p className="text-2xl font-bold text-slate-800">45</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <button onClick={() => navigate('/voluntarios')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-colors">
          + Novo Voluntário
        </button>
        <button onClick={() => navigate('/beneficiarios')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-colors">
          + Cadastrar Beneficiário
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="font-bold text-slate-800">Últimos Cadastros</h3>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
              <th className="px-6 py-3 font-medium">Nome</th>
              <th className="px-6 py-3 font-medium">Tipo</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {atividadesRecentes.map((item) => (
              <tr key={item.id} className="border-b border-slate-100">
                <td className="px-6 py-4 font-medium text-slate-700">{item.nome}</td>
                <td className="px-6 py-4 text-slate-500">{item.tipo}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Aprovado' || item.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}