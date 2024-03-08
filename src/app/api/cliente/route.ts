import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await prisma.client.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      views: true,
      type: true,
      user: true,
      ticket: true,

    },
  });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const data = await request.json();
  const salva = await prisma.client.create({ data });
  return NextResponse.json(salva);
}
