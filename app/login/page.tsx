"use client";

import React, { useState, useEffect } from 'react';
import { 
  User, 
  Users, 
  Award, 
  FileText, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Newspaper, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  X, 
  Lock, 
  UploadCloud, 
  AlertCircle, 
  Building,
  ShieldCheck,
  ArrowUp,
  Download,
  Send,
  Menu,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { gerarFichaPdf, formatarData, nomeArquivoFicha, CONTATO_LIGA } from './gerarFichaPdf';

export default function FiliacaoELoginPage() {
  // Aba ativa na seção de documentos: 'individual' | 'academia'
  const [abaDocumentos, setAbaDocumentos] = useState<'individual' | 'academia'>('individual');
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [mostrarVoltarTopo, setMostrarVoltarTopo] = useState(false);

  // Estado dos modais
  const [modalCadastroAberto, setModalCadastroAberto] = useState<'praticante' | 'academia' | null>(null);


  // Estados dos formulários de cadastro
  // cadastroEnviado = ficha já baixada em PDF (mostra a tela de próxima etapa)
  const [cadastroEnviado, setCadastroEnviado] = useState(false);
  const [gerandoPdf, setGerandoPdf] = useState(false);
  const [erroPdf, setErroPdf] = useState(false);
  const [formPraticante, setFormPraticante] = useState({
    tipo: 'filiacao', // 'filiacao' ou 'transferencia'
    nome: '',
    cpf: '',
    rg: '',
    nascimento: '',
    email: '',
    telefone: '',
    dojo: '',
    sensei: '',
    graduacao: 'Faixa Branca (7º Kyu)',
  });

  const [formAcademia, setFormAcademia] = useState({
    nomeAcademia: '',
    cnpjCpf: '',
    senseiResponsavel: '',
    graduacaoDan: '1º Dan (Sho-dan)',
    cidade: '',
    email: '',
    telefone: '',
    quantidadeAlunos: '',
  });

  // Abre o modal de login automaticamente caso a URL venha com parâmetro
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setMostrarVoltarTopo(true);
      } else {
        setMostrarVoltarTopo(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('modo') === 'cadastro') {
        const docElement = document.getElementById('documentos');
        if (docElement) {
          docElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const baixarFichaPraticante = () =>
    gerarFichaPdf({
      titulo: 'Ficha de Cadastro - Praticante / Atleta',
      subtitulo: formPraticante.tipo === 'filiacao'
        ? 'Tipo de solicitação: Nova Filiação (taxa R$ 30,00)'
        : 'Tipo de solicitação: Transferência (taxa R$ 25,00)',
      campos: [
        { rotulo: 'Nome completo do atleta', valor: formPraticante.nome },
        { rotulo: 'CPF', valor: formPraticante.cpf },
        { rotulo: 'RG', valor: formPraticante.rg },
        { rotulo: 'Data de nascimento', valor: formatarData(formPraticante.nascimento) },
        { rotulo: 'WhatsApp / Telefone', valor: formPraticante.telefone },
        { rotulo: 'E-mail', valor: formPraticante.email },
        { rotulo: 'Academia / Dojo filiado', valor: formPraticante.dojo },
        { rotulo: 'Sensei responsável', valor: formPraticante.sensei },
        { rotulo: 'Graduação atual', valor: formPraticante.graduacao },
      ],
      assinaturas: ['Assinatura do atleta (ou responsável legal)', 'Assinatura do Sensei responsável'],
      nomeArquivo: nomeArquivoFicha('ficha-lvpk-praticante', formPraticante.nome),
    });

  const baixarFichaAcademia = () =>
    gerarFichaPdf({
      titulo: 'Ficha de Cadastro - Academia / Dojo',
      subtitulo: 'Tipo de solicitação: Filiação de Academia (taxa R$ 195,00)',
      campos: [
        { rotulo: 'Nome da academia / dojo / clube', valor: formAcademia.nomeAcademia },
        { rotulo: 'CNPJ ou CPF do responsável', valor: formAcademia.cnpjCpf },
        { rotulo: 'Cidade / UF', valor: formAcademia.cidade },
        { rotulo: 'Sensei responsável técnico', valor: formAcademia.senseiResponsavel },
        { rotulo: 'Graduação do Sensei', valor: formAcademia.graduacaoDan },
        { rotulo: 'WhatsApp / Telefone de contato', valor: formAcademia.telefone },
        { rotulo: 'E-mail oficial do dojo', valor: formAcademia.email },
      ],
      assinaturas: ['Assinatura do Sensei / Responsável Técnico'],
      nomeArquivo: nomeArquivoFicha('ficha-lvpk-academia', formAcademia.nomeAcademia),
    });

  const baixarFicha = async () => {
    setErroPdf(false);
    setGerandoPdf(true);
    try {
      if (modalCadastroAberto === 'praticante') await baixarFichaPraticante();
      else await baixarFichaAcademia();
      setCadastroEnviado(true);
    } catch {
      setErroPdf(true);
    } finally {
      setGerandoPdf(false);
    }
  };

  const handleSubmitFicha = (e: React.FormEvent) => {
    e.preventDefault();
    baixarFicha();
  };

  const fecharModalCadastro = () => {
    setModalCadastroAberto(null);
    setCadastroEnviado(false);
    setErroPdf(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#ea580c] selection:text-white">

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
                  de Karatê Tradicional
                </span>
              </div>
            </a>
            </div>

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
              <a href="#custas" className="text-blue-100 hover:text-orange-400 transition-colors py-2 relative group">
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
                href="#documentos" 
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
              href="#custas" 
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
      {/* 2. HERO SECTION COM MARCA D'ÁGUA E CARDS FLUTUANTES       */}
      {/* ======================================================== */}
      <section className="relative bg-gradient-to-br from-[#0a1128] via-[#101f42] to-[#1e3a8a] text-white pt-16 pb-36 md:pb-40 overflow-hidden border-b-8 border-[#ea580c]">
        {/* Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute -bottom-10 right-1/4 w-[32rem] h-[32rem] bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }}></div>

        {/* Marca d'água com imagem suave de karatê animada com Ken Burns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-radial from-transparent via-[#0a1128]/70 to-[#0a1128] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
            alt="Karatê Wallpaper" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen scale-105 animate-kenburns"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Badge de cabeçalho com Ping */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 border border-orange-500/30 shadow-lg animate-float-slow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <Sparkles size={16} className="text-orange-400" />
            <span>FILIE-SE À LIGA VALE PARAIBANA</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 drop-shadow-md">
            Filiação <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">LVPK</span>
          </h1>

          {/* Subtítulo */}
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-blue-100 font-light leading-relaxed">
            A filiação à LVPK permite que praticantes e academias façam parte oficialmente da 
            <strong className="font-semibold text-white"> Liga Vale Paraibana de Karatê</strong>, 
            tendo acesso a certificados homologados, cursos técnicos, graduações reconhecidas e suporte federativo.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. OS 3 CARDS FLUTUANTES (Agenda, Notícias, Filie-se)     */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-28 relative z-30 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Tabela de Custas */}
          <div className="relative bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 text-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between min-h-[220px] transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute right-[-20px] bottom-[-20px] opacity-15 pointer-events-none text-white">
              <DollarSign size={160} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 drop-shadow-sm">
                Tabela de Custas
              </h3>
            </div>
            <div className="relative z-10 pt-4">
              <a 
                href="#custas" 
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs md:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-colors"
              >
                CONSULTAR <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Card 2: Estilos & Tradição */}
          <div className="relative bg-slate-900 text-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between min-h-[220px] transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?auto=format&fit=crop&q=80" 
                alt="Estilos de Karatê" 
                className="w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 drop-shadow-sm">
                Estilos & Tradição
              </h3>
            </div>
            <div className="relative z-10 pt-4">
              <a 
                href="/karate" 
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs md:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-colors"
              >
                CONHEÇA <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Card 3: Filie-se conosco */}
          <div className="relative bg-slate-900 text-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between min-h-[220px] transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80" 
                alt="Filie-se" 
                className="w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 drop-shadow-sm">
                Filie-se conosco
              </h3>
            </div>
            <div className="relative z-10 pt-4">
              <a 
                href="#documentos" 
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs md:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-colors"
              >
                SAIBA MAIS <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. VANTAGENS DE SE FILIAR À LVPK                          */}
      {/* ======================================================== */}
      <section id="vantagens" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Badge da seção */}
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200 mb-4">
            <Users size={16} className="text-[#1e3a8a]" />
            <span>SEJA MEMBRO LVPK</span>
          </div>

          {/* Título da seção */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-12">
            Vantagens de se filiar à LVPK
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Coluna Esquerda: Textos, Botão e Card de Destaque */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Filiar-se à <strong>LVPK – Liga Vale Paraibana de Karatê</strong> é fazer parte de uma 
                comunidade comprometida com a prática séria do Karatê, com respeito às suas raízes, 
                valores e princípios.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Ao se filiar, academias, professores e praticantes passam a integrar oficialmente uma entidade que 
                trabalha para preservar, desenvolver e difundir o Karatê, oferecendo oportunidades 
                de crescimento técnico, participação em eventos e reconhecimento da evolução dentro da arte.
              </p>

              <div>
                <a 
                  href="#documentos" 
                  className="inline-flex items-center gap-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase shadow-md transition-all group"
                >
                  SAIBA COMO SE FILIAR
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={14} />
                  </span>
                </a>
              </div>

              {/* Card Destaque Azul Celeste */}
              <div className="bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white p-7 rounded-2xl shadow-xl mt-8">
                <h3 className="text-xl md:text-2xl font-black mb-4 leading-snug">
                  Mais do que uma filiação, um compromisso com o Karatê
                </h3>
                <div className="space-y-4 text-sm md:text-base text-sky-100 font-light leading-relaxed">
                  <p>
                    O Karatê é um caminho de aprendizado contínuo. Cada treino é uma oportunidade de 
                    evoluir, superar limites e fortalecer o caráter.
                  </p>
                  <p>
                    Ao se filiar à LVPK, você passa a fazer parte de uma organização que acredita no 
                    Karatê como arte, disciplina e filosofia de vida, preservando seus princípios e 
                    transmitindo seus valores às próximas gerações.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Lista de Benefícios */}
            <div className="lg:col-span-7 lg:pl-6">
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-8 border-b pb-3 border-slate-200">
                Entre os principais benefícios da filiação estão:
              </h3>

              <div className="space-y-6">
                
                {/* Benefício 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">
                      Reconhecimento oficial de graduação
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      Participação em exames de faixa (Kyu e Dan) organizados pela liga, garantindo 
                      que sua evolução técnica seja avaliada dentro dos critérios oficiais do Karatê.
                    </p>
                  </div>
                </div>

                {/* Benefício 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">
                      Participação em eventos e competições oficiais
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      Praticantes e academias filiadas podem participar de campeonatos, cursos técnicos, 
                      seminários e estágios promovidos pela LVPK, ampliando a experiência e a integração 
                      entre karatecas.
                    </p>
                  </div>
                </div>

                {/* Benefício 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">
                      Desenvolvimento técnico contínuo
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      A liga promove atividades que incentivam o aprimoramento do Karatê em seus aspectos 
                      técnicos, filosóficos e educacionais.
                    </p>
                  </div>
                </div>

                {/* Benefício 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">
                      Integração com a comunidade do Karatê
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      A filiação fortalece a conexão entre academias, instrutores e praticantes comprometidos 
                      com a mesma filosofia e disciplina.
                    </p>
                  </div>
                </div>

                {/* Benefício 5 */}
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-sm">
                      <Check size={15} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">
                      Valorização do Karatê como caminho de desenvolvimento pessoal
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      Mais do que uma prática física, o Karatê busca desenvolver disciplina, respeito, 
                      autocontrole e perseverança, contribuindo para o crescimento do praticante dentro 
                      e fora do dojo.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. FOTO DE DESTAQUE (Idêntica à página 3 do documento)    */}
      {/* ======================================================== */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
              alt="Atletas em competição oficial de Karatê" 
              className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-3 right-4 bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
              Foto: Arquivo Oficial LVPK
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. DOCUMENTOS NECESSÁRIOS PARA FILIAÇÃO LVPK             */}
      {/* ======================================================== */}
      <section id="documentos" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200 mb-4">
            <FileText size={16} className="text-[#0284c7]" />
            <span>DOCUMENTOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">
            Documentos necessários para filiação LVPK
          </h2>

          {/* Abas Alternadoras (Individual vs Academia) */}
          <div className="flex flex-wrap items-end gap-2 mb-8 border-b border-slate-200">
            <button
              onClick={() => setAbaDocumentos('individual')}
              className={`px-5 py-2.5 rounded-t-lg font-bold text-sm transition-all ${
                abaDocumentos === 'individual'
                  ? 'bg-[#0284c7] text-white shadow-sm'
                  : 'bg-sky-100 text-sky-900 hover:bg-sky-200'
              }`}
            >
              Filiação Individual (praticante/atleta)
            </button>
            <button
              onClick={() => setAbaDocumentos('academia')}
              className={`px-5 py-2.5 rounded-t-lg font-bold text-sm transition-all ${
                abaDocumentos === 'academia'
                  ? 'bg-[#0284c7] text-white shadow-sm'
                  : 'bg-sky-100 text-sky-900 hover:bg-sky-200'
              }`}
            >
              Filiação de Academia
            </button>
          </div>

          {/* CONTEÚDO DA ABA 1: FILIAÇÃO INDIVIDUAL */}
          {abaDocumentos === 'individual' && (
            <div className="space-y-8 animate-fadeIn">
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Filiação Online (praticante/atleta)
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Para se filiar à <strong>LVPK – Liga Vale Paraibana de Karatê</strong>, preencha a ficha de
                  cadastro abaixo e baixe-a em PDF. Em seguida, envie o PDF junto com os documentos solicitados
                  para o e-mail ou WhatsApp da Liga para finalizar o processo de filiação diretamente com a diretoria.
                </p>
              </div>

              <PassosFiliacao />

              {/* Caixa Importante (Estilo da foto da página 4) */}
              <div className="bg-sky-50 border-l-4 border-sky-500 p-5 rounded-r-xl shadow-xs">
                <h4 className="text-sky-800 font-extrabold text-lg mb-2">Importante</h4>
                <div className="bg-[#38bdf8]/20 px-2 py-1 rounded inline-block text-slate-900 font-semibold mb-2 text-sm md:text-base">
                  Somente podem se filiar à LVPK praticantes que estejam vinculados a uma academia filiada à Liga. 
                  Não são aceitas filiações individuais de atletas ou praticantes.
                </div>
                <p className="text-slate-600 text-sm mt-1">
                  Em caso de dúvidas antes de realizar sua filiação, entre em contato com a LVPK.
                </p>
              </div>

              {/* Botão Ficha de Cadastro */}
              <div>
                <button
                  onClick={() => {
                    setCadastroEnviado(false);
                    setModalCadastroAberto('praticante');
                  }}
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-extrabold text-sm md:text-base uppercase tracking-wider px-7 py-3 rounded-md shadow-md transition-all active:scale-95"
                >
                  PREENCHER FICHA DE CADASTRO - PRATICANTE
                </button>
                <p className="text-slate-500 text-sm mt-3">
                  A ficha serve para agilizar o seu atendimento. O pagamento da taxa e a conferência dos documentos
                  são tratados diretamente com a diretoria após o envio.
                </p>
              </div>

              {/* Documentos para Filiação */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-[#0284c7] mb-3">
                  Documentos necessários para FILIAÇÃO
                </h4>
                <ul className="space-y-2 text-slate-700 text-base list-disc list-inside">
                  <li>Foto 3×4 recente (digitalizada);</li>
                  <li>Documento de identidade (RG);</li>
                  <li>Cópia do último certificado de graduação (Kyu), caso o praticante não seja faixa branca;</li>
                  <li>Comprovante de pagamento da taxa de filiação no valor de <strong>R$ 30,00</strong>.</li>
                </ul>
              </div>

              {/* Documentos para Transferência */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-[#0284c7] mb-3">
                  Documentos necessários para TRANSFERÊNCIA
                </h4>
                <ul className="space-y-2 text-slate-700 text-base list-disc list-inside">
                  <li>Foto 3×4 recente (digitalizada);</li>
                  <li>Documento de identidade (RG);</li>
                  <li>Carteirinha da LVPK (ou entidade anterior);</li>
                  <li>Comprovante de pagamento da taxa de transferência no valor de <strong>R$ 25,00</strong>.</li>
                </ul>
              </div>

              {/* Forma de Pagamento */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="text-lg md:text-xl font-bold text-[#0284c7] mb-3">
                  Forma de pagamento
                </h4>
                <p className="text-slate-600 text-sm md:text-base mb-4">
                  O pagamento pode ser realizado por transferência bancária ou PIX:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-800">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Transferência Bancária</span>
                    <p className="font-bold text-base text-[#1e3a8a]">Dados bancários</p>
                    <p className="text-sm text-slate-600 italic">Em Breve...</p>
                    <p className="text-sm text-slate-600"><strong>Titular:</strong> Liga Vale Paraibana de Karatê</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Pagamento Instantâneo</span>
                    <p className="font-bold text-base text-[#1e3a8a]">PIX Oficial</p>
                    <p className="text-sm text-slate-600 italic">Em Breve...</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* CONTEÚDO DA ABA 2: FILIAÇÃO DE ACADEMIA */}
          {abaDocumentos === 'academia' && (
            <div className="space-y-8 animate-fadeIn">
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Filiação de Academias, Dojos e Associações
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Para filiar seu dojo ou clube à <strong>LVPK – Liga Vale Paraibana de Karatê</strong>,
                  o responsável técnico deve preencher a ficha cadastral abaixo e baixá-la em PDF. Em seguida,
                  envie o PDF junto com a documentação exigida para o e-mail ou WhatsApp da Liga para finalizar
                  o processo de filiação diretamente com a diretoria.
                </p>
              </div>

              <PassosFiliacao />

              {/* Caixa Importante Academia */}
              <div className="bg-sky-50 border-l-4 border-sky-500 p-5 rounded-r-xl shadow-xs">
                <h4 className="text-sky-800 font-extrabold text-lg mb-2">Importante para Dojos e Entidades</h4>
                <div className="bg-[#38bdf8]/20 px-2 py-1 rounded inline-block text-slate-900 font-semibold mb-2 text-sm md:text-base">
                  A academia deve contar com um Sensei / Responsável Técnico devidamente graduado e reconhecido (Faixa Preta - Dan).
                </div>
                <p className="text-slate-600 text-sm mt-1">
                  A filiação garante direito a homologação de graus, participação em campeonatos oficiais e descontos federativos.
                </p>
              </div>

              {/* Botão Ficha de Cadastro Academia */}
              <div>
                <button
                  onClick={() => {
                    setCadastroEnviado(false);
                    setModalCadastroAberto('academia');
                  }}
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-extrabold text-sm md:text-base uppercase tracking-wider px-7 py-3 rounded-md shadow-md transition-all active:scale-95"
                >
                  PREENCHER FICHA DE CADASTRO - ACADEMIA
                </button>
                <p className="text-slate-500 text-sm mt-3">
                  A ficha serve para agilizar o seu atendimento. O pagamento da taxa e a conferência da documentação
                  são tratados diretamente com a diretoria após o envio.
                </p>
              </div>

              {/* Documentos para Filiação de Academia */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-[#0284c7] mb-3">
                  Documentos necessários para FILIAÇÃO DE ACADEMIA
                </h4>
                <ul className="space-y-2 text-slate-700 text-base list-disc list-inside">
                  <li>Ficha cadastral institucional da academia preenchida e assinada pelo Responsável Técnico;</li>
                  <li>Cópia do Certificado ou Diploma de Faixa Preta (Dan) do Sensei Responsável;</li>
                  <li>Documento de identidade e CPF do Sensei Responsável;</li>
                  <li>Comprovante de endereço do Dojo ou Contrato Social / Alvará / CNPJ (caso possua);</li>
                  <li>Relação inicial de atletas matriculados para cadastro no sistema;</li>
                  <li>Comprovante de pagamento da taxa de filiação de academia no valor de <strong>R$ 195,00</strong>.</li>
                </ul>
              </div>

              {/* Forma de Pagamento */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="text-lg md:text-xl font-bold text-[#0284c7] mb-3">
                  Forma de pagamento
                </h4>
                <p className="text-slate-600 text-sm md:text-base mb-4">
                  O pagamento da taxa de R$ 195,00 pode ser realizado por transferência bancária ou PIX:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-800">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Transferência Bancária</span>
                    <p className="font-bold text-base text-[#1e3a8a]">Dados bancários</p>
                    <p className="text-sm text-slate-600 italic">Em Breve...</p>
                    <p className="text-sm text-slate-600"><strong>Titular:</strong> Liga Vale Paraibana de Karatê</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Pagamento Instantâneo</span>
                    <p className="font-bold text-base text-[#1e3a8a]">PIX Oficial</p>
                    <p className="text-sm text-slate-600 italic">Em Breve...</p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. REGIMENTO DE CUSTAS (Tabela idêntica às páginas 6 e 7) */}
      {/* ======================================================== */}
      <section id="custas" className="py-14 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200 mb-4 shadow-xs">
            <DollarSign size={16} className="text-emerald-600" />
            <span>TABELA DE CUSTOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
            Regimento de custas
          </h2>
          <p className="text-sky-600 font-bold text-base md:text-lg mb-8">
            A partir de 01.01.2026
          </p>

          {/* Tabela de Valores */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-xs tracking-wider">
                    <th className="py-4 px-4 w-16 text-center font-bold">Item</th>
                    <th className="py-4 px-6 font-bold">Descrição</th>
                    <th className="py-4 px-6 text-right font-bold w-44">Valor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  
                  {/* 01 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">01</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Taxa de filiação de academias, clubes e associações</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 195,00</td>
                  </tr>

                  {/* 02 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">02</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Registro de grau (Faixa Preta) + carteirinha</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 200,00</td>
                  </tr>

                  {/* 03 com subitens Dan */}
                  <tr className="bg-slate-50/50">
                    <td className="py-4 px-4 text-center font-bold text-slate-400 align-top">03</td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900 mb-2">Diploma de Grau (Faixa Preta) - LVPK</div>
                      <div className="space-y-1.5 pl-3 border-l-2 border-slate-200 text-slate-600 text-sm">
                        <div className="flex justify-between py-0.5">
                          <span>1º Dan (Sho-dan)</span>
                          <span className="font-semibold text-slate-800">R$ 360,00</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span>2º Dan (Ni-dan)</span>
                          <span className="font-semibold text-slate-800">R$ 440,00</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span>3º Dan (San-dan)</span>
                          <span className="font-semibold text-slate-800">R$ 550,00</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span>4º Dan (Yon-dan)</span>
                          <span className="font-semibold text-slate-800">R$ 820,00</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span>5º Dan (Go-dan)</span>
                          <span className="font-semibold text-slate-800">R$ 1200,00</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span>6º Dan (Roku-dan)</span>
                          <span className="font-semibold text-slate-800">R$ 1500,00</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-semibold text-slate-500 text-xs align-top">
                      Conforme o grau
                    </td>
                  </tr>

                  {/* 04 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">04</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Certificado de Kyu</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 25,00</td>
                  </tr>

                  {/* 05 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">05</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Diploma de Grau (2ª via)</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 180,00</td>
                  </tr>

                  {/* 06 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">06</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Anuidade Faixa Preta LVPK</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 60,00</td>
                  </tr>

                  {/* 07 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">07</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Taxa de filiação + carteirinha</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 30,00</td>
                  </tr>

                  {/* 08 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">08</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Taxa de transferência de filiação + carteirinha</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 25,00</td>
                  </tr>

                  {/* 09 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">09</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Carteirinha (2ª via)</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 25,00</td>
                  </tr>

                  {/* 10 Taxa Administrativa */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">10</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Taxa administrativa</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 300,00</td>
                  </tr>

                  {/* 11 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">11</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Taxa de competição – filiados (por atleta)</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 50,00</td>
                  </tr>

                  {/* 12 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">12</td>
                    <td className="py-4 px-6 font-medium text-slate-900">Taxa de competição – não filiados (por atleta)</td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900">R$ 95,00</td>
                  </tr>

                  {/* 13 Anuidade Nacional */}
                  <tr className="bg-slate-50/50">
                    <td className="py-4 px-4 text-center font-bold text-slate-400 align-top">13</td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900 mb-1">
                        Anuidade Nacional (será pago à LVPK que fará o repasse)
                      </div>
                      <div className="text-xs text-slate-500 mb-2">
                        (as anuidades têm vencimentos específicos por graduação)
                      </div>
                      <div className="space-y-1.5 pl-3 border-l-2 border-slate-200 text-slate-600 text-sm">
                        <div className="flex justify-between py-0.5">
                          <span>Faixa Preta (vencimento em 30 de março)</span>
                          <span className="font-semibold text-slate-800">R$ 176,00</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span>Faixa Marrom (vencimento em 16 de março)</span>
                          <span className="font-semibold text-slate-800">R$ 88,00</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span>Faixa Colorida (vencimento em 27 de abril)</span>
                          <span className="font-semibold text-slate-800">R$ 44,00</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                          <span>Academia / Clube</span>
                          <span className="font-semibold text-slate-800">R$ 176,00</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-semibold text-slate-500 text-xs align-top">
                      Conforme categoria
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 8. BOX OBSERVAÇÕES (Idêntica à página 8 do documento)     */}
          {/* ======================================================== */}
          <div className="mt-8 bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#0284c7] text-white p-7 sm:p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black mb-5 tracking-tight uppercase">
              OBSERVAÇÕES:
            </h3>
            <ol className="space-y-4 text-sm sm:text-base font-medium leading-relaxed">
              <li className="flex gap-3">
                <span className="font-bold shrink-0">1.</span>
                <span>Para eventos oficiais da LVPK é obrigatória a cobrança das taxas acima.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold shrink-0">2.</span>
                <span>Nos casos de eventos não oficiais, que contam com o aval (apoio) da LVPK será cobrada o valor de chancela de R$ 450,00 (quatrocentos e cinquenta reais).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold shrink-0">3.</span>
                <span>Terão direito de participar de qualquer evento oficial da LVPK, as Academias, Árbitros, Atletas e demais membros filiados que estiverem absolutamente em dia com suas obrigações financeiras junto à secretaria desta Liga. Ficam sem efeito todos os regimentos de custas da LVPK anteriores a este.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold shrink-0">4.</span>
                <div>
                  Os pagamentos poderão ser feitos na sede da LVPK ou por <strong>transferência bancária (agência e conta: Em Breve...)</strong> |
                  <strong className="ml-1">PIX: Em Breve...</strong>
                </div>
              </li>
            </ol>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. FOOTER (Rodapé conforme o padrão oficial e documento)  */}
      {/* ======================================================== */}
      <footer id="contato" className="bg-[#0f172a] text-slate-300 py-14 border-t-4 border-[#ea580c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card Contato */}
          <div className="bg-[#1e293b] p-6 rounded-2xl border border-[#334155] md:col-span-1">
            <h4 className="text-white font-bold text-xl mb-4">Entre em contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-[#ea580c] shrink-0" size={22} />
                <a href="tel:12997114365" className="font-bold text-base text-white hover:text-orange-400 transition-colors">
                  (12) 99711-4365
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400 shrink-0" size={22} />
                <a href="mailto:ligavaleparaibanadekarate@gmail.com" className="text-sm font-medium text-slate-300 hover:text-white transition-colors break-all">
                  ligavaleparaibanadekarate@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Horário de Atendimento</h4>
            <p className="font-bold text-white text-sm">Segunda a sexta-feira</p>
            <p className="text-sm text-slate-400 mb-3">9h às 18h</p>
            <p className="font-bold text-white text-sm">Sábado</p>
            <p className="text-sm text-slate-400">9h às 13h</p>
          </div>

          {/* Redes e Políticas */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Redes Sociais</h4>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.instagram.com/lvpk2026/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-white text-[#0f172a] flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>

            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Políticas</h4>
            <ul className="space-y-1 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Liga Vale Paraibana de Karatê. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 10. MODAL: FICHA DE CADASTRO ONLINE (Praticante/Academia) */}
      {/* ======================================================== */}
      {modalCadastroAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8">
            {/* Fechar Modal */}
            <button
              onClick={fecharModalCadastro}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full p-1.5 transition-colors z-10"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Cabeçalho */}
            <div className="bg-[#1e3a8a] p-6 text-white text-center">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
                Formulário Oficial de Filiação
              </span>
              <h3 className="text-2xl font-black">
                {modalCadastroAberto === 'praticante' 
                  ? 'Ficha de Cadastro – Praticante / Atleta' 
                  : 'Ficha de Cadastro – Academia / Dojo'}
              </h3>
              <p className="text-xs text-blue-100 mt-1">
                Preencha os dados, baixe a ficha em PDF e envie para a LVPK para finalizar a filiação
              </p>
            </div>

            {/* Tela após baixar a ficha: próxima etapa */}
            {cadastroEnviado ? (
              <div className="p-6 md:p-8 text-center space-y-5 max-h-[75vh] overflow-y-auto">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-black text-slate-900">
                  Ficha baixada em PDF!
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Agora, para <strong>finalizar sua filiação</strong>, envie o PDF da ficha junto com os documentos
                  solicitados por um dos canais abaixo. A diretoria da LVPK dará continuidade ao processo
                  diretamente com você, incluindo as orientações de pagamento.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left">
                  <a
                    href={CONTATO_LIGA.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 p-4 rounded-xl transition-colors"
                  >
                    <Phone className="text-emerald-600 shrink-0" size={22} />
                    <span>
                      <span className="block text-xs font-bold uppercase text-emerald-700">WhatsApp</span>
                      <span className="block text-sm font-bold text-slate-800">{CONTATO_LIGA.telefone}</span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${CONTATO_LIGA.email}?subject=${encodeURIComponent(
                      modalCadastroAberto === 'praticante' ? 'Ficha de Cadastro - Praticante' : 'Ficha de Cadastro - Academia'
                    )}`}
                    className="flex items-center gap-3 bg-sky-50 hover:bg-sky-100 border border-sky-200 p-4 rounded-xl transition-colors"
                  >
                    <Mail className="text-sky-600 shrink-0" size={22} />
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase text-sky-700">E-mail</span>
                      <span className="block text-xs font-bold text-slate-800 break-all">{CONTATO_LIGA.email}</span>
                    </span>
                  </a>
                </div>

                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Lembre-se de anexar o arquivo PDF baixado na sua mensagem. Se o download não começou,
                  verifique a pasta de Downloads ou baixe novamente.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={baixarFicha}
                    disabled={gerandoPdf}
                    className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors disabled:opacity-60"
                  >
                    <Download size={16} /> {gerandoPdf ? 'Gerando...' : 'Baixar novamente'}
                  </button>
                  <button
                    onClick={fecharModalCadastro}
                    className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors"
                  >
                    Concluir
                  </button>
                </div>
              </div>
            ) : (
              /* Formulário interativo */
              <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
                {/* Orientações */}
                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-xl mb-6 text-sm text-slate-700">
                  <p className="font-bold text-sky-800 mb-2">Como funciona</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Preencha os dados abaixo;</li>
                    <li>Clique em <strong>Baixar ficha em PDF</strong>;</li>
                    <li>
                      Envie o PDF com os documentos para <strong>{CONTATO_LIGA.email}</strong> ou
                      pelo WhatsApp <strong>{CONTATO_LIGA.telefone}</strong>;
                    </li>
                    <li>A diretoria da LVPK entrará em contato para finalizar a filiação.</li>
                  </ol>
                </div>

                {modalCadastroAberto === 'praticante' ? (
                  <form onSubmit={handleSubmitFicha} className="space-y-4">
                    
                    {/* Seletor Tipo: Filiação ou Transferência */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <button
                        type="button"
                        onClick={() => setFormPraticante({ ...formPraticante, tipo: 'filiacao' })}
                        className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${
                          formPraticante.tipo === 'filiacao'
                            ? 'bg-[#0284c7] text-white border-[#0284c7]'
                            : 'bg-slate-50 text-slate-700 border-slate-300'
                        }`}
                      >
                        Nova Filiação (R$ 30,00)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormPraticante({ ...formPraticante, tipo: 'transferencia' })}
                        className={`py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${
                          formPraticante.tipo === 'transferencia'
                            ? 'bg-[#0284c7] text-white border-[#0284c7]'
                            : 'bg-slate-50 text-slate-700 border-slate-300'
                        }`}
                      >
                        Transferência (R$ 25,00)
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Nome Completo do Atleta *
                      </label>
                      <input
                        type="text"
                        required
                        value={formPraticante.nome}
                        onChange={(e) => setFormPraticante({ ...formPraticante, nome: e.target.value })}
                        placeholder="Ex: Lucas Pereira dos Santos"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          CPF *
                        </label>
                        <input
                          type="text"
                          required
                          value={formPraticante.cpf}
                          onChange={(e) => setFormPraticante({ ...formPraticante, cpf: e.target.value })}
                          placeholder="000.000.000-00"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          RG *
                        </label>
                        <input
                          type="text"
                          required
                          value={formPraticante.rg}
                          onChange={(e) => setFormPraticante({ ...formPraticante, rg: e.target.value })}
                          placeholder="00.000.000-0"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Data de Nascimento *
                        </label>
                        <input
                          type="date"
                          required
                          value={formPraticante.nascimento}
                          onChange={(e) => setFormPraticante({ ...formPraticante, nascimento: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          WhatsApp / Telefone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPraticante.telefone}
                          onChange={(e) => setFormPraticante({ ...formPraticante, telefone: e.target.value })}
                          placeholder="(12) 99999-9999"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formPraticante.email}
                        onChange={(e) => setFormPraticante({ ...formPraticante, email: e.target.value })}
                        placeholder="atleta@exemplo.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Academia / Dojo Filiado *
                        </label>
                        <input
                          type="text"
                          required
                          value={formPraticante.dojo}
                          onChange={(e) => setFormPraticante({ ...formPraticante, dojo: e.target.value })}
                          placeholder="Ex: Dojo Ikigai"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Sensei Responsável *
                        </label>
                        <input
                          type="text"
                          required
                          value={formPraticante.sensei}
                          onChange={(e) => setFormPraticante({ ...formPraticante, sensei: e.target.value })}
                          placeholder="Ex: Nome do Sensei Responsável"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Graduação Atual *
                      </label>
                      <select
                        value={formPraticante.graduacao}
                        onChange={(e) => setFormPraticante({ ...formPraticante, graduacao: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                      >
                        <option>Faixa Branca (7º Kyu)</option>
                        <option>Faixa Amarela (6º Kyu)</option>
                        <option>Faixa Vermelha (5º Kyu)</option>
                        <option>Faixa Laranja (4º Kyu)</option>
                        <option>Faixa Verde (3º Kyu)</option>
                        <option>Faixa Roxa (2º Kyu)</option>
                        <option>Faixa Marrom (1º Kyu)</option>
                        <option>Faixa Preta 1º Dan</option>
                        <option>Faixa Preta 2º Dan ou superior</option>
                      </select>
                    </div>

                    {/* Documentos: enviados junto com o PDF */}
                    <p className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                      <span>
                        <strong>Observação:</strong> a foto 3x4, o RG e o certificado de graduação devem ser enviados
                        junto com o PDF desta ficha, pelo e-mail ou WhatsApp da Liga.
                      </span>
                    </p>

                    <BotaoBaixarFicha gerando={gerandoPdf} erro={erroPdf} />
                  </form>
                ) : (
                  /* Formulário de Academia */
                  <form onSubmit={handleSubmitFicha} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Nome da Academia / Dojo / Clube *
                      </label>
                      <input
                        type="text"
                        required
                        value={formAcademia.nomeAcademia}
                        onChange={(e) => setFormAcademia({ ...formAcademia, nomeAcademia: e.target.value })}
                        placeholder="Ex: Associação de Karatê Ikigai"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          CNPJ ou CPF do Responsável *
                        </label>
                        <input
                          type="text"
                          required
                          value={formAcademia.cnpjCpf}
                          onChange={(e) => setFormAcademia({ ...formAcademia, cnpjCpf: e.target.value })}
                          placeholder="00.000.000/0001-00"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Cidade / UF *
                        </label>
                        <input
                          type="text"
                          required
                          value={formAcademia.cidade}
                          onChange={(e) => setFormAcademia({ ...formAcademia, cidade: e.target.value })}
                          placeholder="Ex: São José dos Campos / SP"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Sensei Responsável Técnico *
                        </label>
                        <input
                          type="text"
                          required
                          value={formAcademia.senseiResponsavel}
                          onChange={(e) => setFormAcademia({ ...formAcademia, senseiResponsavel: e.target.value })}
                          placeholder="Nome do Sensei"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Graduação do Sensei *
                        </label>
                        <select
                          value={formAcademia.graduacaoDan}
                          onChange={(e) => setFormAcademia({ ...formAcademia, graduacaoDan: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        >
                          <option>1º Dan (Sho-dan)</option>
                          <option>2º Dan (Ni-dan)</option>
                          <option>3º Dan (San-dan)</option>
                          <option>4º Dan (Yon-dan)</option>
                          <option>5º Dan (Go-dan)</option>
                          <option>6º Dan (Roku-dan)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          WhatsApp / Telefone de Contato *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formAcademia.telefone}
                          onChange={(e) => setFormAcademia({ ...formAcademia, telefone: e.target.value })}
                          placeholder="(12) 99999-9999"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          E-mail Oficial do Dojo *
                        </label>
                        <input
                          type="email"
                          required
                          value={formAcademia.email}
                          onChange={(e) => setFormAcademia({ ...formAcademia, email: e.target.value })}
                          placeholder="dojo@karate.com.br"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-[#ea580c] outline-none"
                        />
                      </div>
                    </div>

                    {/* Documentação: enviada junto com o PDF */}
                    <p className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                      <span>
                        <strong>Observação:</strong> o diploma Dan do Sensei, o comprovante de endereço e o alvará (se houver)
                        devem ser enviados junto com o PDF desta ficha, pelo e-mail ou WhatsApp da Liga.
                      </span>
                    </p>

                    <BotaoBaixarFicha gerando={gerandoPdf} erro={erroPdf} />
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Botão flutuante de voltar ao topo */}
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

// Passo a passo do processo de filiação (exibido nas abas de praticante e academia)
function PassosFiliacao() {
  const passos = [
    { icone: FileText, titulo: '1. Preencha a ficha', texto: 'Clique no botão abaixo e preencha a ficha de cadastro online.' },
    { icone: Download, titulo: '2. Baixe em PDF', texto: 'Ao final, a ficha preenchida é baixada automaticamente em PDF.' },
    { icone: Send, titulo: '3. Envie para a LVPK', texto: `Envie o PDF e os documentos para ${CONTATO_LIGA.email} ou pelo WhatsApp ${CONTATO_LIGA.telefone}.` },
    { icone: CheckCircle2, titulo: '4. Finalize com a diretoria', texto: 'A diretoria entra em contato para conferir os documentos, orientar o pagamento e concluir a filiação.' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {passos.map(({ icone: Icone, titulo, texto }) => (
        <div key={titulo} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <Icone className="text-[#ea580c] mb-2" size={24} />
          <p className="font-bold text-slate-900 text-sm mb-1">{titulo}</p>
          <p className="text-slate-600 text-xs leading-relaxed break-words">{texto}</p>
        </div>
      ))}
    </div>
  );
}

function BotaoBaixarFicha({ gerando, erro }: { gerando: boolean; erro: boolean }) {
  return (
    <div className="mt-4">
      <button
        type="submit"
        disabled={gerando}
        className="w-full py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-extrabold rounded-lg text-sm uppercase tracking-wider shadow-md transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <Download size={18} />
        {gerando ? 'GERANDO PDF...' : 'BAIXAR FICHA EM PDF'}
      </button>
      {erro && (
        <p className="text-xs text-red-600 font-semibold mt-2 text-center">
          Não foi possível gerar o PDF. Tente novamente ou entre em contato com a LVPK.
        </p>
      )}
    </div>
  );
}
