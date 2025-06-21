import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";



const SideBar = () => {
    return (
        // EBF0F7
        <nav className="bg-[#EBF0F7] border border-[#d2d6e1] rounded-3xl min-h-[90vh]  md:w-[23vw] w-full  p-5 md:fixed md:top-1/2 md:transform md:-translate-y-1/2 flex flex-col justify-center font-syne">
            {/* logo */}
            <div className="mb-4">
                <p className="font-bold text-center text-[#22232c]">Imane El Ouannane</p>
            </div>

            {/* img part */}
            <div className="mb-4">
                <img
                    src="https://mixdesign.dev/themeforest/braxton/img/avatars/1024x1024_a01.webp"
                    alt=""
                    className="rounded-3xl object-cover"
                />
            </div>

            {/* info */}
            <div className="">
                <p className="text-[#424550] text-[13px]">Specialization:</p>
                <p className='text-[#22232c] font-bold pb-1'>Full-Stack Developer</p>
                <p className="text-[#424550] text-[13px]">Based in:</p>
                <p className='text-[#22232c] font-bold'>Casablanca, Morocco</p>
            </div>
            <div className='flex gap-2 pt-2 mb-4'>
                <div className='text-[#424550] border border-[#abb3c3] w-10 h-10 flex items-center justify-center rounded-2xl hover:scale-105 transition-transform duration-300'>
                    <a href=""><FaLinkedinIn /></a>
                </div>
                <div className='text-[#424550] border border-[#abb3c3] w-10 h-10 flex items-center justify-center rounded-2xl hover:scale-105 transition-transform duration-300'>
                    <a href=""><FaGithub /></a>
                </div>
            </div>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90">
                Let's Work Together!
            </button>
        </nav>
    );
};

export default SideBar;
