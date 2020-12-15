import React from 'react'
import StatusCard from '../components/StatusCard'
import VerticalMenu from '../components/VerticalMenu'

export default function dashboard() {
    return (
        <div className=''>
            <div className='grid grid-cols-12'>
                <div className="col-span-2 h-screen border-r-2 border-gray-100">
                    <VerticalMenu></VerticalMenu>
                </div>
                <div className='col-span-10 bg-gray-100'>
                    <div className='mt-20 px-6'>
                        <div>
                            <h1 className='text-4xl font-semibold text-gray-700'>Good Evening,<span className="text-gray-400 hover:text-gray-800">Knight!</span> </h1>
                        </div>
                        <div className='grid grid-cols-3 gap-8'>
                            <StatusCard text={'Total Posts: 25'}></StatusCard>
                            <StatusCard text={'Comments: 315'}></StatusCard>
                            <StatusCard text={'Page Views: 26556'}></StatusCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
