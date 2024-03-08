export interface TicketProps {
  id?: number;
  name: string;
  description: string;
  views?: number;
  type?: string;
}
export interface CurretDataTicket {
  curretData: TicketProps[];
}
export interface CardProps extends TicketProps {
  // index: number;
  edit?: (id: number) => void;
  deleta?: (id: number) => void;
  more?: (id: number) => void;
  client?: ClientProps;
  roadMap?: RoadMapProps[];
}
export interface ColumnKanbamProps {
  title: string;
  tickets?: CardProps[];
}
export interface ClientProps {
  id: number;
  name: string;
  description: string;
  views: number | null;
  type: string;
  user?: UserProps[];
  ticket?: TicketProps[];
}
export interface UserProps {
  id: number;
  email: string;
  name: string;
  client?: ClientProps[];
  clientId?: number | null;
}
export interface ClientProps {
  id: number;
  name: string;
  description: string;
  views: number | null;
  type: string;
  user?: UserProps[];
  ticket?: TicketProps[];
}

export interface RoadMapProps {
  className: string;
  data: string;
  name: string;
  message: string;
  ticketId: number;
}
