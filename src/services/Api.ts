import { TicketProps } from "@/@types/ticketTypes";
import axios from "axios";

export const getTicketApi = async (): Promise<TicketProps[]> =>
  (await axios.get("/api/ticket")).data;

export const updateTicketApi = async ({
  id,
  type,
}: TicketProps): Promise<TicketProps> => {
  const response = await axios.patch(`/api/ticket/${id}`, { type: type });
  return response.data;
};
export const deleteTicketApi = async (id: number): Promise<TicketProps> => {
  const response = await axios.delete(`/api/ticket/${id}`);
  return response.data;
};

export const getClienteApi = async (): Promise<TicketProps[]> =>
  (await axios.get("/api/cliente")).data;
