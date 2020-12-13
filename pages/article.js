import Image from 'next/image'

import React from 'react'
import Navbar from '../components/Navbar'
export default function Article() {
    return (
        <div>
            <Navbar className='mx-auto pb-4 px-6 md:w-5/6'></Navbar>
            <article>
                <header className='mx-auto pb-4 px-6 md:w-5/6 lg:w-3/5'>
                        <h1 className='font-serif text-3xl sm:text-5xl text-gray-900 sm:my-3'>
                            How I structure React apps.
                        </h1>
                    <p className='text-bg sm:text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </header>
                <Image className='' src='https://source.unsplash.com/random/2560x700' width={2560} height={700}></Image>
                <section className='mx-auto py-4 px-6 md:w-5/6 lg:w-3/5 text-sm sm:text-lg'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maxime culpa vitae unde molestiae quod eos blanditiis incidunt sunt voluptatibus qui, fugit eligendi, debitis officia?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maxime culpa vitae unde molestiae quod eos blanditiis incidunt sunt voluptatibus qui, fugit eligendi, debitis officia?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maxime culpa vitae unde molestiae quod eos blanditiis incidunt sunt voluptatibus qui, fugit eligendi, debitis officia?</p>
                </section>
            </article>
        </div>
    )
}
