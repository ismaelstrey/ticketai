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
  const data = await request.json();
  data.clientId = Number(data.clientId);
  console.log(data);
  const salva = await prisma.ticket.create({ data });
  return NextResponse.json(salva);
}
