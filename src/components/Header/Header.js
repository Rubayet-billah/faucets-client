import React, { useContext } from 'react';
import HeaderButton from './HeaderButton';
import { BiUserCircle } from 'react-icons/bi';
import { IoWallet } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Header = () => {
    const { logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => { toast.success('Successfully logged out') })
            .catch(err => console.error(err))
    }
    return (
        <div className='bg-white text-accent'>
            <nav className='flex justify-between items-center h-20 container px-2 md:px-8 lg:px-12 lg:max-w-[1440px] lg:mx-auto'>
                <h2 className='text-2xl font-semibold text-primary'><Link to='/'>Faucets</Link></h2>
                <div className='flex items-center'>
                    <HeaderButton className='mx-2'></HeaderButton>
                    <label htmlFor="wallet-modal" className='text-primary border-primary border-2 rounded mx-2 px-3 py-2 flex items-center'><IoWallet /> <span className='font-semibold ml-2 hidden md:inline'>Connect Wallet</span></label>
                    {/* <button className='text-3xl text-gray-500 bg-base-200 p-2 rounded-full'><BiUserCircle /></button> */}

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0}><button className='text-3xl text-gray-500 bg-base-200 p-2 rounded-full'><BiUserCircle /></button></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">

                            <li><Link to='/login' className='py-[6px]'>Log In</Link></li>
                            <li><Link to='/register' className='py-[6px]'>Sign Up</Link></li>
                            <li><Link to='/faq' className='py-[6px]'>FAQ</Link></li>
                            <li><Link to='' className='py-[6px] bg-yellow-300 font-bold'><button onClick={handleLogout}>Logout</button></Link></li>


                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;