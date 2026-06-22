export default function Tarefas() {
  const tarefas = [
    { id: 1, titulo: 'Organizar doações de roupas', voluntario: 'João Pedro', prioridade: 'Alta', status: 'A Fazer' },
    { id: 2, titulo: 'Ligar para fornecedores', voluntario: 'Carlos Mendes', prioridade: 'Média', status: 'A Fazer' },
    { id: 3, titulo: 'Montar cestas básicas', voluntario: 'João Pedro', prioridade: 'Alta', status: 'Em Andamento' },
    { id: 4, titulo: 'Triagem psicológica', voluntario: 'Fernanda Lima', prioridade: 'Alta', status: 'Concluído' },
    { id: 5, titulo: 'Atualizar planilhas', voluntario: 'Sem atribuição', prioridade: 'Baixa', status: 'A Fazer' },
  ];

  // Filtramos as tarefas pelas colunas do Kanban
  const aFazer = tarefas.filter(t => t.status === 'A Fazer');
  const emAndamento = tarefas.filter(t => t.status === 'Em Andamento');
  const concluido = tarefas.filter(t => t.status === 'Concluído');

  // Função simples para definir a cor da etiqueta de prioridade
  const corPrioridade = (prioridade) => {
    if (prioridade === 'Alta') return 'bg-red-100 text-red-700';
    if (prioridade === 'Média') return 'bg-yellow-100 text-yellow-700';
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <div className="animate-fade-in">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Quadro de Tarefas</h2>
          <p className="text-slate-500 mt-1">Organize as demandas e delegue atividades para a equipe.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-colors">
          + Nova Tarefa
        </button>
      </header>

      {/* Grid do Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* COLUNA: A FAZER */}
        <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
          <h3 className="font-bold text-slate-700 mb-4 flex items-center justify-between">
            A Fazer <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs">{aFazer.length}</span>
          </h3>
          <div className="flex flex-col gap-3">
            {aFazer.map(tarefa => (
              <div key={tarefa.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 cursor-pointer hover:border-indigo-400 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${corPrioridade(tarefa.prioridade)}`}>
                    {tarefa.prioridade}
                  </span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-2">{tarefa.titulo}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    {tarefa.voluntario !== 'Sem atribuição' ? tarefa.voluntario.charAt(0) : '?'}
                  </span>
                  {tarefa.voluntario}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA: EM ANDAMENTO */}
        <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
          <h3 className="font-bold text-slate-700 mb-4 flex items-center justify-between">
            Em Andamento <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs">{emAndamento.length}</span>
          </h3>
          <div className="flex flex-col gap-3">
            {emAndamento.map(tarefa => (
              <div key={tarefa.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-yellow-400 cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${corPrioridade(tarefa.prioridade)}`}>
                    {tarefa.prioridade}
                  </span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-2">{tarefa.titulo}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    {tarefa.voluntario.charAt(0)}
                  </span>
                  {tarefa.voluntario}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA: CONCLUÍDO */}
        <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
          <h3 className="font-bold text-slate-700 mb-4 flex items-center justify-between">
            Concluído <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs">{concluido.length}</span>
          </h3>
          <div className="flex flex-col gap-3">
            {concluido.map(tarefa => (
              <div key={tarefa.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-green-500 opacity-75">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${corPrioridade(tarefa.prioridade)}`}>
                    {tarefa.prioridade}
                  </span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-2 line-through">{tarefa.titulo}</h4>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    {tarefa.voluntario.charAt(0)}
                  </span>
                  {tarefa.voluntario}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}