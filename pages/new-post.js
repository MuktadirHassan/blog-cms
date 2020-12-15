import Link from 'next/link'
import React from 'react'
import TagsInput from '../components/TagsInput'
import VerticalMenu from '../components/VerticalMenu'


export default function newPost() {
    // Date for current date of writing post
    let date = new Date(Date.now())


    
    const selectedTags = metaTags => {
    // Access meta tags here
        console.log(metaTags);
    }
    return (
        <div className=''>
            <div className='grid grid-cols-12'>
                <div className="col-span-2 h-screen border-r-2 border-gray-100">
                   <VerticalMenu></VerticalMenu>
                </div>
                <div className='col-span-10 bg-gray-100'>
                    <div className='mt-20 px-6 grid grid-cols-12 gap-4'>
                        <div className='col-span-9'>
                            <form action="" className='flex flex-col'>
                                <input type="text" className='p-4 mb-4 rounded' placeholder='Title'/>
                                <TagsInput selectedTags={selectedTags} tags={[]} purpose='Meta Tags'></TagsInput>
                                <textarea name="article" className='p-4 mb-4 rounded' id="article" placeholder='Write your post here' cols="30" rows="10"></textarea>
                                <input type="file" className='py-4' placeholder='Upload Image'/>
                            </form>
                        </div>
                        <div className="col-span-3 flex flex-col">
                            <button className='bg-gray-800 text-white py-4 px-12 rounded-lg font-semibold transition hover:bg-gray-900 hover:shadow-lg mb-3'>Publish</button>

                            <div className='bg-white mb-3 rounded-lg p-3 shadow'>
                                <p className='text-gray-500'>Author</p>
                                <p>Muktadir Hassan</p>
                            </div>
                            <div className='bg-white mb-3 rounded-lg p-3 shadow'>
                                <p className='text-gray-500'>Post Date</p>
                                <p>{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>  
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
