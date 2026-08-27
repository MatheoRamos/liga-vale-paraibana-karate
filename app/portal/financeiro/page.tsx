import React from 'react';
import { User, Calendar, CreditCard, LogOut, CheckCircle, FileText, Download } from 'lucide-react';

export default function Financeiro() {
  const faturas = [
    {
      id: "FAT-2026-001",
      descricao: "Anuidade LVPK 2026",
      valor: "R$ 120,00",
      vencimento: "10 de Março, 2026",
      status: "Pago",
      dataPagamento: "05 de Março, 2026"
    },
    {
      id: "FAT-2026-042",
      descricao: "Inscrição: 30º Campeonato Regional",
      valor: "R$ 80,00",
      vencimento: "10 de Agosto, 2026",
      status: "Aberto",
      dataPagamento: null
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
          <a href="/portal/eventos" className="flex items-center gap-3 text-blue-200 hover:bg-[#2e50ad] hover:text-white px-4 py-3 rounded-lg font-medium transition-colors">
            <Calendar size={20} /> Meus Eventos
          </a>
          <a href="/portal/financeiro" className="flex items-center gap-3 bg-[#ea580c] text-white px-4 py-3 rounded-lg font-medium shadow-md transition-colors">
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
            <h1 className="text-3xl font-extrabold text-slate-800">Financeiro</h1>
            <p className="text-slate-500 mt-1">Gerencie suas anuidades e inscrições em eventos.</p>
          </div>
        </header>

        {/* Resumo Financeiro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase">Anuidade 2026</p>
              <h3 className="text-xl font-black text-slate-800">EM DIA</h3>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 text-[#ea580c] flex items-center justify-center">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase">Faturas em Aberto</p>
              <h3 className="text-xl font-black text-slate-800">1 Fatura(s)</h3>
            </div>
          </div>
        </div>

        {/* Lista de Faturas */}
        <section>
          <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 border-b-2 border-slate-200 pb-2 inline-block">Histórico de Faturas</h3>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {faturas.map((fatura) => (
              <div key={fatura.id} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400">#{fatura.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${fatura.status === 'Pago' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-[#ea580c]'}`}>
                      {fatura.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">{fatura.descricao}</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Vencimento: {fatura.vencimento} {fatura.dataPagamento && `• Pago em: ${fatura.dataPagamento}`}
                  </p>
                </div>
                
                <div className="flex flex-col md:items-end gap-3 w-full md:w-auto">
                  <span className="text-xl font-black text-slate-800">{fatura.valor}</span>
                  {fatura.status === 'Aberto' ? (
                    <button className="w-full md:w-auto bg-[#ea580c] hover:bg-[#c2410c] text-white px-4 py-2 rounded-md font-bold text-sm transition-colors shadow-sm">
                      PAGAR AGORA
                    </button>
                  ) : (
                    <button className="flex items-center justify-center gap-1 text-sm font-bold text-[#1e3a8a] hover:text-blue-800 transition-colors">
                      <Download size={16} /> Recibo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

