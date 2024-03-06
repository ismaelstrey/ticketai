import { TicketProps } from "@/@types/ticketTypes";

export const filtraTicketType = (ticket: TicketProps[], type: string): TicketProps[] => ticket.filter((value) => value.type === type)
export const filtraTiketPorId = async (id: number, lista: TicketProps[]): Promise<TicketProps> => lista.filter((list) => list.id == id)[0]

