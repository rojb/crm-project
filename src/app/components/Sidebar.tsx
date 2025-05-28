'use client'
import React from 'react';
import Funnel from '../../../public/funnel.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div id="menu" className="bg-white min-h-screen z-10 w-75 left-0 h-screen overflow-y-auto">

            <div id="nav" className="w-full">
                <Link href="funnels" className={`${pathname === '/dashboard/funnels' ? 'bg-active-menu' : ''} flex items-center justify-center h-16 w-full gap-9 transition ease-linear duration-150 hover:bg-active-menu mb-8 text-inactive`}>
                    <Funnel className={pathname === '/dashboard/funnels' ? 'stroke-main fill-none stroke-1 text-main' : ''} /> <span className={`${pathname === '/dashboard/funnels' ? 'text-main font-semibold text-2xl' : ''} text-lg font-poppins`}>Embudos</span>
                </Link>
            </div>
        </div>
    );
}
