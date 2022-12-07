import React from 'react';
import { IoIosArrowDown } from 'react-icons/io'

const HeaderButton = () => {

    const items = [
        { name: 'Arbitrum Rinkeyby', img: 'https://faucets.netlify.app/static/media/arbitrum.79164059.svg' },
        { name: 'Avalanche Fuji', img: 'https://faucets.netlify.app/static/media/avalanche.234db155.svg' },
        { name: 'BNB Chain Testnet', img: 'https://faucets.netlify.app/static/media/bsc.d8c61230.svg' },
        { name: 'Ethereum Kovan', img: 'https://faucets.netlify.app/static/media/ethereum.42dac5dc.svg' },
        { name: 'Fantom Testnet', img: 'https://faucets.netlify.app/static/media/fantom.3f8c71bb.svg' },
    ]

    return (
        <div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className=' border-2 rounded mx-2 px-3 py-2 flex items-center'><span className='hidden md:inline'>Ethereum Kovan</span> <IoIosArrowDown className='ml-1' /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">

                    {
                        items?.map(item => <li><a className='py-[6px]'><img src={item.img} className='w-3' alt="" />{item.name}</a></li>)
                    }


                </ul>
            </div>
        </div>
    );
};

export default HeaderButton;