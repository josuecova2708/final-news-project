"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { CategoryContext } from '@/CategoryContext'
import axios from 'axios'
import { usePathname } from 'next/navigation'
export default function NavBar() {
    const [openDrop, setOpenDrop] = useState(false)
    const [openDrop2, setOpenDrop2] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const { category, setCategory } = useContext(CategoryContext);
    const { lan, setLan } = useContext(CategoryContext)
    const { sour, setSour } = useContext(CategoryContext)
    const pathname = usePathname()


    const languages = ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "sv", "ud", "zh"]
    const [sources, setSources] = useState([])
    const fetchSources = async () => {
        const key = "dc5ab85cd64f44f5abd51c8c10ef366f";
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines/sources?language=${lan}&apiKey=${key}`
        );
        return response.data.sources;
    };
    useEffect(() => {
        try {
            fetchSources().then((data) => {
                setSources(data);
            });
        } catch (error) {
            console.log(error.message);
        }
    }, [lan]);

    console.log(sources);
    function useMediaQuery(query) {
        const [matches, setMatches] = useState(false);

        useEffect(() => {
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = () => setMatches(media.matches);
            media.addListener(listener);
            return () => media.removeListener(listener);
        }, [query, matches]);

        return matches;
    }
    const isMdScreen = useMediaQuery('(min-width: 768px)');
    console.log(openMenu)
    console.log(isMdScreen)
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



                    {(openMenu || isMdScreen) &&
                        <div className=" w-full       md:block md:w-auto" id="navbar-dropdown">
                            <ul className="flex bg-bright-turquoise-100 w-full flex-col  font-medium p-4 md:p-0 mt-4   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                                <Link href="/">
                                    <li onClick={() => setOpenMenu(false)}>
                                        <p className="block py-2 px-3  rounded md:bg-transparent md:text-bright-turquoise-700 md:p-0 md:hover:underline" aria-current="page">Home</p>
                                    </li>

                                </Link>
                                <Link
                                    href="/allNews"
                                >
                                    <li onClick={() => setOpenMenu(false)}>
                                        <p className=" cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-bright-turquoise-200 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0">News List</p>

                                    </li>

                                </Link>
                                {pathname !== "/" &&
                                    <>
                                        <li className="relative ">
                                            <button
                                                onClick={() => {
                                                    setOpenDrop(!openDrop)
                                                    setOpenDrop2(false)
                                                    setOpenMenu(true)
                                                }
                                                }
                                                id="dropdownNavbarLink"
                                                data-dropdown-toggle="dropdownNavbar"
                                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-bright-turquoise-200 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                                            >
                                                <span className='md:hover:underline'>
                                                    Languages
                                                </span>

                                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>
                                            {/* Dropdown menu */
                                                openDrop &&
                                                <div id="dropdownNavbar" className="absolute left-0 z-10  font-normal bg-bright-turquoise-50 divide-y divide-gray-100 rounded-lg shadow w-44 mt-2">
                                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">

                                                        {languages.map((item, index) =>
                                                            <li key={index}
                                                                className="block px-4 py-2 hover:bg-bright-turquoise-300 hover:cursor-pointer"
                                                                onClick={(e) => setLan(e.target.textContent)}
                                                            >{item}</li>

                                                        )
                                                        }
                                                    </ul>
                                                </div>
                                            }

                                        </li>
                                        <li className="relative">
                                            <button
                                                onClick={() => {
                                                    setOpenDrop2(!openDrop2)
                                                    setOpenDrop(false)
                                                    setOpenMenu(true)
                                                }}
                                                id="dropdownNavbarLink"
                                                data-dropdown-toggle="dropdownNavbar"
                                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-bright-turquoise-200  md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                                            >
                                                <span className='md:hover:underline'>
                                                    Sources

                                                </span>
                                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>
                                            {/* Dropdown menu */
                                                openDrop2 &&
                                                <div id="dropdownNavbar" className="absolute left-0 z-10 font-normal bg-bright-turquoise-50 divide-y divide-gray-100 rounded-lg shadow w-44 h-56 overflow-auto mt-2">
                                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                        {sources.map((item, index) =>
                                                            <li key={index}
                                                                className="block px-4 py-2 hover:bg-bright-turquoise-300 hover:cursor-pointer"
                                                                onClick={(e) => setSour(e.target.textContent)}
                                                            >{item?.id}</li>
                                                        )
                                                        }

                                                    </ul>

                                                </div>

                                            }


                                        </li>
                                    </>
                                }
                               
                            </ul>
                        </div>}
                </div>

            </nav>

            {pathname !== "/allNews" && (
                <nav className="bg-bright-turquoise-100 border-t-2  border-bright-turquoise-950">
                    <div className=" max-w-screen-xl px-4 py-3 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row flex-wrap font-medium mt-0 space-x-8 text-sm">
                                <li
                                    onClick={(e) => setCategory(e.target.textContent.toLowerCase())}
                                    className="cursor-pointer text-bright-turquoise-950 hover:underline"
                                >
                                    Business
                                </li>
                                <li
                                    onClick={(e) => setCategory(e.target.textContent.toLowerCase())}
                                    className="cursor-pointer text-bright-turquoise-950 hover:underline"
                                >
                                    Entertainment
                                </li>
                                <li
                                    onClick={(e) => setCategory(e.target.textContent.toLowerCase())}
                                    className="cursor-pointer text-bright-turquoise-950 hover:underline"
                                >
                                    General
                                </li>
                                <li
                                    onClick={(e) => setCategory(e.target.textContent.toLowerCase())}
                                    className="cursor-pointer text-bright-turquoise-950 hover:underline"
                                >
                                    Health
                                </li>
                                <li
                                    onClick={(e) => setCategory(e.target.textContent.toLowerCase())}
                                    className="cursor-pointer text-bright-turquoise-950 hover:underline"
                                >
                                    Science
                                </li>
                                <li
                                    onClick={(e) => setCategory(e.target.textContent.toLowerCase())}
                                    className="cursor-pointer text-bright-turquoise-950 hover:underline"
                                >
                                    Sports
                                </li>
                                <li
                                    onClick={(e) => setCategory(e.target.textContent.toLowerCase())}
                                    className="cursor-pointer text-bright-turquoise-950 hover:underline"
                                >
                                    Technology
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}

        </>

    )
}
