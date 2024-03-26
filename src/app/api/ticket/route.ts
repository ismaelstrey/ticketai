import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await prisma.ticket.findMany({
    orderBy: {
      upadted_at: "desc",
    },
    select: {
      id: true,
      name: true,
      description: true,
      type: true,
      views: true,
      status: true,
      client: true,
      ticketRoadMap: true,
      created_at: true,
      upadted_at: true,
    },
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const dataTicket = await request.json();
  dataTicket.clientId = Number(dataTicket.clientId);

  const salvaTicket = await prisma.ticket.create({
    data: {
      name: dataTicket.name,
      description: dataTicket.description,
      clientId: dataTicket.clientId,
      ticketRoadMap: {
        create: {
          className: "ABERTO",
          name: "Ticket criado",
          messages: {
            create: {
              message: "Criação do ticket",
              title: "TicketCriado",
              type: "info",
            },
          },
        },
      },
    },
  });

  // console.log(salvaTicket);

  return NextResponse.json({ salvaTicket });
}
