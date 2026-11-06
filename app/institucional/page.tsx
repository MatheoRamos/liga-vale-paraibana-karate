"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Eye, 
  Shield, 
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
  HeartHandshake, 
  Flame,
  CheckCircle2
} from 'lucide-react';

export default function Institucional() {
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [mostrarVoltarTopo, setMostrarVoltarTopo] = useState(false);

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

  const diretoria = [
    {
      id: 1,
      nome: 'Sensei Daniel Rabelo',
      cargo: 'Presidente',
      faixa: 'Faixa Preta 3º Dan',
      tempo: 'Presidência e Gestão Geral da Liga Vale Paraibana de Karatê',
      foto: '/diretoria/daniel-rabelo.jpg'
    },
    {
      id: 2,
      nome: 'Sensei Nathan Menezes',
      cargo: 'Vice-Presidente',
      faixa: 'Faixa Preta 2º Dan',
      tempo: 'Vice-Presidência e Coordenação Executiva da LVPK',
      foto: '/diretoria/nathan-menezes.jpg'
    }
  ];

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
              <a href="/institucional" className="text-orange-400 py-2 relative group">
                INSTITUCIONAL
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400"></span>
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
              href="/institucional" 
              onClick={() => setMenuMobileAberto(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-orange-400 bg-white/10"
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
      {/* 2. HERO SECTION COM LUZES AMBIENTES E KEN BURNS          */}
      {/* ======================================================== */}
      <header className="relative bg-gradient-to-br from-[#0a1128] via-[#101f42] to-[#1e3a8a] text-white pt-16 pb-24 md:pb-28 overflow-hidden border-b-8 border-[#ea580c]">
        {/* Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute -bottom-10 right-1/4 w-[28rem] h-[28rem] bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>

        {/* Fundo com efeito Ken Burns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/85 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
            alt="Atletas de Karatê" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen animate-kenburns"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Badge Interativo com Ping */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 border border-orange-500/30 shadow-lg animate-float-slow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <Users size={16} className="text-orange-400" />
            <span>SOBRE A NOSSA FEDERAÇÃO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-md">
            Fortalecendo o Karatê no <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Vale do Paraíba</span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-blue-100 font-normal leading-relaxed">
            Uma instituição dedicada ao fomento, organização e padronização do Karatê, unindo mestres, dojos e atletas em torno da honra, disciplina e evolução marcial contínua.
          </p>
        </div>
      </header>

      {/* ======================================================== */}
      {/* 3. HISTÓRIA E QUEM SOMOS                                 */}
      {/* ======================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
                  alt="Treino de Karatê" 
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-orange-400 font-mono text-xs uppercase tracking-widest block mb-1">
                    Tradição Marcial
                  </span>
                  <p className="font-bold text-lg leading-snug">
                    União técnica de escolas tradicionais de Karatê do interior paulista
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#ea580c] tracking-wider">
                <Flame size={14} /> ORIGEM & PROPÓSITO
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight">
                Nossa História & Compromisso
              </h2>
              <div className="w-20 h-1.5 bg-[#ea580c] rounded-full"></div>
              
              <div className="text-slate-600 space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  A <strong>Liga Vale Paraibana de Karatê (LVPK)</strong> nasceu da união de professores e mestres apaixonados pela arte marcial, com o propósito de criar uma entidade forte, transparente e focada no desenvolvimento técnico e humano de seus praticantes.
                </p>
                <p>
                  Atuamos ativamente em municípios de todo o Vale do Paraíba, homologando graduações padronizadas, emitindo certificados oficiais de Kyu e Dan, e oferecendo capacitação contínua para técnicos e árbitros.
                </p>
                <p>
                  Mais do que formar campeões, nossa missão é preservar o <em>Dojo Kun</em> (lemas do Karatê), formando cidadãos íntegros pautados no respeito, esforço e autocontrole dentro e fora do dojo.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href="/login" 
                  className="btn-shine inline-flex items-center gap-3 bg-[#ea580c] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:-translate-y-1 active:translate-y-0"
                >
                  <span>SEJA UM DOJO FILIADO</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. MISSÃO, VISÃO E VALORES (Cards 3D)                     */}
      {/* ======================================================== */}
      <section className="py-20 bg-gradient-to-br from-[#101f42] via-[#1e3a8a] to-[#101f42] text-white relative overflow-hidden border-y-4 border-[#ea580c]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-orange-600/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase text-orange-400 tracking-widest block mb-2">
              NOSSOS PILARES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
              A Essência que Conduz a LVPK
            </h2>
            <p className="text-blue-200 text-sm sm:text-base font-light">
              Os princípios que guiam todas as decisões técnicas, regulamentares e institucionais da nossa Liga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Missão */}
            <div className="glass-dark rounded-3xl p-8 border border-white/15 shadow-xl text-center hover:-translate-y-2.5 transition-all duration-300 group">
              <div className="w-18 h-18 bg-gradient-to-br from-[#ea580c] to-[#c2410c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                <Target size={34} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-white">Missão</h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-light">
                Promover, organizar e desenvolver o Karatê em toda a região do Vale do Paraíba, oferecendo suporte de excelência aos Dojos filiados e assegurando critérios técnicos e éticos de alta qualidade.
              </p>
            </div>

            {/* Visão */}
            <div className="glass-dark rounded-3xl p-8 border border-white/15 shadow-xl text-center hover:-translate-y-2.5 transition-all duration-300 group">
              <div className="w-18 h-18 bg-gradient-to-br from-[#ea580c] to-[#c2410c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                <Eye size={34} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-white">Visão</h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-light">
                Ser reconhecida como a principal e mais respeitada liga de Karatê do interior paulista, sendo referência em gestão transparente, capacitação técnica e valorização das raízes marciais.
              </p>
            </div>

            {/* Valores */}
            <div className="glass-dark rounded-3xl p-8 border border-white/15 shadow-xl text-center hover:-translate-y-2.5 transition-all duration-300 group">
              <div className="w-18 h-18 bg-gradient-to-br from-[#ea580c] to-[#c2410c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
                <Shield size={34} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-white">Valores</h3>
              <ul className="text-blue-100 space-y-2.5 text-left text-sm sm:text-base font-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>Esforçar-se para a formação do caráter</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>Fidelidade para com o verdadeiro caminho da razão</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>Criar o intuito de esforço contínuo</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>Respeito e cortesia acima de tudo</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>Conter o espírito de agressão</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. DIRETORIA EXECUTIVA (Cards com Efeito Hover)          */}
      {/* ======================================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase text-[#ea580c] tracking-widest block mb-2">
              LIDERANÇA & MESTRES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight mb-3">
              Diretoria Executiva
            </h2>
            <div className="w-16 h-1.5 bg-[#ea580c] rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600 text-sm sm:text-base">
              Conheça os mestres responsáveis pela gestão técnica, administrativa e ética da LVPK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {diretoria.map((diretor) => (
              <div 
                key={diretor.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="h-80 sm:h-96 relative overflow-hidden bg-slate-900">
                  <img 
                    src={diretor.foto} 
                    alt={diretor.nome} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider mb-2 shadow-md">
                      <Award size={14} /> {diretor.faixa}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">{diretor.nome}</h3>
                    <p className="text-orange-300 font-bold text-sm uppercase tracking-wider">{diretor.cargo}</p>
                  </div>
                </div>

                <div className="p-6 text-center bg-white border-t border-slate-100">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {diretor.tempo}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. CHAMADA PARA FILIAÇÃO (Banner Vibrante)               */}
      {/* ======================================================== */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-[#ea580c] to-orange-600 text-white relative overflow-hidden shadow-xl">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-5">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-widest backdrop-blur-xs">
            CRESCIMENTO CONJUNTO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight drop-shadow-sm">
            Faça parte da nossa história
          </h2>
          <p className="text-orange-100 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Traga o seu Dojo para a Liga Vale Paraibana de Karatê e proporcione reconhecimento oficial e oportunidades reais para os seus alunos.
          </p>
          <div className="pt-2">
            <a 
              href="/login" 
              className="btn-shine inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#1e3a8a] px-9 py-4 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <span>INICIAR PROCESSO DE FILIAÇÃO</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. FOOTER OFICIAL (id="contato")                         */}
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
              <li><a href="/karate" className="hover:text-white transition-colors">Estilos de Karatê</a></li>
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
      {/* 8. BOTÃO FLUTUANTE DE VOLTAR AO TOPO                     */}
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
