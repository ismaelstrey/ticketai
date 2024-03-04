import React from 'react'
import Card from '../Card'
import { ColumnKanbamProps } from '@/@types/ticketTypes'

function ColumnKanbam({ title, tickets }: ColumnKanbamProps) {
    const ListaTicket = () => tickets.map(ticket => <Card {...ticket} />)
    return (
        <>
            <section className="bg-[#1F2937] p-4 md:p-4 rounded-lg">
                <h2 className="text-white mb-4">{title}</h2>
                <div className="space-y-4">
                    <ListaTicket />
                </div>
            </section>
        </>
    )
}

export default ColumnKanbam