import React from 'react';
import { User, Newspaper, Calendar, ArrowRight, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Noticias() {
  
  // === DADOS FALSOS PARA A TELA VISUAL ===
  const noticiaDestaque = {
    id: 1,
    titulo: 'Atletas do Vale do Paraíba conquistam o Sul-Sudeste com recorde de medalhas',
    data: '02 de Julho, 2026',
    categoria: 'Competição',
    resumo: 'A delegação da LVPK fez história no último final de semana. Com uma equipe de 45 atletas, trouxemos 15 medalhas de ouro, 10 de prata e 8 de bronze, garantindo o primeiro lugar geral na competição regional.',
    imagem: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80'
  };

  const outrasNoticias = [
    {
      id: 2,
      titulo: 'Abertas as inscrições para o Curso de Arbitragem 2026',
      data: '28 de Junho, 2026',
      categoria: 'Cursos',
      imagem: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      titulo: 'Novo Dojo filiado: Bem-vindo, Instituto Bushido de Caçapava!',
      data: '15 de Junho, 2026',
      categoria: 'Institucional',
      imagem: 'https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      titulo: 'Resultados oficiais do Exame de Faixas de Inverno já estão disponíveis no portal',
      data: '10 de Junho, 2026',
      categoria: 'Graduação',
      imagem: 'https://images.unsplash.com/photo-1506784951209-68581ce818c3?auto=format&fit=crop&q=80'
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
              <a href="#" className="hover:text-orange-400 transition-colors">INSTITUCIONAL</a>
              <a href="#" className="hover:text-orange-400 transition-colors">KARATÊ</a>
              <a href="#" className="hover:text-orange-400 transition-colors">GRADUAÇÃO</a>
              <a href="/eventos" className="hover:text-orange-400 transition-colors">EVENTOS</a>
              <a href="/noticias" className="text-orange-400 font-bold border-b-2 border-orange-400 pb-1">NOTÍCIAS</a>
              <a href="#" className="hover:text-orange-400 transition-colors">CONTATO</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="/login" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2 rounded-md font-bold text-sm transition-colors shadow-md">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#ea580c] text-sm font-bold mb-4 border border-orange-100">
            <Newspaper size={16} /> MURAL DE NOTÍCIAS
          </div>
          <h1 className="text-4xl font-extrabold text-[#1e3a8a] mb-4">
            Acompanhe a Liga
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Fique por dentro dos resultados de campeonatos, comunicados oficiais, novas filiações e tudo o que acontece no Karatê do Vale do Paraíba.
          </p>
        </div>
      </header>

      {/* 3. CONTEÚDO PRINCIPAL (Notícias) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* NOTÍCIA EM DESTAQUE */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col lg:flex-row group cursor-pointer hover:shadow-xl transition-all">
            <div className="lg:w-3/5 h-64 lg:h-[400px] relative overflow-hidden">
              <img 
                src={noticiaDestaque.imagem} 
                alt="Destaque" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#ea580c] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                {noticiaDestaque.categoria}
              </div>
            </div>
            
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-4 font-medium">
                <Calendar size={16} />
                {noticiaDestaque.data}
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1e3a8a] mb-4 leading-tight group-hover:text-[#ea580c] transition-colors">
                {noticiaDestaque.titulo}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {noticiaDestaque.resumo}
              </p>
              <span className="inline-flex items-center gap-2 text-[#ea580c] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Ler matéria completa <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </section>

        {/* GRADE DE OUTRAS NOTÍCIAS */}
        <section>
          <h3 className="text-2xl font-bold text-[#1e3a8a] border-b-2 border-[#ea580c] pb-2 mb-8 inline-block">
            Últimas Atualizações
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outrasNoticias.map((noticia) => (
              <div key={noticia.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-lg transition-all flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={noticia.imagem} 
                    alt={noticia.titulo} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1e3a8a] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {noticia.categoria}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-3 font-medium">
                    <Calendar size={14} />
                    {noticia.data}
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg leading-tight mb-4 group-hover:text-[#ea580c] transition-colors flex-1">
                    {noticia.titulo}
                  </h4>
                  <span className="text-[#1e3a8a] font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    Acessar <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-[#1e3a8a] rounded-full text-[#1e3a8a] font-bold hover:bg-[#1e3a8a] hover:text-white transition-all shadow-sm">
              Carregar mais notícias
            </button>
          </div>
        </section>

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