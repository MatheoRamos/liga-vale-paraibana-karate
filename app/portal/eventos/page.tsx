import React from 'react';
import { User, Medal, Calendar, CreditCard, LogOut, ChevronRight, MapPin } from 'lucide-react';

export default function MeusEventos() {
  const eventosFuturos = [
    {
      id: 101,
      campeonato: "30º Campeonato Regional de Karatê",
      categoria: "Kumite Individual Masculino - Adulto",
      data: "15 de Agosto, 2026",
      local: "Ginásio Municipal",
      status: "Confirmada"
    }
  ];

  const eventosPassados = [
    {
      id: 99,
      campeonato: "Torneio Interno de Inverno",
      categoria: "Kata Individual",
      data: "18 de Julho, 2026",
      local: "Ginásio de Esportes",
      colocacao: "2º Lugar (Prata)"
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
          <a href="/portal" className="flex items-center gap-3 text-blue-200 hover:bg-[#2e50ad] hover:text-white px-4 py-3 rounded-lg font-medium transition-colors">
            <User size={20} /> Meu Perfil
          </a>
          <a href="/portal/eventos" className="flex items-center gap-3 bg-[#ea580c] text-white px-4 py-3 rounded-lg font-medium shadow-md transition-colors">
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
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800">Meus Eventos</h1>
            <p className="text-slate-500 mt-1">Acompanhe suas inscrições e histórico de competições.</p>
          </div>
        </header>

        <div className="space-y-8">
          {/* Próximos Eventos */}
          <section>
            <h3 className="text-xl font-bold text-[#1e3a8a] flex items-center gap-2 mb-4">
              <Calendar size={24} className="text-[#ea580c]" /> Próximos Eventos
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              {eventosFuturos.map((inscricao) => (
                <div key={inscricao.id} className="p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-slate-50 transition-colors border-l-4 border-[#ea580c]">
                  <div>
                    <span className="text-xs font-bold text-slate-500 mb-1 block uppercase tracking-wider">{inscricao.data}</span>
                    <h4 className="font-bold text-xl text-slate-800 leading-tight mb-2">{inscricao.campeonato}</h4>
                    <p className="text-sm text-slate-600 flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#1e3a8a]"></span> {inscricao.categoria}
                    </p>
                    <p className="text-sm text-slate-500 flex items-center gap-2">
                      <MapPin size={14} className="text-slate-400" /> {inscricao.local}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                      Inscrição {inscricao.status}
                    </span>
                    <button className="text-sm font-bold text-[#1e3a8a] hover:text-[#ea580c] transition-colors flex items-center gap-1 mt-2">
                      Ver detalhes <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Histórico */}
          <section>
            <h3 className="text-xl font-bold text-slate-600 flex items-center gap-2 mb-4">
              <Medal size={24} className="text-slate-400" /> Histórico de Resultados
            </h3>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              {eventosPassados.map((evento) => (
                <div key={evento.id} className="p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-100 last:border-0 grayscale-[20%]">
                  <div>
                    <span className="text-xs font-bold text-slate-500 mb-1 block uppercase tracking-wider">{evento.data}</span>
                    <h4 className="font-bold text-lg text-slate-700 leading-tight mb-1">{evento.campeonato}</h4>
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> {evento.categoria}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      🏆 {evento.colocacao}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

