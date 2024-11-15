import React from 'react'
import SearchInput from '../components/SearchInput'
import NewsCard from '../components/NewsCard'

export default function page() {
    return (
        <div className='w-full min-h-screen bg-bright-turquoise-950 '>
            <h1 className='text-bright-turquoise-100 text-center text-3xl pt-4'>
                Revisa las noticias
            </h1>
            <SearchInput />
            <div className='container max-w-screen-xl flex justify-center mx-auto'>

                <div className=' grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-7 px-3'>
                 
                </div>
            </div>
        </div>
    )
}
