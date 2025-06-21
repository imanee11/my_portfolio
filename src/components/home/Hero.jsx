import React from 'react';
import { BsStars } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiSquaresFourBold } from "react-icons/pi";
import CircularText from './animation/CircularText';



const Hero = () => {
    return (
        <>
            <div className='font-syne flex flex-col md:h-screen md:pt-[30vh]' >
                <div className='flex items-center gap-2 border border-[#d2d6e1] text-[#424550] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
                    <BsStars />
                    <p>Let's meet!</p>
                </div>
                <div className='pt-5'>
                    <p className='md:text-[55px] text-[38px] text-transparent bg-clip-text bg-[linear-gradient(15deg,_#8f56cc_0%,_#5d4ec4_80%)]  font-syne font-bold'>Hi, I'm Imane El Ouannane</p>
                    <p className='md:text-[55px] text-[38px] text-transparent bg-clip-text bg-[linear-gradient(15deg,_#8f56cc_0%,_#5d4ec4_80%)]  font-syne font-bold'>Full-Stack Developer.</p>
                </div>
                <div className='pt-5 flex flex-col md:flex-row md:justify-between md:items-center'>
                    <button className='w-full sm:w-auto flex items-center justify-center gap-2 md:border md:bg-none md:border-[#c4cad8] md:text-[#22232C] font-bold rounded-3xl px-4 py-3 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-[#aa70e0] to-[#7059e2] text-white'>
                        My Works <PiSquaresFourBold />
                    </button>
                    <div className='hidden md:block'>
                        <CircularText
                            text="SCROLL*FOR*MORE*"
                            onHover="speedUp"
                            spinDuration={20}
                            className="custom-class"
                        />

                    </div>
                </div>
            </div>


        </>
    );
};

export default Hero;