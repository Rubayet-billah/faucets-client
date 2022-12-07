import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className='container lg:max-w-[1340px] mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;