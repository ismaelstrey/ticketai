import { TicketProps } from "@/@types/ticketTypes";
import axios from "axios";

export const getTicketApi = async (): Promise<TicketProps[]> =>
  (await axios.get("/api/ticket")).data;

export const updateTicketApi = async ({
  id,
  type,
}: TicketProps): Promise<TicketProps> => {
  console.log(id);
  const response = await axios.patch(`/api/ticket/${id}`, { type: type });

  return response.data;
};
