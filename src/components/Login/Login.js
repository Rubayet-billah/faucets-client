import React from 'react';
import { AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-[80vh]'>
            <div className='w-full md:max-w-md bg-white p-4 rounded'>
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                <form>
                    <div className='my-3'>
                        <label className='text-xs font-bold'>Email</label><br />
                        <input type="email" className='border-b border-[#b8b4b4] w-full py-1 focus:outline-none' placeholder='Enter your email' />
                    </div>
                    <div className='my-3'>
                        <label className='text-xs font-bold'>Password</label><br />
                        <input type="email" className='border-b border-[#b8b4b4] w-full py-1 focus:outline-none' placeholder='Enter your password' />
                    </div>
                    <input type="submit" className='bg-primary text-white font-bold py-2 my-3 w-full rounded-sm' value="Login" />
                </form>
                <p className='text-center text-xs font-bold my-2'>Don't have an account? <Link to='/register' className='text-primary'>Signup</Link></p>
                <p className='text-xl font-semibold text-center my-2'>Or</p>
                <div className='grid grid-cols-3 gap-4 w-fit mx-auto text-2xl mb-4'>
                    <AiOutlineGoogle />
                    <FaFacebook />
                    <AiOutlineInstagram />
                </div>
            </div>
        </div>
    );
};

export default Login;