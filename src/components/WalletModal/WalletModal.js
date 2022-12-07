import React from 'react';

const WalletModal = () => {
    return (
        <div>
            <input type="checkbox" id="wallet-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative rounded">
                    <label htmlFor="wallet-modal" className="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
                    <h2 className='text-2xl font-semibold'>Connect your wallet</h2>
                    <section className='grid md:grid-cols-2 gap-5 my-5'>
                        <div className='bg-gray-100 px-16 py-8 rounded'>
                            <img src="https://faucets.netlify.app/static/media/MetaMask.551edf10.svg" alt="" />
                            <p className='text-xl text-primary font-semibold'>MetaMask</p>
                        </div>
                        <div className='bg-gray-100 px-16 py-8 rounded'>
                            <img src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg" alt="" />
                            <p className='text-xl text-primary font-semibold'>MetaMask</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default WalletModal;