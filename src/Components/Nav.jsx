import React, { useState } from "react";
import {Link} from "react-scroll"
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Nav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-amber-500">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Rutas">
                    <li className="my-4 py-4 border-b border-amber-500 hover:bg-amber-500 hover:rounded">Rutas</li>
                </Link>
                <Link spy={true} smooth={true} to="Historial">
                    <li className="my-4 py-4 border-b border-amber-500 hover:bg-amber-500 hover:rounded">Historial</li>
                </Link>
                <Link spy={true} smooth={true} to="Recuerdos">
                    <li className="my-4 py-4 border-b border-amber-500 hover:bg-amber-500 hover:rounded">Recuerdos</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-3x1 font-bold">Logo</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                <Link spy={true} smooth={true}to="Rutas">
                    <li className="hover:text-lime-500 transition border-b-2 border-lime-50 hover:border-lime-500 cursor-pointer">Rutas</li>
                </Link>
                <Link spy={true} smooth={true} to="Historial">
                    <li className="hover:text-lime-500 transition border-b-2 border-lime-50 hover:border-lime-500 cursor-pointer">Historial</li>
                </Link>
                <Link spy={true} smooth={true} to="Recuerdos">
                    <li className="hover:text-lime-500 transition border-b-2 border-lime-50 hover:border-lime-500 cursor-pointer">Recuerdos</li>
                </Link>
            </ul>
                    </div>
                </div>
                <div>
                    {click && content }
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    );
};

export default Nav