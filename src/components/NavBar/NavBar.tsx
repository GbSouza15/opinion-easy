'use client'

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { caveat } from "@/lib/fonts";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    
    return (
        <nav className="flex items-center justify-between w-full bg-white z-10">
            <div className="flex items-center justify-between w-full border-b-[1px] p-4 border-black">
                <h1 className={`${caveat.className} text-xl`}>OpinionEasy</h1>
                <button className="text-2xl">
                    {isOpen ? <IoMdClose onClick={toggleMenu} /> : <IoMdMenu onClick={toggleMenu} />}
                </button>
            </div>

            {isOpen && (
                <ul className="flex flex-col items-center justify-center gap-10 w-full bg-white py-12 absolute top-12 left-0 right-0 z-50">
                    <li className="">Home</li>
                    <li className="">About</li>
                    <li className="">Contact</li>
                </ul>
            )}
        </nav>
    )
}