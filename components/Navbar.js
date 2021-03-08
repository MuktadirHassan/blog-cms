import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({className}) {
    return (
        <div className={className}>
            <div className="py-6 flex items-center justify-between">
                
                <Link href="/">
                    <a className='font-serif font-bold text-3xl text-gray-800'>Copycat</a>
                </Link>
                
                <div>
                    <Image className='rounded-full' src='https://source.unsplash.com/random/25x25' width={25} height={25}></Image>
                </div>
            </div>
        </div>
    )
}
