import React from 'react'

export default function StatusCard({text}) {
    return (
        <div className='sm:col-span-6 lg:col-span-4 p-4 bg-white shadow-xs transition duration-300 hover:shadow-lg text-gray-600 hover:text-gray-900 rounded-lg h-80 relative'>
            <h1 className='text-lg absolute bottom-3'>{text}</h1>
        </div>
    )
}
