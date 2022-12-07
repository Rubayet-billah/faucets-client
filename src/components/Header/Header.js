import React from 'react';
import HeaderButton from './HeaderButton';
import { BiUserCircle } from 'react-icons/bi';
import { IoWallet } from 'react-icons/io5';

const Header = () => {
    return (
        <div className='bg-white text-accent'>
            <nav className='flex justify-between items-center h-20 container lg:max-w-[1340px] mx-auto'>
                <h2 className='text-3xl font-semibold text-primary'>Faucets</h2>
                <div className='flex items-center'>
                    <HeaderButton className='mx-2'></HeaderButton>
                    <label htmlFor="wallet-modal" className='text-primary border-primary border-2 rounded mx-2 px-3 py-2 flex items-center'><IoWallet /> <span className='font-semibold ml-2 hidden md:inline'>Connect Wallet</span></label>
                    {/* <button className='text-primary border-primary border-2 rounded mx-2 px-3 py-2 flex items-center'><IoWallet /> <span className='font-semibold ml-2 hidden md:inline'>Connect Wallet</span></button> */}
                    <button className='text-3xl text-gray-500 bg-base-200 p-2 rounded-full'><BiUserCircle /></button>
                </div>
            </nav>
        </div>
    );
};

export default Header;