"use client"; // Esse comando diz ao Next.js que esta página tem interatividade (como botões que mudam o estado)

import React, { useState, useEffect } from 'react';
import { Mail, Lock, ArrowLeft, User as UserIcon } from 'lucide-react';

export default function Login() {
  // useState é a "memória" do nosso componente. 
  // Ele guarda se o usuário quer ver a tela de 'login' ou de 'cadastro'
  const [modo, setModo] = useState('login'); 

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('modo=cadastro')) {
      setModo('cadastro');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat relative">
      
      {/* Película escura por cima da imagem de fundo */}
      <div className="absolute inset-0 bg-[#1e3a8a]/80 backdrop-blur-sm z-0"></div>

      {/* Botão de voltar para a Home */}
      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md mb-4">
        <a href="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Voltar para o início
        </a>
      </div>

      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-1 border-2 border-[#ea580c]">
             {/* Puxando a nossa logo da pasta public */}
             <img src="/logo.png" alt="Logo LVPK" className="w-full h-full object-contain rounded-full" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
          {modo === 'login' ? 'Portal do Filiado' : 'Nova Filiação'}
        </h2>
        <p className="mt-2 text-center text-sm text-blue-200">
          {modo === 'login' ? 'Acesse sua conta para ver graduações e eventos' : 'Junte-se à Liga Vale Paraibana de Karatê'}
        </p>
      </div>

      <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-slate-100">
          
          <form className="space-y-6" action="#" method="POST">
            
            {/* Campo NOME (Só aparece se estiver no modo cadastro) */}
            {modo === 'cadastro' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome Completo</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  <input type="text" id="name" className="text-slate-900 focus:ring-[#ea580c] focus:border-[#ea580c] block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-2 border bg-slate-50" placeholder="João da Silva" />
                </div>
              </div>
            )}

            {/* Campo EMAIL */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-mail</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input type="email" id="email" className="text-slate-900 focus:ring-[#ea580c] focus:border-[#ea580c] block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-2 border bg-slate-50" placeholder="atleta@email.com" />
              </div>
            </div>

            {/* Campo SENHA */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Senha</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input type="password" id="password" className="text-slate-900 focus:ring-[#ea580c] focus:border-[#ea580c] block w-full pl-10 sm:text-sm border-slate-300 rounded-md py-2 border bg-slate-50" placeholder="••••••••" />
              </div>
            </div>

            {/* Esqueceu a senha (Só no login) */}
            {modo === 'login' && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#ea580c] focus:ring-[#ea580c] border-slate-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">Lembrar de mim</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-[#1e3a8a] hover:text-[#ea580c] transition-colors">Esqueceu a senha?</a>
                </div>
              </div>
            )}

            {/* Botão Principal */}
            <div>
              <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-[#ea580c] hover:bg-[#c2410c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ea580c] transition-colors">
                {modo === 'login' ? 'ENTRAR NO PORTAL' : 'CRIAR MINHA CONTA'}
              </button>
            </div>
          </form>

          {/* Alternador Login/Cadastro */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">
                  {modo === 'login' ? 'Novo por aqui?' : 'Já é filiado?'}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button 
                // Aqui é onde dizemos à "memória" para mudar o estado ao clicar
                onClick={() => setModo(modo === 'login' ? 'cadastro' : 'login')}
                className="w-full flex justify-center py-2.5 px-4 border-2 border-[#1e3a8a] rounded-md shadow-sm text-sm font-bold text-[#1e3a8a] bg-white hover:bg-slate-50 transition-colors"
              >
                {modo === 'login' ? 'FILIE-SE À LIGA' : 'FAZER LOGIN'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}