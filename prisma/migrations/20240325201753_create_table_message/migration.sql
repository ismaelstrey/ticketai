/*
  Warnings:

  - Added the required column `messagesId` to the `ticketRoadMap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prioridade` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ticketRoadMap" ADD COLUMN     "messagesId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tickets" ADD COLUMN     "prioridade" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ticketRoadMap" ADD CONSTRAINT "ticketRoadMap_messagesId_fkey" FOREIGN KEY ("messagesId") REFERENCES "Messages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
