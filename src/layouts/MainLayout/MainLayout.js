import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import WalletModal from '../../components/WalletModal/WalletModal';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <WalletModal />
            <Footer></Footer>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;