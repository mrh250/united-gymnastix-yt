"use client";

import React, { useEffect, useState } from 'react'
import { TbBrandFacebook, TbBrandInstagram, TbGymnastics } from "react-icons/tb";
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {

    const [navbg, setNavbg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavbg(true);
            if (window.scrollY < 90) setNavbg(false);
        };
        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div className={`transition-all ${navbg ? 'bg-black shadow-md' : 'fixed bg-black'} duration-200 h-[12vh] z-[100] fixed w-full`}>
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/*  LOGO   */}
                <div className="flex items-center space-x-0">
                    <div className="w-8 h-8 bg-black flex items-center justify-center flex-col">
                        <TbGymnastics className="w-6 h-6 text-yellow-400 " />
                    </div>
                    <h1 className='text-2xl hidden sm:block md:text-2xl text-yellow-400 bg-black font-bold'> UNITED </h1>
                </div>
                {/*  SOCIAL MEDIA  */}
                <div className="flex items-center space-x-0">
                    <div className="w-8 h-8 bg-black flex items-center justify-center flex-col">
                        <Link href="https://www.facebook.com/unitedgymnastix/" passHref legacyBehavior>
                            <a target="_blank" rel="noreferrer">
                                <TbBrandFacebook className="w-6 h-6 text-yellow-400 " />
                            </a>
                        </Link>
                    </div>
                    <div className="w-8 h-8 bg-black flex items-center justify-center flex-col">
                        <Link href="https://www.instagram.com/unitedgymnastix/?hl=en" passHref legacyBehavior>
                            <a target="_blank" rel="noreferrer">
                                <TbBrandInstagram className="w-6 h-6 text-yellow-400 " />
                            </a>
                        </Link>
                    </div>
                </div>
                {/*  NavLinks   */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return (
                            <Link
                                href={link.url}
                                key={link.id}
                                className="text-white bg-black hover:text-yellow-400 font-semibold transition-all duration-200">
                                <p> {link.label} </p>
                            </Link>
                        );
                    })}
                </div>
                {/* buttons */}
                <div className="flex items-center space-x-4">
                    <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-yellow-400 transition-all duration-300 bg-black rounded-md cursor-pointer group ring-offset-2 ring-1 ring-yellow-400 ring-offset-yellow-400 hover:ring-offset-yellow-800 ease focus:outline-none">
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-black opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-black opacity-10 group-hover:translate-x-0"></span>
                        <span className="relative z-20 flex items-center text-sm">
                            <svg className="relative w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Create Account
                        </span>
                    </a>
                    {/* Burger Menu */}
                    <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-yellow-400 lg:hidden" />
                </div>
            </div>
        </div>
    );
};

export default Nav
