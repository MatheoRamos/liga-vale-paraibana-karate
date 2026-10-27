import React from 'react';
import { User, Phone, Mail, Users } from 'lucide-react';

export default function Karate() {
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
              <a href="/karate" className="text-orange-400 font-bold border-b-2 border-orange-400 pb-1">KARATÊ</a>
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
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] text-sm font-bold mb-4">
            <Users size={16} /> A FORÇA DA LVPK
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-6">
            Diversidade de Estilos no<br className="hidden md:block"/> Vale do Paraíba
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A Liga Vale Paraibana de Karatê é formada pela união de diversos estilos, com Senseis altamente qualificados espalhados por todo o Vale do Paraíba. Essa pluralidade fortalece nosso Karatê e enriquece o aprendizado dos nossos atletas.
          </p>
        </div>
      </header>

      {/* 3. ESTILOS DE KARATÊ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-[#1e3a8a] mb-4">Nossos Estilos</h2>
            <div className="w-16 h-1.5 bg-[#ea580c] rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Até o momento, a LVPK abriga orgulhosamente as seguintes escolas tradicionais de Karatê:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Shorin-ryu */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-[#1e3a8a]">SR</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Shorin-ryu</h3>
              <p className="text-slate-600 leading-relaxed">
                Originário de Okinawa, o Shorin-ryu é conhecido por suas bases naturais, movimentos fluidos e ataques rápidos. Um estilo tradicional que enfatiza a velocidade e a mobilidade.
              </p>
            </div>

            {/* Shotokan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow text-center relative md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ea580c] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Mais Praticado
              </div>
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                <span className="text-2xl font-black text-[#ea580c]">ST</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Shotokan</h3>
              <p className="text-slate-600 leading-relaxed">
                Fundado por Gichin Funakoshi, o Shotokan caracteriza-se por bases profundas e fortes, golpes potentes e lineares. É o estilo de Karatê mais praticado no mundo.
              </p>
            </div>

            {/* Goju-ryu */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-emerald-700">GR</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Goju-ryu</h3>
              <p className="text-slate-600 leading-relaxed">
                Criado por Chojun Miyagi, o "Estilo Forte e Suave" combina técnicas lineares rígidas com movimentos circulares flexíveis, com forte ênfase na respiração (Ibuki).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER (Rodapé) */}
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

