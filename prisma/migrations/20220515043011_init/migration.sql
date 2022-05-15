-- CreateTable
CREATE TABLE "Usario" (
    "id" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellido" VARCHAR(255) NOT NULL,
    "Correo" VARCHAR(255) NOT NULL,
    "Telefono" INTEGER NOT NULL,
    "Kilos" INTEGER NOT NULL,
    "Playa" VARCHAR(255) NOT NULL,
    "Estado" VARCHAR(255) NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usario_Nombre_key" ON "Usario"("Nombre");
