import React from 'react';
import RequestTable from './RequestTable';
import WalletDashboard from './WalletDashboard';

const Home = () => {
    return (
        <div>
            <div className='bg-primary h-[70px] text-white font-base flex justify-center items-center'> Notice Here</div>
            <div className='container px-2 md:px-8 lg:px-12 lg:max-w-[1440px] lg:mx-auto '>
                <section className='my-10'>
                    <h2 className='text-4xl text-primary font-semibold'>Request testnet LINK</h2>
                    <p className='mt-6 text-accent text-base max-w-2xl'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                </section>
                <main className='bg-white p-5'>
                    <WalletDashboard />
                    <RequestTable></RequestTable>
                </main>
            </div>
        </div>
    );
};

export default Home;