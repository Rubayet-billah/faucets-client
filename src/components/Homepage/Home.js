import React from 'react';
import RequestTable from './RequestTable';
import WalletDashboard from './WalletDashboard';

const Home = () => {
    return (
        <div>
            <div className='bg-primary text-white h-16 flex justify-center items-center'> Notice Here</div>
            <section className='my-10'>
                <h2 className='text-4xl text-primary font-semibold'>Request testnet LINK</h2>
                <p className='mt-6 text-accent text-base max-w-2xl'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
            </section>
            <main className='bg-white p-5'>
                <WalletDashboard />
                <RequestTable></RequestTable>
            </main>
        </div>
    );
};

export default Home;