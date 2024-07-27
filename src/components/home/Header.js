import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <nav className="bg-white px-20 py-1 border-b-[1px]">
            <div className="flex flex-row gap-20 justify-between items-center">

                <div>
                    <img className=" w-[250px]" src="/ennomart-logo.svg" alt="logo"></img>
                </div>

                <ul className="text-gray-700 font-semibold w-full flex flex-row justify-end gap-3 items-center text-lg">
                    <Link href="/">
                        <li className="block px-4 py-2 text-gray-700  hover:text-indigo-700 cursor-pointer">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="block px-4 py-2 text-gray-700  hover:text-indigo-700 cursor-pointer">About</li>

                    </Link>
                    <Link href="/contact-us">
                        <li className="block px-4 py-2 text-gray-700  hover:text-indigo-700 cursor-pointer">Contact Us</li>
                    </Link>
                    <li>
                        <Link href="/login">
                            <button className="btn-primary ml-5  text-sm">
                                Login / Register
                            </button>
                        </Link>

                    </li>


                </ul>

            </div>

        </nav>
    )
}

export default Header
