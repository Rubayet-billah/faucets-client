import React from 'react';
import { AiFillWarning } from 'react-icons/ai'
import { useForm } from 'react-hook-form'

const WalletDashboard = () => {
    const { register, handleSubmit } = useForm();


    const handleAction = () => {

    }
    return (
        <div>
            <p className='md:flex items-center p-2 rounded-sm bg-secondary '><AiFillWarning className='text-xl text-primary mr-1' />  Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</p>

            <form onSubmit={handleSubmit(handleAction)} className='my-5 md:max-w-2xl' >
                <label className='text-primary font-bold'>Wallet Address</label> <br />
                <input type="text" placeholder='Wallet Address...' className='border px-2 py-1 mt-1 mb-3 w-full rounded-sm' />
                <label className='text-primary font-bold'>Request Type</label> <br />
                <div className='grid grid-cols-2 gap-2'>
                    <input type="text" className='border px-2 py-1 mt-1 w-full rounded-sm bg-gray-100' defaultValue='20 Test Link' />
                    <input type="text" className='border px-2 py-1 mt-1 w-full rounded-sm bg-gray-100' defaultValue='0.5 ETH' />
                </div>
                <input type="submit" value="Send Request" className='px-3 py-2 bg-primary text-white font-bold rounded-sm mt-3' />
            </form>
        </div>
    );
};

export default WalletDashboard;