import { RoadMapProps, TicketProps } from "@/@types/ticketTypes";
import axios from "axios";

export const getTicketApi = async (): Promise<TicketProps[]> =>
  (await axios.get("/api/ticket")).data;

export const createTicketApi = async (
  ticket: TicketProps
): Promise<TicketProps> => {
  const response = await axios.post(`/api/ticket/`, ticket);

  const { id, type } = response.data;

  await postRoadMap({
    className: type,
    message: "Esse ticket foi aberto via api",
    ticketId: id,
    name: "Ticket criado",
  });
  return response.data;
};
export const updateTicketApi = async ({
  id,
  type,
}: TicketProps): Promise<TicketProps> => {
  const response = await axios.patch(`/api/ticket/${id}`, { type: type });
  const ticketId = response.data.id;
  const newType = type ? type : response.data.type;

  await postRoadMap({
    className: newType,
    message: `O ticket foi ${newType}`,
    ticketId: ticketId,
    name: `Ticket criado status ${newType}`,
  });
  return response.data;
};

export const deleteTicketApi = async (id: number): Promise<TicketProps> => {
  const response = await axios.delete(`/api/ticket/${id}`);
  return response.data;
};

export const getClienteApi = async (): Promise<TicketProps[]> =>
  (await axios.get("/api/cliente")).data;

export const postRoadMap = async (
  roadMap: RoadMapProps
): Promise<RoadMapProps> =>
  await axios
    .post(`/api/ticketRoadMap`, roadMap)
    .then((response) => response.data);
