import React from 'react'
import Link from 'next/link'
import { AddIcon, DashboardIcon, PostIcon } from '../components/Icons'
import { useRouter } from 'next/router'

export default function VerticalMenu() {
    const router = useRouter()
    return (
        <div>
            <ul className='flex flex-col md:text-md md:px-2 md:max-w-max mx-auto text-gray-500'>
                <Link href="/">
                        <a className='my-6 mx-auto font-serif font-bold text-3xl text-gray-800'>Copycat</a>
                </Link>
                <div className='hidden md:block'>
                    {
                        router.pathname === '/dashboard' ? <Link href='/dashboard'><a className='flex items-center text-gray-800'><DashboardIcon></DashboardIcon><li className='ml-2 py-3'>Dashboard</li></a></Link> : <Link href='/dashboard'><a className='flex items-center'><DashboardIcon></DashboardIcon><li className='ml-2 py-3'>Dashboard</li></a></Link>
                    }
                    {
                        router.pathname === '/my-posts' ? <Link href='/my-posts'><a className='flex items-center text-gray-800'><PostIcon></PostIcon><li className='ml-2 py-3'>My Posts</li></a></Link> : <Link href='/my-posts'><a className='flex items-center'><PostIcon></PostIcon><li className='ml-2 py-3'>My Posts</li></a></Link>
                    }
                    {
                        router.pathname === '/new-post' ? <Link href='/new-post'><a className='flex items-center text-gray-800'><AddIcon></AddIcon><li className='ml-2 py-3'>Create New Post</li></a></Link> : <Link href='/new-post'><a className='flex items-center'><AddIcon></AddIcon><li className='ml-2 py-3'>Create New Post</li></a></Link>
                    }
                </div>
        </ul>
                <div className='md:hidden fixed bottom-0 w-full bg-gray-200 z-10'>

                    <div className='flex justify-around'>
                        {/* Mobile Menu */}
                    {
                            router.pathname === '/dashboard' ? <Link href='/dashboard'><a className='flex items-center text-gray-800 py-3'><DashboardIcon></DashboardIcon></a></Link> : <Link href='/dashboard'><a className='flex items-center'><DashboardIcon></DashboardIcon></a></Link>
                        }
                        {
                            router.pathname === '/my-posts' ? <Link href='/my-posts'><a className='flex items-center text-gray-800 py-3'><PostIcon></PostIcon></a></Link> : <Link href='/my-posts'><a className='flex items-center'><PostIcon></PostIcon></a></Link>
                        }
                        {
                            router.pathname === '/new-post' ? <Link href='/new-post'><a className='flex items-center text-gray-800 py-3'><AddIcon></AddIcon></a></Link> : <Link href='/new-post'><a className='flex items-center'><AddIcon></AddIcon></a></Link>
                        }
                    </div>
                </div>

        </div>
            
            
    )
}
