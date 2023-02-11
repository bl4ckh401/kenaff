import React from 'react';
import Parallax from './components/Parallax';

const CommodityAssociations = () => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 bg-white">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-indigo-700">COMMODITY ASSOCIATIONS</div>
            <p className="text-gray-700 text-base">
                Six commodity associations are registered with the federation not only to represent their interests but also for increased synergies in conducting mutual activities especially in lobby and advocacy.
            </p>
        </div>
        <div className="px-6 py-4 border-t border-gray-400">
            <span className="font-bold text-lg text-indigo-700">Membership Fee</span>
            <p className="text-gray-700">
                <span className="font-bold">Registration fees:</span> KES 10,000.00
            </p>
            <span className="font-bold text-lg text-indigo-700 mt-4">Renewal Fees</span>
            <p className="text-gray-700">
                <span className="font-bold">Annual Subscription fee:</span> KES 35,000.00
            </p>
        </div>
        <div className="px-6 py-4 border-t border-gray-400">
            <a
                href="#"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded block w-full text-center text-sm"
            >
                GET STARTED
            </a>
        </div>
    </div>
);


const CountyFarmersAssociations = () => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 bg-white">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-indigo-700">COUNTY FARMERS ASSOCIATIONS</div>
            <p className="text-gray-700 text-base">
                The smallest federation's unit at the ward level is made up of at least 15 common interest groups (C.I.Gs) that are registered with the social development office. At least four wards form the sub-county branches form the county farmer's.
            </p>
        </div>
        <div className="px-6 py-4 border-t border-gray-400">
            <span className="font-bold text-lg text-indigo-700">Membership Fee</span>
            <p className="text-gray-700">
                <span className="font-bold">Admission fees:</span> KES 10,000.00
            </p>
            <span className="font-bold text-lg text-indigo-700 mt-4">Renewal Fees</span>
            <p className="text-gray-700">
                <span className="font-bold">Annual Subscription:</span> KES 35, 000.00 or 5% of its accrued membership fees whichever is greater.
            </p>
        </div>
        <div className="px-6 py-4 border-t border-gray-400">
            <a
                href="#"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded block w-full text-center text-sm"
            >
                GET STARTED
            </a>
        </div>
    </div>
);



const AffiliateMembers = () => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 bg-white">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-indigo-700">AFFILIATE MEMBERS</div>
            <p className="text-gray-700 text-base">
                Affiliate members are individuals or organizations who support the objectives and activities of the federation but do not meet the membership criteria of common interest groups or county farmer's associations.
            </p>
        </div>
        <div className="px-6 py-4 border-t border-gray-400">
            <span className="font-bold text-lg text-indigo-700">Membership Fee</span>
            <p className="text-gray-700">
                <span className="font-bold">Admission fees:</span> KES 10,000.00
            </p>
            <span className="font-bold text-lg text-indigo-700 mt-4">Renewal Fees</span>
            <p className="text-gray-700">
                <span className="font-bold">Annual Subscription:</span>KES 250,000.00 for Kenyan and East African Countries organizations/ companies<br/>
                <span className="font-bold">Annual Subscription:</span>KES 500,000.00 for International organization / companies
            </p>
        </div>
        <div className="px-6 py-4 border-t border-gray-400">
            <a
                href="#"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded block w-full text-center text-sm"
            >
                GET STARTED
            </a>
        </div>
    </div>
);


const Registration = () => (
    <div className="container mx-auto py-10">
        <Parallax/>
        <div className='flex flex-row w-full justify-center'>
            <CommodityAssociations />
            <CountyFarmersAssociations />
            <AffiliateMembers />
        </div>
        
    </div>
);

export default Registration;
