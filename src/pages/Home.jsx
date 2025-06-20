import React from 'react';
import SideBar from '../components/home/SideBar';
import NavBar from '../components/home/NavBar';
import Hero from '../components/home/Hero';

const Home = () => {
    return (
        <div className="relative bg-[#e6ebf4] md:min-h-screen overflow-hidden">
            <div className="absolute w-[400px] h-[400px] bg-[#8F56CC]/50 rounded-full top-[-150px] left-[-150px] z-0 opacity-50 blur-2xl"></div>
            <div className="absolute w-[300px] h-[300px] bg-[#8F56CC]/50 rounded-full bottom-[-100px] right-[-100px] z-0 opacity-50 blur-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-[10vh] md:gap-0 px-[5vw] py-[5vh] md:py-0">
                <SideBar />
                <div className="md:flex-1 md:ml-[25vw]">
                    <NavBar />
                    <Hero />
                </div>
            </div>
        </div>
    );
};

export default Home;
