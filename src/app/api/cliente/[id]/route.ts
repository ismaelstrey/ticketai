import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const idClient = Number(params.id);
    const result = await prisma.client.delete({ where: { id: idClient } });

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const idTicket = Number(params.id);
    const data = await request.json();
    const result = await prisma.ticket.update({
      where: { id: idTicket },
      data,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
