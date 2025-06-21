import React, { useContext, useEffect } from 'react';
import { BiMessageDots } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext } from '../../context/DarkModeContext';
import { FiSun, FiMoon } from 'react-icons/fi';




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
        <nav className='fixed top-[5vh] left-[30vw] right-[5vw] z-50 flex justify-between items-center font-syne '>
            {/* Nav content */}
            <ul className="flex gap-3 font-semibold">
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:dark:text-[#E9E9F1] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">Home</li>
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:dark:text-[#E9E9F1] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">Portfolio</li>
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:dark:text-[#E9E9F1] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">About Me</li>
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:dark:text-[#E9E9F1] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">Resume</li>
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:dark:text-[#E9E9F1] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">Contact</li>
            </ul>
            <div className='flex items-center gap-5'>
                <button onClick={() => setDarkMode(!darkMode)} className='bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] dark:hover:dark:text-[#E9E9F1]'>
                    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:bg-gradient-to-r dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-white dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90">
                    Let's Talk! <BiMessageDots />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
