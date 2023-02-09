// pages/Projects.js
import React, { useState } from "react";
import { motion } from "framer-motion";
const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const projects = [
        {
            id: 1,
            name: "Project 1",
            description: "This is project 1",
            image: '/WebsitePhotos/FhRHsr3XoAEbpOd.jpeg'
        },
        {
            id: 2,
            name: "Project 2",
            description: "This is project 2",
            image: '/WebsitePhotos/Fduhxl_XgAEOGar.jpeg'
        },
        {
            id: 3,
            name: "Project 3",
            description: "This is project 3",
            image: '/WebsitePhotos/FoBl40FXEAM6lhw.jpeg'
        },
        {
            id: 4,
            name: "Project 4",
            description: "This is project 4",
            image: '/WebsitePhotos/FjRrDQRWAAEh_gn.jpeg'
        },
        {
            id: 5,
            name: "Project 5",
            description: "This is project 5",
            image: '/WebsitePhotos/FjMfmOMXEAAlkib.jpeg'
        },
        {
            id: 6,
            name: "Project 6",
            description: "This is project 6",
            image:'/WebsitePhotos/FjWvvM2XgAAWkPi.jpeg'
        }
    ];



    return (
        <div className="container top-60 relative flex justify-center items-center flex-col w-full mx-auto p-4">
            <h1 className="text-6xl font-bold mb-4">Selected Projects</h1>
            {projects.length === 0 ? (
                <p>Loading...</p>
            ) : (
                    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(showAll ? projects : projects.slice(0, 3)).map(project => (
                            <motion.div
                                key={project.id}
                                className="bg-white cursor-pointer h-96 p-4 shadow-lg"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative flex flex-col h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
                                    <div className="h-full w-full bg-black opacity-40 hover:bg-green-500  py-4 hover:opacity-70 flex justify-end flex-col flex-wrap items-start">
                                        <h3 className="text-lg font-bold text-white py-2 px-2">{project.name}</h3>
                                        <p className="text-white py-2 px-2">{project.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
            )}
            {projects.length > 3 && (
                <button
                    className="bg-green-500 text-white py-2 px-4 mt-4 rounded-3xl hover:bg-green-700"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'Show All'}
                </button>
            )}
        </div>
    );
};

export default Projects;
