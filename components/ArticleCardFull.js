import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon } from './Icons'
export default function ArticleCard() {
    return (
        <div className=''>
            <div className="object-cover">
                <Image src='https://source.unsplash.com/random/1600x1200' width={800} height={600} priority={true}></Image>
            </div>
            
            <div className='pt-1'>
                <p className='text-xs font-semibold text-gray-700'>Sefania Simon <span className='text-gray-500'>in</span> JavaScript In Plain English</p>
                <h1 className='text-2xl font-bold my-2 text-gray-800'>The JavaScript Cheatsheet you need in 2021</h1>
                <p className='text-gray-700 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur, esse accusamus praesentium laudantium pariatur!</p>
            </div>
            <div className='py-3 md:py-6 text-sm text-gray-500 flex items-center'>
                <Link href='#'>Read More</Link><span className='ml-1'>- 8 min read</span>  <StarIcon></StarIcon>
            </div>
        </div>
    )
}
