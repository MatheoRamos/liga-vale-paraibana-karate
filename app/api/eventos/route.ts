import { NextResponse } from 'next/server';

// Esta é a função que "escuta" quando alguém faz um pedido do tipo GET (Pegar dados)
export async function GET() {
  
  // No futuro, esta lista virá do nosso Banco de Dados real (PostgreSQL).
  // Por enquanto, a API está buscando desta lista interna.
  const listaDeEventos = [
    {
      id: 1,
      titulo: '30º Campeonato Regional de Karatê (Sul-Sudeste)',
      data_inicio: '2026-08-15',
      data_fim: '2026-08-16',
      local: 'Ginásio Municipal - São José dos Campos',
      tipo: 'Campeonato',
      status: 'Inscrições Abertas'
    },
    {
      id: 2,
      titulo: 'Exame de Faixas Coloridas (Até Marrom)',
      data_inicio: '2026-09-10',
      data_fim: '2026-09-10',
      local: 'Ikigai Dojo - Taubaté',
      tipo: 'Exame',
      status: 'Agendado'
    },
    {
      id: 3,
      titulo: 'Curso de Arbitragem LVPK',
      data_inicio: '2026-10-05',
      data_fim: '2026-10-05',
      local: 'Online / Zoom',
      tipo: 'Curso',
      status: 'Agendado'
    }
  ];

  // A API pega a lista e envia como resposta (Response) no formato JSON (padrão da web)
  return NextResponse.json(listaDeEventos);
}