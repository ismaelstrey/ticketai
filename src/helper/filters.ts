import { TicketProps } from "@/@types/ticketTypes";

export const filtraTicketType = (ticket: TicketProps[], type: string): TicketProps[] => ticket.filter((value) => value.type === type)