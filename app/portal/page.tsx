import React from 'react';
import { User, Medal, Calendar, CreditCard, LogOut, Award, ChevronRight } from 'lucide-react';

export default function Portal() {
  // === SIMULAÇÃO DE DADOS DO BANCO ===
  // Estes seriam os dados puxados do PostgreSQL quando o atleta faz login
  const atletaLogado = {
    nome: "João da Silva",
    faixa: "Roxa (4º Kyu)",
    registro: "LVPK-2026-085",
    dojo: "Ikigai Dojo",
    anuidade: "Em dia",
    foto: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80"
  };

  const minhasInscricoes = [
    {
      id: 101,
      campeonato: "30º Campeonato Regional de Karatê",
      categoria: "Kumite Individual Masculino - Adulto",
      data: "15 de Agosto, 2026",
      status: "Confirmada"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans">
      
      {/* MENU LATERAL (Sidebar) */}
      <aside className="w-full md:w-64 bg-[#1e3a8a] text-white flex flex-col shadow-xl z-20">
        <div className="p-6 flex items-center gap-3 border-b border-[#2e50ad]">
          <div className="w-10 h-10 bg-white rounded-full p-0.5">
            <img src="/logo.png" alt="LVPK Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <div>
            <h2 className="font-bold text-sm tracking-wider uppercase">Portal LVPK</h2>
            <span className="text-xs text-blue-300">Área do Filiado</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a href="/portal" className="flex items-center gap-3 bg-[#ea580c] text-white px-4 py-3 rounded-lg font-medium shadow-md transition-colors">
            <User size={20} /> Meu Perfil
          </a>
          <a href="/portal/eventos" className="flex items-center gap-3 text-blue-200 hover:bg-[#2e50ad] hover:text-white px-4 py-3 rounded-lg font-medium transition-colors">
            <Calendar size={20} /> Meus Eventos
          </a>
          <a href="/portal/financeiro" className="flex items-center gap-3 text-blue-200 hover:bg-[#2e50ad] hover:text-white px-4 py-3 rounded-lg font-medium transition-colors">
            <CreditCard size={20} /> Financeiro
          </a>
        </nav>

        <div className="p-4 border-t border-[#2e50ad]">
          <a href="/" className="flex items-center gap-3 text-blue-300 hover:text-white px-4 py-2 font-medium transition-colors">
            <LogOut size={20} /> Sair do sistema
          </a>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        
        {/* Cabeçalho de Boas-vindas */}
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800">Olá, {atletaLogado.nome.split(' ')[0]}!</h1>
            <p className="text-slate-500 mt-1">Bem-vindo(a) ao seu painel de controle da Liga.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUNA ESQUERDA: Carteirinha Virtual */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden relative">
              {/* Topo da carteirinha */}
              <div className="h-24 bg-[#1e3a8a] relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              </div>
              
              <div className="px-6 pb-6 pt-0 text-center relative">
                {/* Foto do Atleta (Sobrepondo o header) */}
                <div className="w-24 h-24 mx-auto -mt-12 bg-white rounded-full p-1 shadow-md mb-4 relative z-10 border-4 border-slate-50">
                  <img src={atletaLogado.foto} alt="Foto do atleta" className="w-full h-full object-cover rounded-full" />
                </div>
                
                <h2 className="text-xl font-bold text-slate-800">{atletaLogado.nome}</h2>
                <div className="inline-block mt-1 px-3 py-1 bg-orange-100 text-[#ea580c] font-bold text-sm rounded-full border border-orange-200">
                  Faixa {atletaLogado.faixa}
                </div>

                <div className="mt-6 space-y-3 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-500 font-medium">Registro LVPK</span>
                    <span className="text-sm font-bold text-slate-800">{atletaLogado.registro}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-sm text-slate-500 font-medium">Associação/Dojo</span>
                    <span className="text-sm font-bold text-slate-800">{atletaLogado.dojo}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-slate-500 font-medium">Anuidade 2026</span>
                    <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {atletaLogado.anuidade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Avisos e Inscrições */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Bloco de Inscrições Ativas */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1e3a8a] flex items-center gap-2">
                  <Medal size={24} className="text-[#ea580c]" /> Próximas Competições
                </h3>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {minhasInscricoes.map((inscricao) => (
                  <div key={inscricao.id} className="p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-slate-50 transition-colors">
                    <div>
                      <span className="text-xs font-bold text-slate-500 mb-1 block uppercase tracking-wider">{inscricao.data}</span>
                      <h4 className="font-bold text-lg text-slate-800 leading-tight">{inscricao.campeonato}</h4>
                      <p className="text-sm text-slate-600 mt-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span> {inscricao.categoria}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Inscrição {inscricao.status}
                      </span>
                      <button className="text-sm font-bold text-[#1e3a8a] hover:text-[#ea580c] transition-colors flex items-center gap-1">
                        Ver chaves <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Bloco de Atualizações/Recados */}
            <section>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Mural de Recados</h3>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 flex gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-1">Novo curso de arbitragem disponível</h4>
                  <p className="text-sm text-blue-800">As inscrições para o curso de atualização de regras (Kata e Kumite) já estão abertas na aba "Eventos". Vagas limitadas para faixas marrons e pretas.</p>
                </div>
              </div>
            </section>

          </div>
        </div>

      </main>
    </div>
  );
}