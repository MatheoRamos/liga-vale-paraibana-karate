"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Award, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  Sparkles, 
  ArrowUp, 
  Flame, 
  Shield, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

export default function Karate() {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [mostrarVoltarTopo, setMostrarVoltarTopo] = useState(false);
  const [estiloAtivo, setEstiloAtivo] = useState(0);
  const [faixaAtiva, setFaixaAtiva] = useState(0);

  const selecionarEstilo = (idx: number) => {
    setEstiloAtivo(idx);
    setFaixaAtiva(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setMostrarVoltarTopo(true);
      } else {
        setMostrarVoltarTopo(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  type Faixa = { nome: string; kyu: string; cor: string; sign: string };

  const faixaBranca = (kyu: string): Faixa => ({ nome: 'Branca', kyu, cor: 'bg-slate-100 border border-slate-300 text-slate-800', sign: 'Pureza e início da jornada. A mente vazia pronta para absorver os fundamentos e valores do Karatê.' });
  const faixaPreta: Faixa = { nome: 'Preta', kyu: '1º Dan em diante', cor: 'bg-black text-amber-400 border border-amber-500/50', sign: 'O recomeço. A união de técnica, espírito, liderança e maestria com compromisso vitalício à arte.' };

  const faixasShotokan: Faixa[] = [
    faixaBranca('10º Kyu'),
    { nome: 'Amarela', kyu: '9º Kyu', cor: 'bg-amber-400 text-amber-950', sign: 'O despertar. Os primeiros raios de luz sobre o conhecimento técnico e a postura do praticante.' },
    { nome: 'Laranja', kyu: '8º Kyu', cor: 'bg-orange-500 text-white', sign: 'A energia em formação. A consolidação das bases (dachi), do equilíbrio e do respeito no dojo.' },
    { nome: 'Verde', kyu: '7º Kyu', cor: 'bg-emerald-600 text-white', sign: 'Crescimento. O karateca começa a florescer, ganhando confiança nos fundamentos e nos primeiros kata.' },
    { nome: 'Azul Claro', kyu: '6º Kyu', cor: 'bg-sky-300 text-sky-950', sign: 'Serenidade e abertura. A mente se expande como o céu, buscando controle, calma e precisão técnica.' },
    { nome: 'Roxa', kyu: '5º Kyu', cor: 'bg-purple-700 text-white', sign: 'Transição. O praticante deixa o nível básico e aprofunda a consciência corporal e a disciplina.' },
    { nome: 'Azul Escuro', kyu: '4º Kyu', cor: 'bg-blue-900 text-white', sign: 'Profundidade. Firmeza técnica e maturidade mental, preparando o caminho para as graduações avançadas.' },
    { nome: 'Marrom', kyu: '3º a 1º Kyu', cor: 'bg-[#5c3a21] text-white', sign: 'A terra e a solidez. Dividida em três etapas (3º, 2º e 1º Kyu), é a preparação final, com respeito exemplar e refinamento técnico para a Faixa Preta.' },
    faixaPreta,
  ];

  const faixasShorin: Faixa[] = [
    faixaBranca('7º Kyu'),
    { nome: 'Azul Clara', kyu: '6º Kyu', cor: 'bg-sky-300 text-sky-950', sign: 'Serenidade e abertura. A mente se expande como o céu, buscando calma e atenção aos fundamentos.' },
    { nome: 'Amarela', kyu: '5º Kyu', cor: 'bg-amber-400 text-amber-950', sign: 'O despertar. Os primeiros raios de luz sobre o conhecimento técnico e a postura do praticante.' },
    { nome: 'Laranja', kyu: '4º Kyu', cor: 'bg-orange-500 text-white', sign: 'Estabilidade e postura. A consolidação das bases (dachi), do equilíbrio e do respeito no dojo.' },
    { nome: 'Verde Estágio', kyu: '3º Kyu', cor: 'bg-emerald-400 text-emerald-950', sign: 'O broto. Etapa de transição dentro do 3º Kyu, em que o karateca amadurece a técnica antes da faixa verde plena.' },
    { nome: 'Verde', kyu: '3º Kyu', cor: 'bg-emerald-600 text-white', sign: 'Crescimento e maturidade. O karateca floresce técnica e mentalmente, refinando kata e kumite.' },
    { nome: 'Roxa', kyu: '2º Kyu', cor: 'bg-purple-700 text-white', sign: 'Profundidade e transição. Transição para o nível avançado da arte marcial com maior consciência corporal.' },
    { nome: 'Marrom', kyu: '1º Kyu', cor: 'bg-[#5c3a21] text-white', sign: 'A terra e a solidez. Preparação final, respeito exemplar e refinamento técnico para a Faixa Preta.' },
    faixaPreta,
  ];

  const faixasGoju: Faixa[] = [
    faixaBranca('7º Kyu'),
    { nome: 'Amarela', kyu: '6º Kyu', cor: 'bg-amber-400 text-amber-950', sign: 'O despertar. Os primeiros raios de luz sobre o conhecimento técnico e a postura do praticante.' },
    { nome: 'Vermelha', kyu: '5º Kyu', cor: 'bg-red-500 text-white', sign: 'A chama e a energia. Desenvolvimento da força, disciplina e determinação nos treinamentos diários.' },
    { nome: 'Laranja', kyu: '4º Kyu', cor: 'bg-orange-500 text-white', sign: 'Estabilidade e postura. A consolidação das bases (dachi), do equilíbrio e do respeito no dojo.' },
    { nome: 'Verde', kyu: '3º Kyu', cor: 'bg-emerald-600 text-white', sign: 'Crescimento e maturidade. O karateca floresce técnica e mentalmente, refinando kata e kumite.' },
    { nome: 'Roxa', kyu: '2º Kyu', cor: 'bg-purple-700 text-white', sign: 'Profundidade e transição. Transição para o nível avançado da arte marcial com maior consciência corporal.' },
    { nome: 'Marrom', kyu: '1º Kyu', cor: 'bg-[#5c3a21] text-white', sign: 'A terra e a solidez. Preparação final, respeito exemplar e refinamento técnico para a Faixa Preta.' },
    faixaPreta,
  ];

  const estilos = [
    {
      id: 1,
      sigla: 'ST',
      nome: 'Shotokan',
      fundador: 'Mestre Gichin Funakoshi',
      origem: 'Tóquio / Okinawa (Japão)',
      caracteristicas: 'Bases longas, fortes e profundas (Zenkutsu-dachi), golpes lineares de alta potência, foco rigoroso na dinâmica de quadril (koshi) e transições explosivas.',
      destaque: 'O estilo mais praticado globalmente',
      corBadge: 'bg-orange-500 text-white',
      imagem: 'https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?auto=format&fit=crop&q=80',
      faixas: faixasShotokan
    },
    {
      id: 2,
      sigla: 'SR',
      nome: 'Shorin-ryu',
      fundador: 'Mestre Choshin Chibana',
      origem: 'Shuri, Okinawa (Japão)',
      caracteristicas: 'Bases naturais, postura ereta, esquivas ágeis (tai-sabaki), contra-ataques velozes e ênfase na fluidez contínua do movimento.',
      destaque: 'Tradição milenar de Okinawa',
      corBadge: 'bg-blue-600 text-white',
      imagem: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80',
      faixas: faixasShorin
    },
    {
      id: 3,
      sigla: 'GR',
      nome: 'Goju-ryu',
      fundador: 'Mestre Chojun Miyagi',
      origem: 'Naha, Okinawa (Japão)',
      caracteristicas: 'Equilíbrio harmônico entre o duro (Go) e o suave (Ju). Combina técnicas circulares de bloqueio, combate em curta distância e respiração profunda com contração (Ibuki).',
      destaque: 'Força e suavidade integradas',
      corBadge: 'bg-emerald-600 text-white',
      imagem: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80',
      faixas: faixasGoju
    }
  ];

  const estiloSelecionado = estilos[estiloAtivo];
  const faixaSelecionada = estiloSelecionado.faixas[faixaAtiva];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative selection:bg-[#ea580c] selection:text-white">
      
      {/* ======================================================== */}
      {/* 1. NAVBAR OFICIAL MODERNA                                */}
      {/* ======================================================== */}
      <nav className="bg-[#1e3a8a]/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-xl border-b-4 border-[#ea580c] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between gap-3 h-20 items-center">
            
            {/* Hambúrguer (mobile) + Logo e Nome */}
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              {/* Botão Mobile */}
              <button
                onClick={() => setMenuMobileAberto(!menuMobileAberto)}
                className="lg:hidden -ml-2 p-2 shrink-0 text-white hover:text-orange-400 rounded-lg focus:outline-none transition-colors"
                aria-label={menuMobileAberto ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuMobileAberto}
              >
                {menuMobileAberto ? <X size={26} /> : <Menu size={26} />}
              </button>

            <a href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 group hover:opacity-95 transition-opacity">
              <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-0.5 border-2 border-white/80 group-hover:scale-105 transition-transform duration-300">
                <img src="/logo.png" alt="Logo LVPK" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="hidden min-[360px]:flex flex-col min-w-0">
                <span className="font-black text-[13px] min-[400px]:text-sm sm:text-base md:text-lg leading-tight uppercase tracking-wide sm:tracking-wider text-white drop-shadow-sm group-hover:text-orange-200 transition-colors">
                  Liga Vale Paraibana
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-blue-200 tracking-wide">
                  de Karatê Esportivo
                </span>
              </div>
            </a>
            </div>

            {/* Menu Central Desktop */}
            <div className="hidden lg:flex items-center space-x-7 text-xs md:text-sm font-bold tracking-wider">
              <a href="/" className="text-blue-100 hover:text-orange-400 transition-colors py-2 relative group">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/institucional" className="text-blue-100 hover:text-orange-400 transition-colors py-2 relative group">
                INSTITUCIONAL
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/karate" className="text-orange-400 py-2 relative group">
                KARATÊ
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"></span>
              </a>
              <a href="/login#custas" className="text-blue-100 hover:text-orange-400 transition-colors py-2 relative group">
                CUSTAS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contato" className="text-blue-100 hover:text-orange-400 transition-colors py-2 relative group">
                CONTATO
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Botão Filie-se */}
            <div className="flex items-center shrink-0">
              <a 
                href="/login" 
                className="btn-shine bg-[#ea580c] text-white px-4 sm:px-5 md:px-6 py-2.5 rounded-full font-extrabold text-xs md:text-sm tracking-wider uppercase whitespace-nowrap shrink-0 transition-all duration-200 shadow-md hover:-translate-y-1 active:translate-y-0 text-center flex items-center gap-2"
              >
                <span>FILIE-SE</span>
                <ChevronRight size={16} className="hidden min-[400px]:block" />
              </a>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {menuMobileAberto && (
          <div className="lg:hidden bg-[#172554] border-t border-blue-900/60 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
            <a 
              href="/" 
              onClick={() => setMenuMobileAberto(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-white hover:bg-white/10 hover:text-orange-400 transition-colors"
            >
              HOME
            </a>
            <a 
              href="/institucional" 
              onClick={() => setMenuMobileAberto(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-white hover:bg-white/10 hover:text-orange-400 transition-colors"
            >
              INSTITUCIONAL
            </a>
            <a 
              href="/karate" 
              onClick={() => setMenuMobileAberto(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-orange-400 bg-white/10"
            >
              KARATÊ
            </a>
            <a 
              href="/login#custas" 
              onClick={() => setMenuMobileAberto(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-white hover:bg-white/10 hover:text-orange-400 transition-colors"
            >
              CUSTAS
            </a>
            <a 
              href="#contato" 
              onClick={() => setMenuMobileAberto(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-white hover:bg-white/10 hover:text-orange-400 transition-colors"
            >
              CONTATO
            </a>
          </div>
        )}
      </nav>

      {/* ======================================================== */}
      {/* 2. HERO SECTION COM LUZES AMBIENTES E KEN BURNS          */}
      {/* ======================================================== */}
      <header className="relative bg-gradient-to-br from-[#0a1128] via-[#101f42] to-[#1e3a8a] text-white pt-16 pb-24 md:pb-28 overflow-hidden border-b-8 border-[#ea580c]">
        {/* Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute -bottom-10 right-1/4 w-[28rem] h-[28rem] bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>

        {/* Fundo animado Ken Burns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/85 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?auto=format&fit=crop&q=80" 
            alt="Arte do Karatê" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen animate-kenburns"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Badge com Ping */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 border border-orange-500/30 shadow-lg animate-float-slow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <Users size={16} className="text-orange-400" />
            <span>A FORÇA TÉCNICA DA LVPK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-md">
            Diversidade de Estilos no <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Vale do Paraíba</span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-blue-100 font-normal leading-relaxed">
            A Liga Vale Paraibana de Karatê acolhe escolas tradicionais de Karatê-Do, valorizando a linhagem, a essência técnica e o legado transmitido pelos grandes mestres fundadores.
          </p>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 3. ESTILOS DE KARATÊ (Cards 3D Modernos)                  */}
      {/* ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase text-[#ea580c] tracking-widest block mb-2">
              LINHAGENS RECONHECIDAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight mb-3">
              Escolas Tradicionais Integradas
            </h2>
            <div className="w-16 h-1.5 bg-[#ea580c] rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Até o momento, a LVPK abriga orgulhosamente as seguintes escolas de Karatê-Do com corpo docente credenciado:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* Menu lateral de estilos */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 self-start">
              <span className="hidden lg:block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 px-1">
                Selecione o estilo
              </span>
              <div role="tablist" aria-label="Estilos de Karatê" className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-3">
                {estilos.map((estilo, idx) => {
                  const ativo = estiloAtivo === idx;
                  return (
                    <button
                      key={estilo.id}
                      role="tab"
                      aria-selected={ativo}
                      onClick={() => selecionarEstilo(idx)}
                      className={`group flex flex-col lg:flex-row items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-2xl border text-center lg:text-left transition-all cursor-pointer ${
                        ativo
                          ? 'bg-[#1e3a8a] border-[#1e3a8a] text-white shadow-lg lg:translate-x-1'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-orange-400 hover:bg-orange-50/50'
                      }`}
                    >
                      <span
                        className={`w-11 h-11 lg:w-12 lg:h-12 shrink-0 rounded-xl font-black text-base lg:text-lg flex items-center justify-center transition-colors ${
                          ativo ? 'bg-[#ea580c] text-white' : 'bg-gradient-to-br from-[#1e3a8a] to-blue-900 text-white'
                        }`}
                      >
                        {estilo.sigla}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-black text-sm lg:text-lg leading-tight">{estilo.nome}</span>
                        <span className={`hidden lg:block text-xs mt-0.5 ${ativo ? 'text-blue-200' : 'text-slate-500'}`}>
                          {estilo.destaque}
                        </span>
                      </span>
                      <ChevronRight
                        size={18}
                        className={`hidden lg:block shrink-0 transition-transform ${
                          ativo ? 'text-orange-400 translate-x-0.5' : 'text-slate-300 group-hover:text-orange-500'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Painel do estilo selecionado: descrição + faixas */}
            <div
              key={estiloSelecionado.id}
              role="tabpanel"
              className="lg:col-span-8 xl:col-span-9 rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-fade-in"
            >
              {/* Descrição do estilo */}
              <div className="p-6 sm:p-8 bg-white">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-3xl font-black text-slate-900">{estiloSelecionado.nome}</h3>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs ${estiloSelecionado.corBadge}`}>
                    {estiloSelecionado.destaque}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-4">
                  {estiloSelecionado.fundador} • {estiloSelecionado.origem}
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {estiloSelecionado.caracteristicas}
                </p>
              </div>

              {/* Sistema de graduação */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white border-t-4 border-[#ea580c] overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[20rem] bg-orange-600/10 blur-[100px] pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border border-orange-500/30 mb-3">
                      <Award size={14} /> Sistema de Graduação
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black tracking-tight mb-1">
                      A Trilha da Evolução no {estiloSelecionado.nome}
                    </h4>
                    <p className="text-slate-300 text-sm font-light">
                      Clique nas faixas para entender os significados.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                    {estiloSelecionado.faixas.map((faixa, index) => (
                      <button
                        key={`${faixa.nome}-${faixa.kyu}`}
                        onClick={() => setFaixaAtiva(index)}
                        className={`py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-md text-center ${
                          faixaAtiva === index
                            ? 'ring-4 ring-orange-500 scale-105 z-10'
                            : 'opacity-85 hover:opacity-100 hover:scale-102'
                        } ${faixa.cor}`}
                      >
                        <span>{faixa.nome}</span>
                        <span className="text-[10px] font-mono opacity-80">{faixa.kyu}</span>
                      </button>
                    ))}
                  </div>

                  <div
                    key={faixaAtiva}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 text-center animate-fade-in"
                  >
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">
                      Significado • {faixaSelecionada.kyu}
                    </span>
                    <h5 className="text-2xl font-black text-white mb-2">
                      Faixa {faixaSelecionada.nome}
                    </h5>
                    <p className="text-slate-200 text-base leading-relaxed font-light">
                      &ldquo;{faixaSelecionada.sign}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. OS TRÊS PILARES DO TREINAMENTO MARCIAL                 */}
      {/* ======================================================== */}
      <section className="py-20 bg-gradient-to-br from-[#101f42] via-[#1e3a8a] to-[#101f42] text-white relative overflow-hidden border-y-4 border-[#ea580c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase text-orange-400 tracking-widest block mb-2">
              METODOLOGIA MARCIAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Os Três Pilares: Kihon, Kata e Kumite
            </h2>
            <p className="text-blue-200 text-sm sm:text-base font-light">
              A base pedagógica e técnica exigida em todos os exames de graduação chancelados pela LVPK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Kihon */}
            <div className="glass-dark rounded-3xl p-8 border border-white/15 shadow-xl text-center hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-[#ea580c] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Flame size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3 text-white">KIHON (Fundamentos)</h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-light">
                A repetição incansável das bases, socos, chutes e defesas. É a raiz que constrói a memória muscular, o foco mental e a precisão biomecânica do karateca.
              </p>
            </div>

            {/* Kata */}
            <div className="glass-dark rounded-3xl p-8 border border-white/15 shadow-xl text-center hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-[#ea580c] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3 text-white">KATA (Formas)</h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-light">
                Sequências coreografadas de combate contra adversários imaginários. Preservam a sabedoria ancestral da arte marcial e suas aplicações práticas de autodefesa (Bunkai).
              </p>
            </div>

            {/* Kumite */}
            <div className="glass-dark rounded-3xl p-8 border border-white/15 shadow-xl text-center hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-[#ea580c] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3 text-white">KUMITE (Combate)</h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-light">
                A aplicação viva da técnica com um oponente real. Desenvolve tempo de reação (tai-sabaki), distância segura (ma-ai), autocontrole e respeito mútuo sem violência.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. CHAMADA PARA FILIAÇÃO DE ACADEMIAS                    */}
      {/* ======================================================== */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-black uppercase text-slate-500 tracking-wider block">
            CREDENCIAMENTO REGIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
            Seu Dojo pratica um desses estilos?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Filie sua academia à LVPK para validar a graduação de seus alunos, obter certificados oficiais chancelados e fortalecer o Karatê do Vale.
          </p>
          <div className="pt-2">
            <a 
              href="/login" 
              className="btn-shine inline-flex items-center gap-3 bg-[#ea580c] text-white px-8 py-4 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:-translate-y-1 active:translate-y-0"
            >
              <span>INICIAR FILIAÇÃO DA SUA ACADEMIA</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FOOTER OFICIAL (id="contato")                         */}
      {/* ======================================================== */}
      <footer id="contato" className="bg-[#0f172a] text-slate-300 py-16 border-t-4 border-[#ea580c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card Contato */}
          <div className="bg-[#1e293b] p-6 rounded-2xl border border-[#334155] shadow-lg md:col-span-1">
            <h4 className="text-white font-black text-xl mb-4 flex items-center gap-2">
              <Phone className="text-[#ea580c]" size={22} /> Entre em contato
            </h4>
            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold block mb-1">Telefone / WhatsApp</span>
                <a href="tel:12997114365" className="text-white hover:text-orange-400 font-bold text-lg transition-colors">
                  (12) 99711-4365
                </a>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold block mb-1">E-mail Oficial</span>
                <a href="mailto:ligavaleparaibanadekarate@gmail.com" className="text-blue-300 hover:text-white text-sm font-medium transition-colors break-all">
                  ligavaleparaibanadekarate@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <a 
                  href="/login" 
                  className="btn-shine w-full text-center block bg-[#ea580c] hover:bg-[#c2410c] text-white py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  Filie seu Dojo
                </a>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider flex items-center gap-2">
              <Clock size={16} className="text-[#ea580c]" /> Horário de Atendimento
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-bold text-white">Segunda a sexta-feira</p>
                <p className="text-slate-400">9h às 18h</p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-white">Sábado</p>
                <p className="text-slate-400">9h às 13h</p>
              </div>
            </div>
          </div>

          {/* Redes e Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">
              Redes Sociais
            </h4>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.instagram.com/lvpk2026/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-[#1e293b] hover:bg-[#ea580c] text-white flex items-center justify-center transition-all border border-[#334155] hover:scale-110 shadow-sm"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>

            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Links Rápidos</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="/login#custas" className="hover:text-white transition-colors">Tabela de Custas 2026</a></li>
              <li><a href="/login#documentos" className="hover:text-white transition-colors">Documentos para Filiação</a></li>
              <li><a href="/institucional" className="hover:text-white transition-colors">História da LVPK</a></li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="text-[11px] text-slate-500 block">PIX Oficial da Liga:</span>
              <span className="text-xs text-slate-300 font-bold italic">Em Breve...</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Liga Vale Paraibana de Karatê (LVPK). Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="/login" className="text-orange-400 hover:text-white font-bold transition-colors">
              Filiar-se à LVPK
            </a>
          </div>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 7. BOTÃO FLUTUANTE DE VOLTAR AO TOPO                     */}
      {/* ======================================================== */}
      {mostrarVoltarTopo && (
        <button
          onClick={voltarAoTopo}
          className="fixed bottom-6 right-6 z-40 bg-[#ea580c] text-white p-3 rounded-full shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-200 border-2 border-white/40 animate-fade-in"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
