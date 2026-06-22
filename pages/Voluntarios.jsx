export default function Voluntarios() {
  const listaVoluntarios = [
    { id: 1, nome: 'João Pedro', telefone: '(85) 98888-1111', area: 'Apoio Administrativo', disp: 'Manhã', status: 'Ativo' },
    { id: 2, nome: 'Carlos Mendes', telefone: '(85) 97777-2222', area: 'Distribuição de Alimentos', disp: 'Tarde', status: 'Ativo' },
    { id: 3, nome: 'Fernanda Lima', telefone: '(85) 96666-3333', area: 'Apoio Psicológico', disp: 'Integral', status: 'Em Análise' },
  ];

  return (
    <div className="animate-fade-in">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Gestão de Voluntários</h2>
          <p className="text-slate-500 mt-1">Cadastre e gerencie a equipe de apoio da instituição.</p>
        </div>
      </header>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Novo Cadastro de Voluntário</h3>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Ex: Lucas Almeida" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="(00) 00000-0000" />
          </div>
          <div className="md:col-span-3 flex justify-end mt-2">
            <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              💾 Salvar Cadastro
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h3 className="font-bold text-slate-800">Voluntários Cadastrados</h3>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-slate-500 text-sm border-b border-slate-200">
              <th className="px-6 py-3 font-medium">Nome</th>
              <th className="px-6 py-3 font-medium">Contato</th>
              <th className="px-6 py-3 font-medium">Área</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {listaVoluntarios.map((vol) => (
              <tr key={vol.id} className="border-b border-slate-100">
                <td className="px-6 py-4 font-medium text-slate-700">{vol.nome}</td>
                <td className="px-6 py-4 text-slate-500">{vol.telefone}</td>
                <td className="px-6 py-4 text-slate-500">{vol.area}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${vol.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {vol.status}
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