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
  ticketRoadMap?: RoadMapProps[];
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
  created_at?: string;
  name: string;
  message: string;
  ticketId: number;
}
export interface RoadMapItemProps extends RoadMapProps {
  cor?: string;
  user?: string;
  status?: string;
  updated_at?: string;
}
export interface RoadMapPropsArray {
  roadmap: RoadMapItemProps[];
}
