import React from 'react';
import { BiMessageDots } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";



const NavBar = () => {
    return (
        <nav className='fixed top-[5vh] left-[30vw] right-[5vw] z-50 flex justify-between items-center font-syne '>
            {/* Nav content */}
            <ul className="flex gap-3 font-semibold">
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">Home</li>
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">Portfolio</li>
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">About Me</li>
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">Resume</li>
                <li className="text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c] bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 font-semibold">Contact</li>
            </ul>
            <div className='flex items-center gap-5'>
                <button className='bg-transparent backdrop-blur-[5px] rounded-3xl px-4 py-3 text-[#717586] cursor-pointer transition duration-300 hover:text-[#22232c]'>
                    <MdOutlineDarkMode size={20} className=' '/>
                </button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90">
                    Let's Talk! <BiMessageDots/>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
