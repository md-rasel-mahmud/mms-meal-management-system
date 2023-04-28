import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

const BazarLayout = () => {
    return (
        <div className='flex'>
            <div>
                <LeftSidebar/>
            </div>
            <div className='flex-grow'>
                <h2 className='text-center my-3 text-2xl'>Daily Bazar</h2>
                <Outlet/>
            </div>
        </div>
    );
};

export default BazarLayout;