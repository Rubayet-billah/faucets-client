import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-[80vh]'>
            <div className='w-full md:max-w-md bg-white p-4'>
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                <form>
                    <div className='my-3'>
                        <label className='text-xs font-bold'>Email</label><br />
                        <input type="email" className='border-b border-[#b8b4b4] w-full' placeholder='Enter your email' />
                    </div>
                    <div className='my-3'>
                        <label className='text-xs font-bold'>Password</label><br />
                        <input type="email" className='border-b border-[#b8b4b4] w-full' placeholder='Enter your password' />
                    </div>
                    <input type="submit" className='bg-primary text-white py-2 my-3 w-full rounded-sm' value="Login" />
                </form>
                <small className='text-center'>Don't have an account? <span className='text-primary font-bold'>Signup</span></small>
            </div>
        </div>
    );
};

export default Login;