import React from 'react';
import { User, Phone, Mail, Target, Eye, Shield, Users, Award, ChevronRight } from 'lucide-react';

export default function Institucional() {
  
  // === DADOS DA DIRETORIA ===
  const diretoria = [
    {
      id: 1,
      nome: 'Sensei Carlos Eduardo',
      cargo: 'Presidente',
      faixa: 'Faixa Preta 5º Dan',
      foto: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      nome: 'Sensei Roberto Alves',
      cargo: 'Diretor Técnico',
      faixa: 'Faixa Preta 4º Dan',
      foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      nome: 'Sensei Mariana Costa',
      cargo: 'Diretora de Arbitragem',
      faixa: 'Faixa Preta 3º Dan',
      foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80'
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
              <a href="/institucional" className="text-orange-400 font-bold border-b-2 border-orange-400 pb-1">INSTITUCIONAL</a>
              <a href="/karate" className="hover:text-orange-400 transition-colors">KARATÊ</a>
              <a href="/eventos" className="hover:text-orange-400 transition-colors">EVENTOS</a>
              <a href="/noticias" className="hover:text-orange-400 transition-colors">NOTÍCIAS</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="/login" className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2 rounded-md font-bold text-sm transition-colors shadow-md">
                FILIE-SE
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. CABEÇALHO DA PÁGINA */}
      <header className="bg-white border-b border-slate-200 pt-12 pb-12 relative overflow-hidden">
        {/* Detalhe visual de fundo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] text-sm font-bold mb-4">
            <Users size={16} /> SOBRE A LIGA
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-6">
            Fortalecendo o Karatê no<br className="hidden md:block"/> Vale do Paraíba
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Uma instituição dedicada ao fomento, organização e padronização do Karatê, unindo academias e formando cidadãos através do caminho das mãos vazias.
          </p>
        </div>
      </header>

      {/* 3. HISTÓRIA E QUEM SOMOS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <div className="absolute inset-0 bg-[#1e3a8a]/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80" 
                  alt="Treino de Karatê" 
                  className="w-full h-[400px] object-cover grayscale-[30%]"
                />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold text-[#1e3a8a]">Nossa História</h2>
              <div className="w-16 h-1.5 bg-[#ea580c] rounded-full"></div>
              
              <div className="text-slate-600 space-y-4 text-lg">
                <p>
                  A <strong>Liga Vale Paraibana de Karatê (LVPK)</strong> nasceu da união de professores e mestres apaixonados pela arte marcial, com o propósito de criar uma entidade forte, transparente e focada no desenvolvimento técnico dos seus filiados.
                </p>
                <p>
                  Atuamos em toda a região do Vale do Paraíba, organizando circuitos de campeonatos de alto nível, exames de graduação padronizados e cursos de capacitação para árbitros e técnicos.
                </p>
                <p>
                  Mais do que formar campeões nos tatames, nossa missão é preservar o <em>Dojo Kun</em> (lemas do Karatê), formando cidadãos de caráter, pautados no respeito, esforço e disciplina.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MISSÃO, VISÃO E VALORES */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Nossos Pilares</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">O alicerce que guia todas as decisões, eventos e ações da nossa Liga.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Missão */}
            <div className="bg-[#2e50ad] rounded-2xl p-8 border border-[#3e60bd] shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-white">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Missão</h3>
              <p className="text-blue-100 leading-relaxed">
                Promover, organizar e desenvolver o Karatê em toda a região, oferecendo suporte de excelência aos Dojos filiados e garantindo eventos de alta qualidade técnica para os atletas.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-[#2e50ad] rounded-2xl p-8 border border-[#3e60bd] shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-white">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Visão</h3>
              <p className="text-blue-100 leading-relaxed">
                Ser reconhecida como a principal e mais respeitada liga de Karatê do interior paulista, sendo referência em gestão esportiva, transparência e valorização das raízes marciais.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-[#2e50ad] rounded-2xl p-8 border border-[#3e60bd] shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-white">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Valores</h3>
              <ul className="text-blue-100 space-y-2 text-left inline-block">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div> Esforçar-se para a formação do caráter</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div> Fidelidade para com o verdadeiro caminho da razão</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div> Criar o intuito de esforço</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div> Respeito acima de tudo</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></div> Conter o espírito de agressão</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DIRETORIA EXECUTIVA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-[#1e3a8a] mb-2">Diretoria Executiva</h2>
            <div className="w-16 h-1.5 bg-[#ea580c] rounded-full mb-4"></div>
            <p className="text-slate-600">Conheça os mestres responsáveis pela gestão técnica e administrativa da LVPK.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {diretoria.map((diretor) => (
              <div key={diretor.id} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                  <img 
                    src={diretor.foto} 
                    alt={diretor.nome} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ea580c] text-white text-xs font-bold mb-2">
                      <Award size={12} /> {diretor.faixa}
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center border-t-4 border-[#1e3a8a]">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{diretor.nome}</h3>
                  <p className="text-[#ea580c] font-bold text-sm uppercase tracking-wider">{diretor.cargo}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CHAMADA PARA FILIAÇÃO */}
      <section className="py-12 bg-orange-50 border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Faça parte da nossa história</h2>
          <p className="text-slate-600 mb-8">Traga o seu Dojo para a Liga Vale Paraibana e fortaleça o Karatê na nossa região.</p>
          <a href="/login" className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg">
            INICIAR PROCESSO DE FILIAÇÃO <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* 7. FOOTER (Rodapé) */}
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
        </div>
      </footer>
    </div>
  );
}