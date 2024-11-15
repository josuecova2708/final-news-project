import Image from 'next/image'
import React from 'react'

export default function NewsCardMini() {
  return (
    <div className= {`w-40 bg-bright-turquoise-200  bg-opacity-70 rounded-lg shadow overflow-hidden` } >
            <figure className={`w-full h-28 `}>
                <div className=' absolute w-fit  h-4  bg-bright-turquoise-50 text-center rounded-sm'>
                    <h2 className='text-xs font-semibold text-bright-turquoise-950'>FUENTE</h2>
                </div>

                <Image
                    src="https://picsum.photos/200/300?random=1"
                    height={1000}
                    width={1000}
                    alt='xd'
                    className='w-full h-full object-cover'
                />

            </figure>
            <div className="p-2 ">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        TITULO DE LA NOTICIA
                    </h5>
                </a>
                <p className="mb-3 text-sm text-gray-700">
                    Here are the biggest enterprise technology acquisitions of 2021 
                </p>
                <a
                    href="#"
                    className="inline-flex items-center px-1 py-2 text-sm text-center text-white bg-bright-turquoise-950 rounded-lg "
                >
                    Read more

                </a>
            </div>
        </div>
 )
}
