import React from 'react';

const Parallax = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/WebsitePhotos/Fi9Qx95XkAEzpk0.jpeg)', backgroundAttachment: 'fixed' }}>
            <div className="h-full bg-black opacity-50 flex justify-center flex-col items-center">
                <h1 className='text-6xl font-bold text-white'>KENAFF STRATEGIC</h1> 
                <h1 className='text-xl italic text-white'>PLAN</h1> 
            </div>
        </div>
    );
};

export default Parallax;
