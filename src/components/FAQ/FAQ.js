import React from 'react';

const FAQ = () => {
    return (
        <div className='max-w-4xl mx-auto py-8'>
            <h1 className='text-4xl text-primary font-bold text-center mb-4'>Frequently Asked Questions</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded">
                <div className="collapse-title text-base font-bold">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;