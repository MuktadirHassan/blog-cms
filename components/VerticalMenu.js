import React from 'react'
import Link from 'next/link'
import { AddIcon, DashboardIcon, PostIcon } from '../components/Icons'
import { useRouter } from 'next/router'

export default function VerticalMenu() {
    const router = useRouter()
    return (
        <ul className='flex flex-col text-md max-w-max mx-auto text-gray-500'>
            <Link href="/">
                    <a className='my-6 font-serif font-bold text-3xl text-gray-800'>Copycat</a>
            </Link>
            {
                router.pathname === '/dashboard' ? <Link href='/dashboard'><a className='flex items-center text-gray-800'><DashboardIcon></DashboardIcon><li className='ml-2 py-3'>Dashboard</li></a></Link> : <Link href='/dashboard'><a className='flex items-center'><DashboardIcon></DashboardIcon><li className='ml-2 py-3'>Dashboard</li></a></Link>
            }
            {
                router.pathname === '/my-posts' ? <Link href='/my-posts'><a className='flex items-center text-gray-800'><PostIcon></PostIcon><li className='ml-2 py-3'>My Posts</li></a></Link> : <Link href='/my-posts'><a className='flex items-center'><PostIcon></PostIcon><li className='ml-2 py-3'>My Posts</li></a></Link>
            }
            {
                router.pathname === '/new-post' ? <Link href='/new-post'><a className='flex items-center text-gray-800'><AddIcon></AddIcon><li className='ml-2 py-3'>Create New Post</li></a></Link> : <Link href='/new-post'><a className='flex items-center'><AddIcon></AddIcon><li className='ml-2 py-3'>Create New Post</li></a></Link>
            }
            
            
        </ul>
    )
}
