import React, { useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';


const SDGs = [
    {
        id: 1,
        title: 'No Poverty',
        description: 'End poverty in all its forms everywhere',
        image: '/images/sdg1.png'
    },
    {
        id: 2,
        title: 'Zero Hunger',
        description: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
        image: '/images/sdg2.png'
    },
    {
        id: 3,
        title: 'Good Health and Well-being',
        description: 'Ensure healthy lives and promote well-being for all at all ages',
        image: '/images/sdg3.png'
    },
    {
        id: 4,
        title: 'Quality Education',
        description: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
        image: '/images/sdg4.png'
    },
    {
        id: 5,
        title: 'Gender Equality',
        description: 'Achieve gender equality and empower all women and girls',
        image: '/images/sdg5.png'
    },
    {
        id: 6,
        title: 'Clean Water and Sanitation',
        description: 'Ensure availability and sustainable management of water and sanitation for all',
        image: '/images/sdg6.png'
    },
    {
        id: 7,
        title: 'Affordable and Clean Energy',
        description: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
        image: '/images/sdg7.png'
    },
    {
        id: 8,
        title: 'Decent Work and Economic Growth',
        description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all',
        image: '/images/sdg8.png'
    },
    {
        id: 9,
        title: 'Industry, Innovation and Infrastructure',
        description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
        image: '/images/sdg9.png'
    },
    {
        id: 10,
        title: 'Reduced Inequalities',
        description: 'Reduce income inequality within and among countries',
        image: '/images/sdg10.png'
    },
    {
        id: 11,
        title: 'Sustainable Cities and Communities',
        description: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
        image: '/images/sdg11.png'
    },
    {
        id: 12,
        title: 'Responsible Consumption and Production',
        description: 'Ensure sustainable consumption and production patterns',
        image: '/images/sdg12.png'
    },
    {
        id: 13,
        title: 'Climate Action',
        description: 'Take urgent action to combat climate change and its impacts',
        image: '/images/sdg13.png'
    },
    {
        id: 14,
        title: 'Life Below Water',
        description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
        image: '/images/sdg14.png'
    },
    {
        id: 15,
        title: 'Life on Land',
        description: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss',
        image: '/images/sdg15.png'
    },
    {
        id: 16,
        title: 'Peace, Justice and Strong Institutions',
        description: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels',
        image: '/images/sdg16.png'
    },
    {
        id: 17,
        title: 'Partnerships for the Goals',
        description: 'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development',
        image: '/images/sdg17.png'
    }
];

const StrategicAlignment = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="container md:top-60 relative flex justify-center items-center flex-col w-full mx-auto p-4">
            <h1 className="text-3xl font-bold mb-10">Strategic Alignment</h1>
            <div className="flex-wrap flex w-full flex-col md:flex-row justify-center items-center">
                {(showAll ? SDGs.map(sdg => (
                    <motion.div key={sdg.id}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white mt-2 mx-2 rounded-lg w-3/12 flex flex-wrap flex-col justify-center items-center shadow-lg p-10 cursor-pointer">
                        <Image width={250} height={250} src={sdg.image} alt={sdg.title} className="h-32 w-32 mb-5" />
                        <h2 className="text-lg text-center font-bold">{sdg.title}</h2>
                        <div className="pointer-events-none bg-white justify-center items-center flex flex-col">
                            <h2 className="text-base text-center">{sdg.description}</h2>
                        </div>
                    </motion.div>)) :SDGs.slice(0, 3).map(sdg => (
                    <motion.div key={sdg.id} 
                     whileHover={{ scale: 1.05 }}
                     className="bg-white mt-2 mx-2 rounded-lg md:w-3/12 w-full flex flex-wrap flex-col justify-center items-center shadow-lg p-10 cursor-pointer">
                        <Image width={250} height={250} src={sdg.image} alt={sdg.title} className="h-32 w-32 mb-5" />
                        <h2 className="text-lg text-center font-bold">{sdg.title}</h2>
                        <div className="pointer-events-none bg-white justify-center items-center flex flex-col">
                            <h2 className="text-base text-center">{sdg.description}</h2>
                        </div>
                    </motion.div>
                ))
                )}
            </div>
            <style jsx>
                {`
                .cursor-pointer:hover .pointer-events-none {
                    display: block;
                    pointer-events: auto;
                }
                `}
            </style>
            {SDGs.length > 3 && (
                <button
                    className="bg-green-500 text-white py-2 px-4 mt-4 rounded-3xl hover:bg-green-700"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'Show All'}
                </button>
            )}
        </div>
    )
}

export default StrategicAlignment
