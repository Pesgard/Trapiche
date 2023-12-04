import React from "react";
import {Link} from "react-scroll"

const Nav = () => {
    const content = <>
        <div className="">
            <ul>
                <Link to="Rutas">
                    <li>Rutas</li>
                </Link>
                <Link to="Historial">
                    <li>Historial</li>
                </Link>
                <Link to="Recuerdos">
                    <li>Recuerdos</li>
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
                <Link to="Rutas">
                    <li>Rutas</li>
                </Link>
                <Link to="Historial">
                    <li>Historial</li>
                </Link>
                <Link to="Recuerdos">
                    <li>Recuerdos</li>
                </Link>
            </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav