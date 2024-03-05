import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const idTicket = Number(params.id);
    console.log(idTicket);
    const result = prisma.ticket.deleteMany({ where: { id: idTicket } });
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
