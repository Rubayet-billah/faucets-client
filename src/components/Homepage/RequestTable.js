import React, { useState } from 'react';

const RequestTable = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <p className='font-bold mb-3'>Request History</p>
            <button onClick={() => setToggle(true)} className={`bg-gray-100 rounded mx-2 px-3 py-2 ${toggle && 'bg-[#00f] text-white'}`}>ETH Transection History</button>
            <button onClick={() => setToggle(false)} className={`bg-gray-100 rounded mx-2 px-3 py-2 ${!toggle && 'bg-[#00f] text-white'}`}>TestLink Transection History</button>
        </div>
    );
};

export default RequestTable;