"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Trophy, 
  Shield, 
  Users, 
  MapPin, 
  Sparkles, 
  ChevronRight, 
  Clock, 
  Menu, 
  X, 
  CheckCircle2, 
  Award, 
  Flame, 
  ArrowUp,
  FileText,
  DollarSign,
  GraduationCap,
  Building
} from 'lucide-react';

export default function App() {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [faixaAtiva, setFaixaAtiva] = useState(0);
  const [mostrarVoltarTopo, setMostrarVoltarTopo] = useState(false);

  // Efeito para monitorar rolagem (para botão de voltar ao topo)
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

  // Trilha de Faixas
  const faixasKarate = [
    { nome: 'Branca', kyu: '7º Kyu', cor: 'bg-slate-100 border-slate-300 text-slate-800', sign: 'Pureza e início da jornada. A mente vazia pronta para absorver os fundamentos e valores do Karatê.' },
    { nome: 'Amarela', kyu: '6º Kyu', cor: 'bg-amber-400 text-amber-950', sign: 'O despertar. Os primeiros raios de luz sobre o conhecimento técnico e a postura do praticante.' },
    { nome: 'Vermelha', kyu: '5º Kyu', cor: 'bg-red-500 text-white', sign: 'A chama e a energia. Desenvolvimento da força, disciplina e determinação nos treinamentos diários.' },
    { nome: 'Laranja', kyu: '4º Kyu', cor: 'bg-orange-500 text-white', sign: 'Estabilidade e postura. A consolidação das bases (dachi), do equilíbrio e do respeito no dojo.' },
    { nome: 'Verde', kyu: '3º Kyu', cor: 'bg-emerald-600 text-white', sign: 'Crescimento e maturidade. O karateca floresce técnica e mentalmente, refinando kata e kumite.' },
    { nome: 'Roxa', kyu: '2º Kyu', cor: 'bg-purple-700 text-white', sign: 'Profundidade e transição. Transição para o nível avançado da arte marcial com maior consciência corporal.' },
    { nome: 'Marrom', kyu: '1º Kyu', cor: 'bg-[#5c3a21] text-white', sign: 'A terra e a solidez. Preparação final, respeito exemplar e refinamento técnico para a Faixa Preta.' },
    { nome: 'Preta', kyu: '1º Dan em diante', cor: 'bg-black text-amber-400 border border-amber-500/50', sign: 'O recomeço. A união de técnica, espírito, liderança e maestria com compromisso vitalício à arte.' }
  ];

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative selection:bg-[#ea580c] selection:text-white">
      
      {/* ======================================================== */}
      {/* 1. NAVBAR OFICIAL MODERNA (Sem eventos, com CUSTAS/CONTATO)*/}
      {/* ======================================================== */}
      <nav className="bg-[#1e3a8a]/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-xl border-b-4 border-[#ea580c] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo e Nome */}
            <a href="/" className="flex items-center gap-3 md:gap-4 group hover:opacity-95 transition-opacity">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-0.5 border-2 border-white/80 group-hover:scale-105 transition-transform duration-300">
                <img src="/logo.png" alt="Logo LVPK" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-base md:text-lg leading-tight uppercase tracking-wider text-white drop-shadow-sm group-hover:text-orange-200 transition-colors">
                  Liga Vale Paraibana
                </span>
                <span className="text-xs md:text-sm font-medium text-blue-200 tracking-wide">
                  de Karatê Tradicional
                </span>
              </div>
            </a>

            {/* Menu Central Desktop */}
            <div className="hidden lg:flex items-center space-x-7 text-xs md:text-sm font-bold tracking-wider">
              <a href="/institucional" className="text-blue-100 hover:text-orange-400 transition-colors py-2 relative group">
                INSTITUCIONAL
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/karate" className="text-blue-100 hover:text-orange-400 transition-colors py-2 relative group">
                KARATÊ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
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

            {/* Botão Filie-se Desktop & Botão Hamburguer Mobile */}
            <div className="flex items-center gap-3">
              <a 
                href="/login" 
                className="btn-shine bg-gradient-to-r from-[#ea580c] to-[#c2410c] hover:from-[#c2410c] hover:to-[#9a3412] text-white px-5 md:px-6 py-2.5 rounded-full font-extrabold text-xs md:text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-orange-500/30 hover:scale-105 active:scale-95 text-center flex items-center gap-2"
              >
                <span>FILIE-SE</span>
                <ChevronRight size={16} />
              </a>

              {/* Botão Mobile */}
              <button
                onClick={() => setMenuMobileAberto(!menuMobileAberto)}
                className="lg:hidden p-2 text-white hover:text-orange-400 rounded-lg focus:outline-none transition-colors"
                aria-label="Abrir menu"
              >
                {menuMobileAberto ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown com Animação */}
        {menuMobileAberto && (
          <div className="lg:hidden bg-[#172554] border-t border-blue-900/60 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
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
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-white hover:bg-white/10 hover:text-orange-400 transition-colors"
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
      {/* 2. HERO SECTION COM LUZES AMBIENTES E ANIMAÇÕES          */}
      {/* ======================================================== */}
      <section className="relative bg-gradient-to-br from-[#0a1128] via-[#101f42] to-[#1e3a8a] text-white pt-20 pb-36 md:pb-40 overflow-hidden border-b-8 border-[#ea580c]">
        
        {/* Luzes dinâmicas de fundo (Glow Orbs) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute -bottom-10 right-1/4 w-[32rem] h-[32rem] bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Imagem de Fundo com Efeito Ken Burns Suave */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/85 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
            alt="Atletas de Karatê" 
            className="w-full h-full object-cover opacity-25 grayscale mix-blend-screen animate-kenburns"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Badge Interativo com Ping */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 border border-orange-500/30 shadow-lg animate-float-slow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <Sparkles size={16} className="text-orange-400" />
              <span>Entidade Oficial de Karatê Tradicional • Vale do Paraíba</span>
            </div>

            {/* Título com Destaque e Efeito */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-md">
              Fortaleça o Karatê e eleve o nível técnico do seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Dojô no Vale</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-9 font-normal leading-relaxed max-w-2xl">
              Compromisso com formação humana, reconhecimento oficial de graduações (Kyu e Dan), 
              suporte institucional para mestres e união dos karatecas do Vale do Paraíba.
            </p>

            {/* Ações / Botões Principais */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="/login" 
                className="btn-shine bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 rounded-full font-black text-sm md:text-base tracking-wider uppercase flex items-center gap-3 transition-all shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 active:translate-y-0"
              >
                <span>FILIE-SE À LIGA</span>
                <ArrowRight size={20} />
              </a>

              <a 
                href="/institucional" 
                className="glass-dark hover:bg-white/10 text-white border border-white/30 px-7 py-4 rounded-full font-bold text-sm md:text-base tracking-wider uppercase flex items-center gap-2.5 transition-all hover:-translate-y-1"
              >
                <Shield size={18} className="text-orange-400" />
                <span>CONHEÇA A LVPK</span>
              </a>
            </div>

            {/* Mini Bar de Estatísticas Oficiais */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-blue-900/60">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-orange-400">25+</span>
                <span className="text-xs text-blue-200 uppercase font-semibold">Dojos Filiados</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white">1.200+</span>
                <span className="text-xs text-blue-200 uppercase font-semibold">Atletas Ativos</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-sky-400">15</span>
                <span className="text-xs text-blue-200 uppercase font-semibold">Cidades do Vale</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">100%</span>
                <span className="text-xs text-blue-200 uppercase font-semibold">Oficial & Reconhecido</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CARDS DE AÇÃO RÁPIDA (Flutuantes com Hover 3D)        */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20 relative z-30 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Reconhecimento e Graduação Oficial */}
          <a 
            href="/karate" 
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-blue-300"
          >
            <div className="h-36 bg-blue-900 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
                alt="Graduação" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent"></div>
              <span className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-xs text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-blue-400/30">
                PADRÃO TÉCNICO
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#1e3a8a] mb-2 font-black text-xl group-hover:text-orange-600 transition-colors">
                  <GraduationCap size={22} className="text-[#ea580c]" />
                  <h3>Graduação & Diplomas</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Emissão de certificados de Kyu e homologação de Dan Faixa Preta registrados de acordo com as normas oficiais.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-black text-[#1e3a8a] group-hover:text-[#ea580c] uppercase tracking-wider transition-colors">
                CONHEÇA A FILOSOFIA <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </a>

          {/* Card 2: Filiação e Vantagens */}
          <a 
            href="/login" 
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-orange-300"
          >
            <div className="h-36 bg-orange-950 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?auto=format&fit=crop&q=80" 
                alt="Faixa de Karate" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-orange-950/50 to-transparent"></div>
              <span className="absolute top-3 right-3 bg-[#ea580c] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                FILIAÇÃO OFICIAL
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#ea580c] mb-2 font-black text-xl group-hover:text-[#c2410c] transition-colors">
                  <Award size={22} className="text-[#ea580c]" />
                  <h3>Filie-se à Liga</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Cadastre sua academia ou dojo e garanta a homologação oficial de faixas e suporte técnico da LVPK.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-black text-[#ea580c] group-hover:text-[#c2410c] uppercase tracking-wider transition-colors">
                VER VANTAGENS & REGRAS <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </a>

          {/* Card 3: Regimento de Custas */}
          <a 
            href="/login#custas" 
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300"
          >
            <div className="h-36 bg-slate-900 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80" 
                alt="Treinamento" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                TRANSPARÊNCIA
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-900 mb-2 font-black text-xl group-hover:text-emerald-600 transition-colors">
                  <DollarSign size={22} className="text-emerald-600" />
                  <h3>Regimento de Custas</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Consulte a tabela oficial de taxas de graduação, carteirinhas, transferências e anuidades.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-black text-slate-900 group-hover:text-emerald-600 uppercase tracking-wider transition-colors">
                CONSULTAR TABELA DE CUSTAS <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </a>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. INTERATIVO: TRILHA DAS FAIXAS & GRADUAÇÕES OFICIAIS   */}
      {/* ======================================================== */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 border-y-4 border-[#ea580c] relative overflow-hidden">
        
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-orange-600/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-orange-500/30 mb-3">
              <Award size={15} /> SISTEMA OFICIAL DE GRADUAÇÃO
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              A Trilha da Evolução no Karatê
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Na LVPK, cada faixa representa não apenas habilidade física, mas crescimento moral, 
              humildade e dedicação. Clique nas faixas para entender os significados.
            </p>
          </div>

          {/* Faixas em Grid / Botões Interativos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
            {faixasKarate.map((faixa, index) => (
              <button
                key={faixa.nome}
                onClick={() => setFaixaAtiva(index)}
                className={`py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-md ${
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

          {/* Painel de Significado da Faixa Selecionada */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 max-w-3xl mx-auto text-center animate-fade-in shadow-2xl">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">
              Significado Oficial • {faixasKarate[faixaAtiva].kyu}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Faixa {faixasKarate[faixaAtiva].nome}
            </h3>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light mb-6">
              "{faixasKarate[faixaAtiva].sign}"
            </p>
            <a 
              href="/karate" 
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-400 hover:text-white transition-colors"
            >
              Conhecer a Filosofia e História <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. DOJO KUN & VALORES DA TRADIÇÃO                        */}
      {/* ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-slate-900 via-[#101f42] to-[#1e3a8a] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border-2 border-orange-500/30">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-orange-400 text-xs font-black uppercase tracking-widest">
                  FILOSOFIA MARCIAL
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Dojo Kun: Os Cinco Princípios do Karatê
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Mais do que golpes e técnicas de luta, o Karatê-Do é uma ferramenta de aperfeiçoamento 
                  pessoal, respeito ao próximo e formação de caráter para toda a vida.
                </p>
                <div className="pt-2">
                  <a 
                    href="/institucional" 
                    className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                  >
                    CONHEÇA A DIRETORIA LVPK <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {[
                  { num: '1', texto: 'Esforçar-se para a formação do caráter' },
                  { num: '2', texto: 'Fidelidade para com o verdadeiro caminho da razão' },
                  { num: '3', texto: 'Criar o espírito de esforço e perseverança' },
                  { num: '4', texto: 'Respeito e cortesia acima de tudo' },
                  { num: '5', texto: 'Conter o espírito de agressão' }
                ].map((item) => (
                  <div 
                    key={item.num}
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-white/10 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                      {item.num}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-slate-100">
                      {item.texto}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. MUNICÍPIOS ATENDIDOS NO VALE DO PARAÍBA                */}
      {/* ======================================================== */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black uppercase text-slate-500 tracking-wider block mb-2">
            PRESENÇA REGIONAL
          </span>
          <h3 className="text-2xl font-black text-slate-900 mb-6">
            Dojos e Atletas Integrados em Todo o Vale
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {[
              'São José dos Campos',
              'Taubaté',
              'Jacareí',
              'Pindamonhangaba',
              'Guaratinguetá',
              'Caçapava',
              'Lorena',
              'Caraguatatuba',
              'Ubatuba',
              'Cruzeiro',
              'Aparecida',
              'São Sebastião'
            ].map((cidade) => (
              <span 
                key={cidade} 
                className="bg-white px-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 shadow-xs hover:border-[#ea580c] hover:text-[#ea580c] transition-colors"
              >
                📍 {cidade}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. FOOTER OFICIAL (id="contato" Para Scroll Suave)        */}
      {/* ======================================================== */}
      <footer id="contato" className="bg-[#0f172a] text-slate-300 py-16 border-t-4 border-[#ea580c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
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

          {/* Redes e Políticas */}
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
              <li><a href="/institucional" className="hover:text-white transition-colors">Diretoria da Liga</a></li>
            </ul>
          </div>

          {/* Canal de Ética e Informações */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider flex items-center gap-2">
              <Shield size={16} className="text-[#ea580c]" /> Canal de Ética & Conduta
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Canal sigiloso e independente para comunicação de sugestões, condutas e conformidade técnica.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Mail size={16} className="text-[#ea580c]" />
              <span className="font-mono text-xs">etica@lvpk.com.br</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="text-[11px] text-slate-500 block">PIX Oficial da Liga:</span>
              <span className="text-xs font-mono text-slate-300 font-bold select-all">lvpk.karate@gmail.com</span>
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
      {/* 8. BOTÃO FLUTUANTE DE VOLTAR AO TOPO                     */}
      {/* ======================================================== */}
      {mostrarVoltarTopo && (
        <button
          onClick={voltarAoTopo}
          className="fixed bottom-6 right-6 z-40 bg-[#ea580c] hover:bg-[#c2410c] text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border-2 border-white/40 animate-fade-in"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
