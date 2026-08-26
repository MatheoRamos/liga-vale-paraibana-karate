import { prisma } from "@/lib/prisma";

export interface EventoResumo {
  id: number;
  titulo: string;
  data_inicio: string;
  data_fim: string | null;
  local: string;
  tipo: string;
  status: string;
}

export interface GrupoEventos {
  mes: string;
  eventos: EventoResumo[];
}

function toDateKey(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseDateKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);

  return { year, month, day };
}

function todayDateKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  if (!year || !month || !day) {
    return toDateKey(new Date());
  }

  return `${year}-${month}-${day}`;
}

function normalizeStatus(status: string) {
  return status
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function formatarDataBrasileira(dateKey: string) {
  const { year, month, day } = parseDateKey(dateKey);

  return `${String(day).padStart(2, "0")}/${String(month).padStart(
    2,
    "0"
  )}/${year}`;
}

export function diaDoEvento(dateKey: string) {
  return String(parseDateKey(dateKey).day).padStart(2, "0");
}

export function mesDoEvento(dateKey: string) {
  const { month } = parseDateKey(dateKey);
  const nomesDosMeses = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  return nomesDosMeses[month - 1] ?? "";
}

export function eventoRealizado(evento: EventoResumo, hoje = todayDateKey()) {
  const status = normalizeStatus(evento.status);
  const dataReferencia = evento.data_fim ?? evento.data_inicio;

  return (
    status.includes("realizado") ||
    status.includes("encerrado") ||
    status.includes("finalizado") ||
    status.includes("concluido") ||
    dataReferencia < hoje
  );
}

export function agruparEventosPorMes(eventos: EventoResumo[]) {
  return eventos.reduce<GrupoEventos[]>((grupos, evento) => {
    const mes = mesDoEvento(evento.data_inicio);
    const grupoExistente = grupos.find((grupo) => grupo.mes === mes);

    if (grupoExistente) {
      grupoExistente.eventos.push(evento);
      return grupos;
    }

    return [...grupos, { mes, eventos: [evento] }];
  }, []);
}

export function separarEventos(eventos: EventoResumo[]) {
  const hoje = todayDateKey();
  const proximos = eventos.filter((evento) => !eventoRealizado(evento, hoje));
  const realizados = eventos.filter((evento) => eventoRealizado(evento, hoje));

  return {
    proximos,
    realizados,
  };
}

export async function buscarEventos(): Promise<EventoResumo[]> {
  const eventos = await prisma.evento.findMany({
    orderBy: {
      dataInicio: "asc",
    },
  });

  return eventos.map((evento) => ({
    id: evento.id,
    titulo: evento.titulo,
    data_inicio: toDateKey(evento.dataInicio),
    data_fim: evento.dataFim ? toDateKey(evento.dataFim) : null,
    local: evento.local,
    tipo: evento.tipo,
    status: evento.status,
  }));
}
