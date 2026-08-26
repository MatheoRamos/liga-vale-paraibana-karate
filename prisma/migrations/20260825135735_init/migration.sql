-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ATLETA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atleta" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "registroLvpk" TEXT NOT NULL,
    "dojoId" INTEGER,
    "faixaAtualId" INTEGER,
    "fotoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Atleta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dojo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "endereco" TEXT,
    "cidade" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dojo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faixa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "grau" TEXT,
    "ordem" INTEGER NOT NULL,
    "cor" TEXT,

    CONSTRAINT "Faixa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3),
    "local" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaEvento" (
    "id" SERIAL NOT NULL,
    "eventoId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "modalidade" TEXT,
    "sexo" TEXT,
    "idadeMinima" INTEGER,
    "idadeMaxima" INTEGER,
    "pesoMinimo" DOUBLE PRECISION,
    "pesoMaximo" DOUBLE PRECISION,

    CONSTRAINT "CategoriaEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InscricaoEvento" (
    "id" SERIAL NOT NULL,
    "atletaId" INTEGER NOT NULL,
    "eventoId" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InscricaoEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoricoFaixa" (
    "id" SERIAL NOT NULL,
    "atletaId" INTEGER NOT NULL,
    "faixaId" INTEGER NOT NULL,
    "dataExame" TIMESTAMP(3) NOT NULL,
    "examinador" TEXT,

    CONSTRAINT "HistoricoFaixa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Noticia" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "resumo" TEXT,
    "conteudo" TEXT NOT NULL,
    "categoria" TEXT,
    "imagemCapaUrl" TEXT,
    "dataPublicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visibilidade" TEXT NOT NULL DEFAULT 'PUBLICO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Noticia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recado" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "categoria" TEXT,
    "dataPublicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visibilidade" TEXT NOT NULL DEFAULT 'FILIADOS',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransacaoFinanceira" (
    "id" SERIAL NOT NULL,
    "atletaId" INTEGER NOT NULL,
    "eventoId" INTEGER,
    "tipo" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "status" TEXT NOT NULL,
    "dataVencimento" TIMESTAMP(3) NOT NULL,
    "dataPagamento" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransacaoFinanceira_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Atleta_usuarioId_key" ON "Atleta"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Atleta_registroLvpk_key" ON "Atleta"("registroLvpk");

-- CreateIndex
CREATE UNIQUE INDEX "InscricaoEvento_atletaId_eventoId_categoriaId_key" ON "InscricaoEvento"("atletaId", "eventoId", "categoriaId");

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_dojoId_fkey" FOREIGN KEY ("dojoId") REFERENCES "Dojo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_faixaAtualId_fkey" FOREIGN KEY ("faixaAtualId") REFERENCES "Faixa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriaEvento" ADD CONSTRAINT "CategoriaEvento_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InscricaoEvento" ADD CONSTRAINT "InscricaoEvento_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InscricaoEvento" ADD CONSTRAINT "InscricaoEvento_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InscricaoEvento" ADD CONSTRAINT "InscricaoEvento_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "CategoriaEvento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoFaixa" ADD CONSTRAINT "HistoricoFaixa_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoFaixa" ADD CONSTRAINT "HistoricoFaixa_faixaId_fkey" FOREIGN KEY ("faixaId") REFERENCES "Faixa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransacaoFinanceira" ADD CONSTRAINT "TransacaoFinanceira_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Atleta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransacaoFinanceira" ADD CONSTRAINT "TransacaoFinanceira_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
