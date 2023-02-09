import Image from 'next/image';
import React from 'react';

const InstitutionCards = () => {
    return (
        <div className="flex z-0 flex-row top-3/4 absolute flex-wrap w-screen justify-center bg-transparent items-start">
            <div className="w-96 rounded-lg justify-center overflow-hidden  m-4">
                <Image src="/WebsitePhotos/FawJE-eXEAAafGC.jpeg" width={400} height={400} alt="institution" className="w-full h-full object-cover" />
                <div className="px-6 py-4 flex-col flex bg-white justify-center text-center items-center  ">
                    <h1 className="text-xl text-black font-bold">Mission</h1>
                    <p className="text-black text-base">
                        To influence transformation and growth in the agricultural sector for enhanced food & nutrition security, improved incomes and better livelihoods for farmers.
                    </p>
                </div>
            </div>

            <div className="w-96 rounded-lg justify-center overflow-hidden m-4">
                <Image src="/DPMeru1.webp" width={400} height={400} alt="institution" className="w-full h-full object-cover" />
                <div className="px-6 py-4 flex-col flex bg-white justify-center text-center items-center ">
                    <h1 className="text-xl text-black font-bold">Vision</h1>
                    <p className="text-black text-base">
                        An inclusive, strong, influential and respected National Farmers’ Organization.
                    </p>
                </div>
            </div>

            <div className="w-96 rounded-lg justify-center overflow-hidden  m-4">
                <Image src="/WebsitePhotos/Fj_9AcLWQAAm8gP.jpeg" width={400} height={400} alt="institution" className="w-full h-full object-cover" />
                <div className="px-6 py-4 flex-col flex justify-center bg-white text-center items-center ">
                    <h1 className="text-xl text-black font-bold">Core Values</h1>
                    <ul className="text-black text-base text-left bg-white flex flex-col justify-center items-center">
                        <li>Farmers First</li>
                        <li>Integrity and Accountability</li>
                        <li>Responsible Corporate Citizen</li>
                        <li>Partnerships</li>
                        <li>Respect for All</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InstitutionCards;
