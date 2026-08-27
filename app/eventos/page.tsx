import React from 'react';
import { User, Calendar, MapPin, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react';

export default function Eventos() {
  
  // === DADOS FALSOS PARA A TELA VISUAL ===
  const proximosEventos = [
    {
      mes: "AGOSTO",
      eventos: [
        { id: 1, dia: "15", titulo: "30º Campeonato Regional de Karatê (Sul-Sudeste)", local: "Ginásio Municipal - São José dos Campos", tipo: "Competição" },
        { id: 2, dia: "28", titulo: "Treinamento da Seleção Paulista", local: "Centro de Excelência", tipo: "Treinamento" }
      ]
    },
    {
      mes: "SETEMBRO",
      eventos: [
        { id: 3, dia: "10", titulo: "Exame de Faixas Coloridas (Até Marrom)", local: "Ikigai Dojo - Taubaté", tipo: "Exame" },
        { id: 4, dia: "24", titulo: "Copa LVPK de Kata", local: "Clube ADC Embraer", tipo: "Competição" }
      ]
    }
  ];

  const eventosRealizados = [
    {
      mes: "JULHO",
      eventos: [
        { id: 5, dia: "02", titulo: "Curso de Padronização Técnica", local: "Dojo Matriz", tipo: "Curso" },
        { id: 6, dia: "18", titulo: "Torneio Interno de Inverno", local: "Ginásio de Esportes", tipo: "Competição" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. NAVBAR (Cabeçalho) */}
      <nav className="bg-[#1e3a8a] text-white sticky top-0 z-50 shadow-lg border-b-4 border-[#ea580c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden p-0.5">
                 <img src="/logo.png" alt="Logo LVPK" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight uppercase tracking-wider text-white shadow-sm">Liga Vale Paraibana</span>
                <span className="text-sm font-medium text-blue-200">de Karatê</span>
              </div>
            </a>

            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="/institucional" className="hover:text-orange-400 transition-colors">INSTITUCIONAL</a>
              <a href="/karate" className="hover:text-orange-400 transition-colors">KARATÊ</a>
              <a href="/eventos" className="text-orange-400 font-bold border-b-2 border-orange-400 pb-1">EVENTOS</a>
              <a href="/noticias" className="hover:text-orange-400 transition-colors">NOTÍCIAS</a>
              <a href="/portal" className="hover:text-orange-400 transition-colors">PORTAL DO ATLETA</a>
              <a href="/login" className="hover:text-orange-400 transition-colors">LOGIN</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="/login?modo=cadastro" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2 rounded-md font-bold text-sm transition-colors shadow-md">
                FILIE-SE
              </a>
              <a href="/login" className="p-2 text-blue-200 hover:text-white transition-colors" title="Área do Filiado">
                <User size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. CABEÇALHO DA PÁGINA */}
      <header className="bg-white border-b border-slate-200 pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1e3a8a] text-sm font-bold mb-4 border border-blue-100">
            <Calendar size={16} /> CALENDÁRIO OFICIAL
          </div>
          <h1 className="text-4xl font-extrabold text-[#1e3a8a] mb-4">
            Eventos e Competições 2026
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Acompanhe o cronograma anual da Liga Vale Paraibana de Karatê. Programe-se para os cursos, exames de graduação e campeonatos do circuito oficial.
          </p>
        </div>
      </header>

      {/* 3. CONTEÚDO PRINCIPAL (Listagem) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUNA ESQUERDA: PRÓXIMOS EVENTOS */}
          <div>
            <h2 className="text-2xl font-bold text-[#ea580c] flex items-center gap-2 mb-8 border-b-2 border-[#ea580c] pb-2 inline-block">
              Próximos eventos
            </h2>

            <div className="space-y-8">
              {proximosEventos.map((grupoMes, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
                    <h3 className="font-extrabold text-xl text-[#1e3a8a] tracking-wider">{grupoMes.mes}</h3>
                    <ChevronDown size={20} className="text-slate-400" />
                  </div>
                  
                  <div className="space-y-4">
                    {grupoMes.eventos.map((evento) => (
                      <div key={evento.id} className="flex gap-4 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 cursor-pointer group">
                        
                        {/* Bloquinho de Data */}
                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-[#1e3a8a] text-white rounded-lg shadow-sm flex-shrink-0">
                          <span className="text-xs font-medium uppercase opacity-80">{grupoMes.mes.substring(0,3)}</span>
                          <span className="text-2xl font-black leading-none">{evento.dia}</span>
                        </div>

                        {/* Informações do Evento */}
                        <div className="flex flex-col justify-center flex-1">
                          <span className="text-[10px] font-bold text-[#ea580c] uppercase tracking-wider mb-1 block">
                            {evento.tipo}
                          </span>
                          <h4 className="font-bold text-slate-800 text-lg leading-tight mb-1 group-hover:text-[#1e3a8a] transition-colors">
                            {evento.titulo}
                          </h4>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <MapPin size={14} />
                            <span>{evento.local}</span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUNA DIREITA: EVENTOS REALIZADOS */}
          <div>
            <h2 className="text-2xl font-bold text-slate-400 flex items-center gap-2 mb-8 border-b-2 border-slate-300 pb-2 inline-block">
              Eventos realizados
            </h2>

            <div className="space-y-8 opacity-75">
              {eventosRealizados.map((grupoMes, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 grayscale-[30%]">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
                    <h3 className="font-extrabold text-xl text-slate-500 tracking-wider">{grupoMes.mes}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {grupoMes.eventos.map((evento) => (
                      <div key={evento.id} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                        
                        {/* Bloquinho de Data (Cinza) */}
                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-slate-200 text-slate-500 rounded-lg flex-shrink-0">
                          <span className="text-xs font-medium uppercase opacity-80">{grupoMes.mes.substring(0,3)}</span>
                          <span className="text-2xl font-black leading-none">{evento.dia}</span>
                        </div>

                        {/* Informações do Evento */}
                        <div className="flex flex-col justify-center flex-1">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">
                            {evento.tipo}
                          </span>
                          <h4 className="font-bold text-slate-600 text-lg leading-tight mb-1">
                            {evento.titulo}
                          </h4>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <MapPin size={14} />
                            <span>{evento.local}</span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 flex items-center justify-center w-full py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
              Ver histórico completo de 2025
            </button>
          </div>

        </div>
      </main>

      {/* 4. FOOTER (Rodapé) */}
      <footer className="bg-[#0f172a] text-slate-300 py-12 border-t-4 border-[#ea580c] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1e293b] p-6 rounded-2xl border border-[#334155]">
            <h4 className="text-white font-bold text-xl mb-4">Entre em contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-[#ea580c]" size={24} />
                <span className="font-medium text-lg">(12) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={24} />
                <span className="font-medium">contato@lvpk.com.br</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Horário de Atendimento</h4>
            <p className="font-medium text-white">Segunda a sexta-feira</p>
            <p className="mb-4">9h às 18h</p>
            <p className="font-medium text-white">Sábado</p>
            <p>9h às 13h</p>
          </div>
        </div>
      </footer>
    </div>
  );
}