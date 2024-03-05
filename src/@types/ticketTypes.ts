export interface TicketProps {
  id: number;
  name: string;
  description: string;
  views?: number;
  type?: string;
}
export interface CardProps extends TicketProps {
  edit?: (id: number) => void;
  deleta?: (id: number) => void;
  more?: (id: number) => void;
}
export interface ColumnKanbamProps {
  title: string;
  tickets: CardProps[];
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
