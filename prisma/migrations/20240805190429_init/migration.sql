-- CreateTable
CREATE TABLE "Equipo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "fundado" INTEGER,

    CONSTRAINT "Equipo_pkey" PRIMARY KEY ("id")
);
