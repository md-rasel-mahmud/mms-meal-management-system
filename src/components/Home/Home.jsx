import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>   
            <Footer/>
        </>
    );
};

export default Home;