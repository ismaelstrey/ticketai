import { HomeIcon, LayoutDashboardIcon, InboxIcon, UsersIcon, SettingsIcon } from 'lucide-react'
import React from 'react'

function SidebarKanbam() {
    return (
        <><nav className="flex flex-col w-16 bg-[#111827] p-4 space-y-2 min-h-screen gap-4">
            <HomeIcon className="text-white" />
            <LayoutDashboardIcon className="text-white" />
            <InboxIcon className="text-white" />
            <UsersIcon className="text-white" />
            <SettingsIcon className="text-white" />
        </nav></>
    )
}

export default SidebarKanbam