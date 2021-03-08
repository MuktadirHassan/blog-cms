import Link from 'next/link'
import React from 'react'
import VerticalMenu from '../components/VerticalMenu'


export default function myPosts() {
    return (
        <div className=''>
            <div className='grid grid-cols-12'>
                <div className="col-span-2 h-screen border-r-2 border-gray-100">
                    <VerticalMenu></VerticalMenu>
                </div>
                <div>
                    My Post
                </div>
            </div>
        </div>
    )
}
