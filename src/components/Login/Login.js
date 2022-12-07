import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Login = () => {
    const [visible, setVisible] = useState(false)
    const { register, handleSubmit } = useForm()

    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div className='flex justify-center items-center min-h-[80vh]'>
            <div className='w-full md:max-w-md bg-white p-4 rounded'>
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='my-3'>
                        <label className='text-xs font-bold'>Email</label><br />
                        <input {...register('email')} type="email" className='border-b border-[#b8b4b4] w-full py-1 focus:outline-none' placeholder='Enter your email' />
                    </div>
                    <div className='my-3 relative'>
                        <label className='text-xs font-bold'>Password</label><br />
                        <input {...register('password')} type={!visible ? 'password' : 'text'} className='border-b border-[#b8b4b4] w-full py-1 focus:outline-none' placeholder='Enter your password' /><span className='absolute top-1/2 right-1 text-xl' onClick={() => setVisible(!visible)}>{visible ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                    <input type="submit" className='bg-primary text-white font-bold py-2 my-3 w-full rounded-sm' value="Login" />
                </form>
                <p className='text-center text-xs font-bold my-2'>Don't have an account? <Link to='/register' className='text-primary'>Signup</Link></p>
                <p className='text-base font-semibold text-center my-4'>Or</p>
                <div className='grid grid-cols-3 gap-4 w-fit mx-auto text-2xl mt-2 mb-4'>
                    <AiOutlineGoogle />
                    <FaFacebook />
                    <AiOutlineInstagram />
                </div>
            </div>
        </div>
    );
};

export default Login;