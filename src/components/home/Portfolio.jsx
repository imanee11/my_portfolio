import React, { useContext } from 'react';
import { BsStars } from "react-icons/bs";
import { DarkModeContext } from '../../context/DarkModeContext';
import image from '../../constants/image';
import CarouselCard from './animation/CarouselCard';


const Portfolio = () => {

    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className='font-syne flex flex-col pt-[10vh]'>
            <div className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'>
                <BsStars />
                <p>Portfolio</p>
            </div>

            <div className='pt-5'>
                <p className='md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                    Check out my featured projects
                </p>
            </div>

            {/* projects Grid */}
            <div className="pt-6 flex flex-wrap gap-4 justify-between">
                <CarouselCard
                    images={[image.fashe, image.fashe2, image.fashe3, image.fashe4, image.fashe5, image.fashe6, image.fashe7]}
                    tools={["HTML", "React JS", "JavaScript", "Tailwind CSS"]}
                />
                <CarouselCard
                    images={[image.task, image.task2, image.task3, image.task4]}
                    tools={["HTML", "Laravel", "Tailwind CSS", "Breeze"]}
                />
                <CarouselCard
                    images={[image.yummy, image.yummy2, image.yummy3, image.yummy4, image.yummy5]}
                    tools={["HTML", "SASS", "JavaScript", "Bootstrap"]}
                />
                <CarouselCard
                    images={[image.restaurant, image.restaurant2, image.restaurant3, image.restaurant4, image.restaurant5]}
                    tools={["HTML", "SASS", "Bootstrap", "CSS"]}
                />
                <CarouselCard
                    images={[image.imane, image.imane2, image.imane3]}
                    tools={["HTML", "React JS", "Tailwind CSS"]}
                />
                <CarouselCard
                    images={[image.mor, image.mor2]}
                    tools={["HTML", "CSS"]}
                />
            </div>
        </div>
    );
};

export default Portfolio;
