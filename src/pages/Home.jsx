import React from 'react';
import SideBar from '../components/home/SideBar';
import NavBar from '../components/home/NavBar';

const Home = () => {
    return (
        <div className='flex px-[5vw] bg-[#e6ebf4]'>
            <SideBar />

            <div className='flex-1 ml-[23vw]'>
                <NavBar />
            </div>
        </div>
    );
};

export default Home;
