import React from 'react'

export default function StatusCard({text}) {
    return (
        <div className='p-4 my-6 bg-white shadow-xs transition duration-300 hover:shadow-lg text-gray-600 hover:text-gray-900 rounded-lg h-80 relative'>
            <h1 className='text-xl font-semibold absolute bottom-3'>{text}</h1>
        </div>
    )
}
