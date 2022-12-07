import React from 'react';
import { IoIosArrowDown } from 'react-icons/io'

const HeaderButton = () => {
    return (
        <div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className=' border-2 rounded mx-2 px-3 py-2 flex items-center'><span className='hidden md:inline'>Ethereum Kovan</span> <IoIosArrowDown className='ml-1' /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderButton;