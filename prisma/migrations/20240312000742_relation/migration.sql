-- DropForeignKey
ALTER TABLE "ticketRoadMap" DROP CONSTRAINT "ticketRoadMap_ticketId_fkey";

-- AddForeignKey
ALTER TABLE "ticketRoadMap" ADD CONSTRAINT "ticketRoadMap_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
