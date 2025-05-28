import React from 'react';

export const AppBar = () => {
    return (
        <div className="shadow-md px-3 bg-white">
            <div className="flex w-full justify-between py-2 max-w-7xl mx-auto">
                <div className="">
                    <h1><span className="text-main font-semibold text-4xl">Lead</span><span className="text-secondary font-semibold text-4xl">Track</span></h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-background rounded-2xl w-96 px-4 h-9 shadow-sm">
                        <img src="/search.svg" alt="Buscar" className="w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Buscar prospectos"
                            className="w-full bg-transparent text-black focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center bg-background rounded-2xl px-4 h-9 shadow-sm cursor-pointer">
                        <img src="/filters.svg" alt="Buscar" className="w-5 h-5" />
                        <p className="pl pr-3">Filtros</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
