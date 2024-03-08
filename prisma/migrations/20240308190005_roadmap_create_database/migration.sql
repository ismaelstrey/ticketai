-- CreateTable
CREATE TABLE "ticketRoadMap" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'ABERTO',
    "message" TEXT NOT NULL DEFAULT 'Criado',
    "className" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadted_at" TIMESTAMP(3) NOT NULL,
    "ticketId" INTEGER NOT NULL,

    CONSTRAINT "ticketRoadMap_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ticketRoadMap" ADD CONSTRAINT "ticketRoadMap_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
