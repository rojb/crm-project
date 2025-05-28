import React from 'react';
import { AppBar, Sidebar } from '../components';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="bg-[#F7F9FB] w-full h-screen antialiased text-slate-300 selection:bg-main-600 selection:text-white grid grid-rows-[auto_1fr]">
            <AppBar />
            <div className="grid grid-cols-[auto_1fr] overflow-hidden">
                <Sidebar />
                <div className="p-4 w-full text-slate-900 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );


}