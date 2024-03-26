-- DropForeignKey
ALTER TABLE "ticketRoadMap" DROP CONSTRAINT "ticketRoadMap_messagesId_fkey";

-- AddForeignKey
ALTER TABLE "ticketRoadMap" ADD CONSTRAINT "ticketRoadMap_messagesId_fkey" FOREIGN KEY ("messagesId") REFERENCES "Messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
