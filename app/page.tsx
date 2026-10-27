"use client"; // Precisamos adicionar isso porque agora a página vai fazer ações dinâmicas

import React, { useState, useEffect } from 'react';
import { User, Calendar, Newspaper, ArrowRight, Phone, Mail } from 'lucide-react';

export default function App() {
  
  // 1. A Memória da nossa página (useState)
  const [eventosDaApi, setEventosDaApi] = useState<any[]>([]);
  
  // 2. O Carregamento (Loading)
  const [carregando, setCarregando] = useState(true);

  // 3. A ligação para o garçom (useEffect)
  useEffect(() => {
    // Como o ambiente de visualização aqui foca apenas na tela (Frontend) e não roda 
    // a rota de API (/api/eventos) que criamos no backend, vamos simular o carregamento 
    // com um atraso, entregando os mesmos dados que a sua API retornaria.
    function buscarEventos() {
      try {
        setTimeout(() => {
          const dadosDaNossaApi = [
            {
              id: 1,
              titulo: '30º Campeonato Regional de Karatê (Sul-Sudeste)',
              data_inicio: '15 de Agosto',
              local: 'Ginásio Municipal - São José dos Campos',
              tipo: 'Campeonato',
              status: 'Inscrições Abertas'
            },
            {
              id: 2,
              titulo: 'Exame de Faixas Coloridas (Até Marrom)',
              data_inicio: '10 de Setembro',
              local: 'Ikigai Dojo - Taubaté',
              tipo: 'Exame',
              status: 'Agendado'
            },
            {
              id: 3,
              titulo: 'Curso de Arbitragem LVPK',
              data_inicio: '05 de Outubro',
              local: 'Online / Zoom',
              tipo: 'Curso',
              status: 'Agendado'
            }
          ];
          
          setEventosDaApi(dadosDaNossaApi); 
          setCarregando(false);
        }, 1500); // Aguarda 1.5 segundos para simular a internet
      } catch (erro) {
        console.error("Erro ao buscar eventos:", erro);
        setCarregando(false);
      }
    }

    // Executando a função
    buscarEventos();
  }, []); 

  // (As notícias continuam "falsas" por enquanto)
  const ultimasNoticias = [
    {
      id: 1,
      titulo: 'Atletas do Vale do Paraíba conquistam o Sul-Sudeste',
      dataPublicacao: '02/07/2026',
      resumo: 'A delegação da LVPK trouxe 15 medalhas de ouro na competição regional, marcando um novo recorde...',
      imagem: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. NAVBAR (Cabeçalho) */}
      <nav className="bg-[#1e3a8a] text-white sticky top-0 z-50 shadow-lg border-b-4 border-[#ea580c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden p-0.5">
                 <img src="/logo.png" alt="Logo LVPK" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight uppercase tracking-wider text-white shadow-sm">Liga Vale Paraibana</span>
                <span className="text-sm font-medium text-blue-200">de Karatê</span>
              </div>
            </div>

            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="/institucional" className="hover:text-orange-400 transition-colors">INSTITUCIONAL</a>
              <a href="/karate" className="hover:text-orange-400 transition-colors">KARATÊ</a>
              <a href="/eventos" className="hover:text-orange-400 transition-colors">EVENTOS</a>
              <a href="/noticias" className="hover:text-orange-400 transition-colors">NOTÍCIAS</a>
              <a href="/portal" className="hover:text-orange-400 transition-colors">PORTAL DO ATLETA</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="/login" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2 rounded-md font-bold text-sm transition-colors shadow-md">
                FILIE-SE
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION (Área de Destaque) */}
      <section className="relative bg-blue-950 text-white h-[500px] flex items-center border-b-8 border-orange-600">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
            alt="Atletas de Karatê" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              Fortaleça o Karatê e ajude o vale a prosperar
            </h1>
            <p className="text-lg text-blue-100 mb-8 font-light">
              Compromisso com qualidade técnica, formação humana e fortalecimento do Karatê no Vale do Paraíba.
            </p>
            <button className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:gap-4 shadow-lg">
              SAIBA MAIS
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. CARDS E LISTAGEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30 pb-16">
        
        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow cursor-pointer">
            <div className="h-32 bg-blue-100 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#1e3a8a]/30 group-hover:bg-transparent transition-colors z-10"></div>
               <img src="https://images.unsplash.com/photo-1506784951209-68581ce818c3?auto=format&fit=crop&q=80" alt="Calendário" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#1e3a8a] mb-2">
                  <Calendar size={20} />
                  <h3 className="text-xl font-bold text-slate-800">Calendário Anual</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">Veja a programação completa de campeonatos e exames da LVPK para o ano letivo.</p>
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-bold text-[#1e3a8a] w-fit rounded-full group-hover:text-blue-800 transition-colors">
                ACESSAR CALENDÁRIO <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow cursor-pointer">
            <div className="h-32 bg-orange-100 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#ea580c]/30 group-hover:bg-transparent transition-colors z-10"></div>
               <img src="https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?auto=format&fit=crop&q=80" alt="Faixa de Karate" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#ea580c] mb-2">
                  <User size={20} />
                  <h3 className="text-xl font-bold text-slate-800">Filie-se à Liga</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">Junte sua academia à LVPK e participe do circuito oficial de competições da nossa região.</p>
              </div>
              <a href="/login#vantagens" className="inline-flex items-center gap-2 text-sm font-bold text-[#ea580c] w-fit rounded-full group-hover:text-[#c2410c] transition-colors">
                VER VANTAGENS <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* ÁREA DE CONTEÚDO DINÂMICO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] border-b-2 border-[#ea580c] pb-2 mb-6 inline-block">
              Próximos Eventos
            </h2>
            
            <div className="space-y-4">
              {/* Se a API ainda estiver carregando, mostramos um aviso */}
              {carregando ? (
                <div className="p-8 text-center text-slate-500 animate-pulse border border-slate-200 rounded-lg bg-slate-50">
                  Buscando eventos no sistema...
                </div>
              ) : (
                // Se já carregou, nós lemos a lista 'eventosDaApi' que veio do Backend
                eventosDaApi.map((evento: any) => (
                  <div key={evento.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1e3a8a] flex flex-col hover:shadow-md transition-shadow cursor-pointer">
                    
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-[#ea580c]">
                        {evento.tipo}
                      </span>
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        {evento.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">{evento.titulo}</h3>
                    
                    <div className="flex flex-col gap-1 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#ea580c]"/> 
                        <span>Data: {evento.data_inicio}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#1e3a8a] flex items-center justify-center text-[8px] text-white font-bold">L</span>
                        <span>{evento.local}</span>
                      </div>
                    </div>

                  </div>
                ))
              )}
            </div>
            
            <button className="mt-6 text-sm font-bold text-slate-600 hover:text-[#ea580c] transition-colors flex items-center gap-2">
              VER TODOS OS EVENTOS <ArrowRight size={16} />
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] border-b-2 border-[#ea580c] pb-2 mb-6 inline-block">
              Últimas Notícias
            </h2>
             <div className="space-y-4">
              {ultimasNoticias.map((noticia) => (
                <div key={noticia.id} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="h-48 bg-slate-100 relative">
                     <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="text-slate-500 text-xs font-medium mb-2 block">{noticia.dataPublicacao}</span>
                    <h3 className="font-bold text-slate-800 text-lg mb-2 leading-tight">{noticia.titulo}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{noticia.resumo}</p>
                    <button className="mt-4 text-xs font-bold text-[#1e3a8a] hover:text-blue-800 transition-colors uppercase tracking-wider">
                      Leia mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER (Rodapé) - Azul Marinho Escuro */}
      <footer className="bg-[#0f172a] text-slate-300 py-12 border-t-4 border-[#ea580c]">
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

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Redes Sociais</h4>
            <div className="flex gap-4 mb-6">
              <button className="w-10 h-10 rounded-full bg-white text-[#0f172a] flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-[#0f172a] flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
            </div>
            <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-wider">Políticas</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
}