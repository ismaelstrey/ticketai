import React from 'react'
interface PropsOpenFormTicket {
    onClick: () => void
}

function OpenFormTicket({ onClick }: PropsOpenFormTicket) {

    return (
        <div className='fixed bottom-4 right-4'>  <button type="button" onClick={() => onClick()} className='rounded-full bg-slate-100 w-20 h-20 hover:scale-125 '>Add</button></div>
    )
}

export default OpenFormTicket