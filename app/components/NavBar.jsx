"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function NavBar() {
    const [openDrop, setOpenDrop] = useState(false)
    const [openDrop2, setOpenDrop2] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
const [category, setCategory]= useState("")
console.log(category)
    return (
        <>


            <nav className="bg-bright-turquoise-100 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                            <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                        </svg>

                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">NEWS PAGE</span>
                    </a>
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        data-collapse-toggle="navbar-dropdown"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-bright-turquoise-300 "
                        aria-controls="navbar-dropdown"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>



                    {
                        <div className=" w-full  hidden  md:block md:w-auto" id="navbar-dropdown">
                            <ul className="flex bg-bright-turquoise-100 w-full flex-col  font-medium p-4 md:p-0 mt-4   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                                <Link href="/">
                                    <li>
                                        <p className="block py-2 px-3  rounded md:bg-transparent md:text-bright-turquoise-700 md:p-0 md:hover:underline" aria-current="page">Home</p>
                                    </li>

                                </Link>
                                <li className="relative ">
                                    <button
                                        onClick={() => setOpenDrop(!openDrop)}
                                        id="dropdownNavbarLink"
                                        data-dropdown-toggle="dropdownNavbar"
                                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-bright-turquoise-200 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                                    >
                                        <span className='md:hover:underline'>
                                            Idiomas
                                        </span>

                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */
                                        openDrop &&
                                        <div id="dropdownNavbar" className="absolute left-0 z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2">
                                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                            </div>
                                        </div>


                                    }

                                </li>
                                <li className="relative">
                                    <button
                                        onClick={() => setOpenDrop2(!openDrop2)}
                                        id="dropdownNavbarLink"
                                        data-dropdown-toggle="dropdownNavbar"
                                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-bright-turquoise-200  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                                    >
                                        <span className='md:hover:underline'>
                                            Fuentes

                                        </span>
                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */
                                        openDrop2 &&
                                        <div id="dropdownNavbar" className="absolute left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2">
                                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                            </div>
                                        </div>

                                    }


                                </li>
                                <Link
                                    href="/allNews"
                                >
                                    <li>
                                        <p className=" cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-bright-turquoise-200 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0">Lista de noticias</p>

                                    </li>

                                </Link>

                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-bright-turquoise-200 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0">Suscripción</a>
                                </li>

                            </ul>
                        </div>}
                </div>

            </nav>
            <nav className="bg-bright-turquoise-100 border-t-2 border-bright-turquoise-950">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 text-sm">
                            <li onClick={(e)=>setCategory(e.target.textContent.toLowerCase())}
                             className="cursor-pointer text-bright-turquoise-950 hover:underline" >
                            Business
                            </li>
                            <li onClick={(e)=>setCategory(e.target.textContent.toLowerCase())}
                             className="cursor-pointer text-bright-turquoise-950 hover:underline" >
                            Entertainment
                            </li>
                            <li onClick={(e)=>setCategory(e.target.textContent.toLowerCase())}
                             className="cursor-pointer text-bright-turquoise-950 hover:underline" >
                            General
                            </li>
                            <li onClick={(e)=>setCategory(e.target.textContent.toLowerCase())}
                             className="cursor-pointer text-bright-turquoise-950 hover:underline" >
                            Health
                            </li>
                            <li onClick={(e)=>setCategory(e.target.textContent.toLowerCase())}
                             className="cursor-pointer text-bright-turquoise-950 hover:underline" >
                            Science
                            </li>
                            <li onClick={(e)=>setCategory(e.target.textContent.toLowerCase())}
                             className="cursor-pointer text-bright-turquoise-950 hover:underline" >
                            Sports
                            </li>
                            <li onClick={(e)=>setCategory(e.target.textContent.toLowerCase())}
                             className="cursor-pointer text-bright-turquoise-950 hover:underline" >
                            Technology
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}
