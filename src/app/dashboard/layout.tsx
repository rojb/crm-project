import React from 'react';
import { AppBar, Sidebar } from '../components';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="bg-[#F7F9FB] w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white flex flex-col">
            <AppBar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="p-4 w-full text-slate-900 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );


}