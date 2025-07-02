import React, { useContext, useEffect } from 'react';
import {
    BiMessageDots,
    BiHomeAlt,
    BiBriefcase,
    BiUser,
    BiFile,
    BiPhone,
} from "react-icons/bi";
import { FiSun, FiMoon } from 'react-icons/fi';
import { DarkModeContext } from '../../context/DarkModeContext';

const NavBar = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark', 'bg-[#111111]');
        } else {
            document.body.classList.remove('dark', 'bg-[#111111]');
        }
    }, [darkMode]);

    return (
        <>
            {/* ✅ Desktop NavBar */}
            <nav className='hidden lg:flex fixed top-[5vh] left-[30vw] right-[5vw] z-50 justify-between items-center font-syne'>
                <ul className="flex gap-3 font-semibold">
                    {['Home', 'Portfolio', 'About Me', 'Resume', 'Contact'].map((item, index) => (
                        <li key={index} className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:text-[#E9E9F1] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">
                            {item}
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-5'>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className='bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:text-[#E9E9F1]'
                    >
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-white dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90">
                        Let's Talk! <BiMessageDots />
                    </button>
                </div>
            </nav>

            {/* ✅ Mobile Bottom NavBar */}
            <>
                {/* Mobile Bottom Navbar with all icons inline */}
                <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-transparent backdrop-blur-[20px] dark:bg-[#1a1a1a]/60 rounded-full flex justify-between items-center z-40">
                    <div className='px-3 py-3 flex items-center justify-center'>
                        <BiHomeAlt size={20} className="text-[#717586]" />
                    </div>
                    <div className='px-3 py-3 flex items-center justify-center'>
                        <BiBriefcase size={20} className="text-[#717586]" />
                    </div>
                    <div className='px-3 py-3 flex items-center justify-center'>
                        <BiUser size={20} className="text-[#717586]" />
                    </div>
                    <div className='px-3 py-3 flex items-center justify-center'>
                        <BiFile size={20} className="text-[#717586]" />
                    </div>
                    <div className='px-3 py-3 flex items-center justify-center'>
                        <BiPhone size={20} className="text-[#717586]" />
                    </div>
                    {/* Dark mode toggle inline as well */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="rounded-full text-[#717586] dark:text-[#E9E9F1] transition-transform px-3 py-3 flex items-center justify-center"
                    >
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                    {/* Add Let's Talk button inline here */}
                    <button className="flex items-center gap-1 bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-white dark:text-[#22232c] px-3 py-3 rounded-[20px] transition-transform">
                        <BiMessageDots size={20} />
                        {/* <span>Let's Talk</span> */}
                    </button>
                </div>
            </>

        </>
    );
};

export default NavBar;
