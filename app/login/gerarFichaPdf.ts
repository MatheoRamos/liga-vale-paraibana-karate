// Gera a ficha de cadastro preenchida como PDF e dispara o download no navegador.
// Usa as fontes padrão do jsPDF (Helvetica / WinAnsi): evite caracteres fora do
// Latin-1 (ex.: travessão "–", emojis) nos textos, pois não seriam renderizados.

export const CONTATO_LIGA = {
  email: 'ligavaleparaibanadekarate@gmail.com',
  telefone: '(12) 99711-4365',
  whatsappLink: 'https://wa.me/5512997114365',
};

type Campo = { rotulo: string; valor: string };

type Ficha = {
  titulo: string;
  subtitulo: string;
  campos: Campo[];
  assinaturas: string[];
  nomeArquivo: string;
};

const AZUL: [number, number, number] = [30, 58, 138];
const LARANJA: [number, number, number] = [234, 88, 12];
const CINZA: [number, number, number] = [100, 116, 139];
const TEXTO: [number, number, number] = [15, 23, 42];

export function formatarData(iso: string) {
  if (!iso) return '';
  const [ano, mes, dia] = iso.split('-');
  return ano && mes && dia ? `${dia}/${mes}/${ano}` : iso;
}

function slug(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

export function nomeArquivoFicha(prefixo: string, nome: string) {
  const base = slug(nome);
  return `${prefixo}${base ? '-' + base : ''}.pdf`;
}

export async function gerarFichaPdf(ficha: Ficha) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  const largura = doc.internal.pageSize.getWidth();
  const altura = doc.internal.pageSize.getHeight();
  const margem = 18;
  const larguraUtil = largura - margem * 2;

  // Cabeçalho
  doc.setFillColor(...AZUL);
  doc.rect(0, 0, largura, 30, 'F');
  doc.setFillColor(...LARANJA);
  doc.rect(0, 30, largura, 1.5, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.text('LIGA VALE PARAIBANA DE KARATÊ - LVPK', margem, 13);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.text('Karatê Esportivo  |  Ficha de Cadastro para Filiação', margem, 21);

  // Título
  let y = 44;
  doc.setTextColor(...TEXTO);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(ficha.titulo, margem, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...CINZA);
  doc.text(ficha.subtitulo, margem, y);
  y += 10;

  // Campos
  for (const campo of ficha.campos) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...CINZA);
    doc.text(campo.rotulo.toUpperCase(), margem, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(...TEXTO);
    const linhas = doc.splitTextToSize(campo.valor || '-', larguraUtil) as string[];
    doc.text(linhas, margem, y);
    y += linhas.length * 5 + 1.5;

    doc.setDrawColor(226, 232, 240);
    doc.line(margem, y, largura - margem, y);
    y += 6;
  }

  // Assinaturas
  y = Math.max(y + 12, altura - 75);
  const colunas = ficha.assinaturas.length;
  const espaco = 10;
  const larguraAssinatura = (larguraUtil - espaco * (colunas - 1)) / colunas;
  ficha.assinaturas.forEach((rotulo, i) => {
    const x = margem + i * (larguraAssinatura + espaco);
    doc.setDrawColor(...TEXTO);
    doc.line(x, y, x + larguraAssinatura, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...CINZA);
    doc.text(rotulo, x + larguraAssinatura / 2, y + 4.5, { align: 'center' });
  });
  y += 14;
  doc.setFontSize(9.5);
  doc.setTextColor(...TEXTO);
  doc.text('Local e data: ____________________________, ____/____/________', margem, y);

  // Rodapé com as próximas etapas
  const yRodape = altura - 32;
  doc.setFillColor(241, 245, 249);
  doc.rect(margem, yRodape, larguraUtil, 20, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...AZUL);
  doc.text('PRÓXIMA ETAPA', margem + 4, yRodape + 6);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...TEXTO);
  doc.text(
    doc.splitTextToSize(
      `Envie esta ficha junto com os documentos solicitados para o e-mail ${CONTATO_LIGA.email} ` +
        `ou pelo WhatsApp ${CONTATO_LIGA.telefone}. A diretoria da LVPK entrará em contato para finalizar a filiação.`,
      larguraUtil - 8,
    ) as string[],
    margem + 4,
    yRodape + 11,
  );

  doc.setFontSize(7.5);
  doc.setTextColor(...CINZA);
  doc.text(`Ficha gerada pelo site da LVPK em ${new Date().toLocaleDateString('pt-BR')}`, margem, altura - 6);

  doc.save(ficha.nomeArquivo);
}
