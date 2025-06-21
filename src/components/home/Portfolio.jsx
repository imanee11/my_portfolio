import React, { useContext } from 'react';
import { BsStars } from "react-icons/bs";
import { DarkModeContext } from '../../context/DarkModeContext';



const Portfolio = () => {

    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <>
            <div className='font-syne flex flex-col pt-[10vh]'>
                <div className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
                    <BsStars />
                    <p>Portfolio</p>
                </div>
                <div className='pt-5'>
                    <p className='md:text-[38px] text-[38px] font-syne font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>Check out my featured projects</p>
                </div>
                <div>

                </div>
            </div>
        </>
    );
};

export default Portfolio;