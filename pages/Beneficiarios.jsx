export default function Beneficiarios() {
  const listaBeneficiarios = [
    { id: 1, nome: 'Josefa Pereira', dependentes: 3, necessidade: 'Cesta Básica', status: 'Aprovado' },
    { id: 2, nome: 'Raimundo Nonato', dependentes: 5, necessidade: 'Material Escolar', status: 'Aprovado' },
    { id: 3, nome: 'Maria Silva', dependentes: 2, necessidade: 'Medicamentos', status: 'Em Análise' },
  ];

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Famílias Beneficiárias</h2>
        <p className="text-slate-500 mt-1">Acompanhamento e registro da comunidade atendida.</p>
      </header>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mb-8">
        <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Cadastrar Família</h3>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Responsável</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Ex: Josefa Pereira" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Dependentes</label>
            <input type="number" className="w-full border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="0" />
          </div>
          <div className="md:col-span-3 flex justify-end mt-2">
            <button type="button" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              💾 Salvar Beneficiário
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-200">
              <th className="px-6 py-3 font-medium">Responsável</th>
              <th className="px-6 py-3 font-medium">Dependentes</th>
              <th className="px-6 py-3 font-medium">Necessidade Principal</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {listaBeneficiarios.map((ben) => (
              <tr key={ben.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-700">{ben.nome}</td>
                <td className="px-6 py-4 text-slate-500">{ben.dependentes} pessoas</td>
                <td className="px-6 py-4 text-slate-500">{ben.necessidade}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${ben.status === 'Aprovado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {ben.status}
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