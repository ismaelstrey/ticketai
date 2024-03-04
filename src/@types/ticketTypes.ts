
export interface TicketProps {
    id: number
    name: string
    description: string
    views?: number
    type?: string
}
export interface CardProps extends TicketProps {

    edit?: (id: number) => void
    deleta?: (id: number) => void
    more?: (id: number) => void
}
export interface ColumnKanbamProps {
    title: string
    tickets: CardProps[]
}