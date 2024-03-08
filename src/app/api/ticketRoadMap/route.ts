import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await prisma.ticketRoadMap.findMany({
    select: {
      id: true,
      name: true,
      message: true,
      className: true,
      created_at: true,
      upadted_at: true
    },
  });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const data = await request.json();
  const salva = await prisma.ticketRoadMap.create({ data });
  return NextResponse.json(salva);
}
