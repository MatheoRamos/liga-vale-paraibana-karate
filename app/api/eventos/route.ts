import { NextResponse } from 'next/server';
import { buscarEventos } from '@/lib/eventos';

export async function GET() {
  try {
    const eventos = await buscarEventos();

    return NextResponse.json(eventos);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);

    return NextResponse.json(
      { error: 'Erro ao buscar eventos' },
      { status: 500 }
    );
  }
}
