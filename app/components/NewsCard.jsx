import Image from 'next/image'
import React from 'react'

export default function NewsCard({ classname, height, title, image,source,description ,url}) {
    console.log(image)
    return (
        <div className={`max-w-sm bg-bright-turquoise-200 bg-opacity-70 rounded-lg shadow overflow-hidden ${classname}`} >
            <figure className={` w-full h-72 ${height} `}>
                <div className=' absolute w-fit h-fit  bg-yellow-500 text-black font-semibold    text-center rounded-sm'>
                    <h2>{source.slice(0,15)}</h2>
                </div>

                <Image
                    src={image?image:"https://picsum.photos/200/300?random=1"}
                    height={500}
                    width={500}
                    alt='foto de la noticia'
                    className='w-full h-full object-cover'
                />

            </figure>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold   text-gray-900">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-900">
                   {description}
                </p>
                <a
                    href={url}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bright-turquoise-950 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    Read more

                </a>
            </div>
        </div>

    )
}
