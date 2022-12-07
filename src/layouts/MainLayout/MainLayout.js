import React from 'react';
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
        </div>
    );
};

export default MainLayout;