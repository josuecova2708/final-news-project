"use client"
import React, { useState } from "react";
export default function SearchInput({ onSearch }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onSearch(value);
    };

    return (
        <form className="max-w-md mx-auto pt-5" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Buscar
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-bright-turquoise-950 border-bright-turquoise-500 rounded-lg"
                    placeholder="Search by title, or description"
                    value={inputValue}
                    onChange={handleChange} required
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 font-medium bg-bright-turquoise-900 rounded-lg text-sm px-4 py-2"
                >
                    Search
                </button>
            </div>
        </form>
    );
}
