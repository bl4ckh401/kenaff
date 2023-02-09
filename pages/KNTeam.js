import React from "react";
import Parallax from "./components/Parallax";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'


const KNTeam = () => {
    const teamMembers = [
        {
            name: "John Doe",
            position: "CEO",
            image: "/images/Member1.jpeg",
        },
        {
            name: "Jane Doe",
            position: "COO",
            image: "/images/member2.jpeg",
        },
        {
            name: "Bob Smith",
            position: "CTO",
            image: "/images/Member3.jpeg",
        },
        {
            name: "John Doe",
            position: "CEO",
            image: "/images/Member1.jpeg",
        },
        {
            name: "Jane Doe",
            position: "COO",
            image: "/images/member2.jpeg",
        },
        {
            name: "Bob Smith",
            position: "CTO",
            image: "/images/Member3.jpeg",
        },
        {
            name: "John Doe",
            position: "CEO",
            image: "/images/Member1.jpeg",
        },
        {
            name: "Jane Doe",
            position: "COO",
            image: "/images/member2.jpeg",
        },
        {
            name: "Bob Smith",
            position: "CTO",
            image: "/images/Member3.jpeg",
        },
    ];

    return (
        <div className="min-h-screen p-10">
            <Parallax/>
            <h1 className="text-2xl font-medium text-center text-gray-700">
                Our Team
            </h1>
            <div className="grid grid-cols-5 gap-10 flex-wrap" style={{ height:'540px' }}>
                
                {teamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="w-full mt-10 h-full relative text-center"
                    >
                        <div className="relative flex flex-col h-full bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                        <div className=" w-full bg-black h-full z-10 items-center opacity-0 hover:bg-black hover:opacity-70 flex justify-center flex-col flex-wrap">
                        <h2 className="text-lg font-medium text-gray-700 mb-2">
                            {member.name}
                        </h2>
                        <p className="text-gray-600">{member.position}</p>
                        <div className="flex flex-row">
                            <FaFacebookF color='white' size={20}/>
                            <FaLinkedinIn color='white' size={20}/>
                        </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KNTeam;
