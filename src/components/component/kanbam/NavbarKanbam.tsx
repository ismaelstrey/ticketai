import { MenuIcon, SearchIcon, BellIcon } from '@/components/ui/icons'
import React from 'react'

function NavbarKanbam() {
    return (
        <>   <header className="flex items-center justify-between p-4 bg-[#111827]">
            <MenuIcon className="text-white" />
            <SearchIcon className="text-white" />
            <BellIcon className="text-white" />
        </header></>
    )
}

export default NavbarKanbam