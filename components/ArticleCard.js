import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from './Icons'
export default function ArticleCard() {
    return (
        <div className='flex justify-between items-center mb-4'>
                <div className="mr-3">
                    <p className='text-xs font-semibold text-gray-700'>Sefania Simon <span className='text-gray-500'>in</span> JavaScript In Plain English</p>
                    <Link href='/article'>
                        <a>
                            <h1 className='font-bold text-gray-800 text-lg my-1'>How We Build Micro Frontends</h1>
                            <div className='py-1 text-xs text-gray-700 flex items-center'>
                                <Link href='#'>Read More</Link> <span className='ml-1'>- 8 min read</span> <StarIcon></StarIcon>
                            </div>
                        </a>
                    </Link>
                </div>
                <div>
                    <Image src='https://source.unsplash.com/random/300x300' width={100} height={100}></Image>
                </div>
        </div>
    )
}
