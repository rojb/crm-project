import React from 'react';

export const AppBar = () => {
    return (
        <div className='flex w-full h-16'>
            <div className="">
                <h1>LeadTrack</h1>
            </div>
            <div className="flex">
                <div className="">Buscar</div>
                <div className="">Filtros</div>
            </div>
        </div>
    )
}
