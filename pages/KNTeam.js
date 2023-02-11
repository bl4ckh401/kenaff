import React from "react";
import Parallax from "./components/Parallax";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'


const KNTeam = () => {
    const teamMembers = [
        {
            name: "Prof.Kaburu M_Ribu",
            position: "KENAFF National Board Chairman",
            image: "/WebsitePhotos/NationalBoard/ProfKaburuM_Ribu.jpeg",
        },
        {
            name: "Wachira Kaguongo",
            position: " KENAFF Deputy Chairperson",
            image: "/WebsitePhotos/NationalBoard/WachiraKaguongo.jpeg",
        },
        {
            name: "Dr.Daniel M M_Mailuta",
            position: "Chief Executive Officer",
            image: "/WebsitePhotos/NationalBoard/DrDanielMM_Mailuta.jpeg",
        },
        {
            name: "Mrs.Ruth Kemboi",
            position: "National Treassurer, Reggional Representative North Rift",
            image: "/WebsitePhotos/NationalBoard/MrsRuthKemboi.jpeg",
        },
        {
            name: "Miss Susan Rotich",
            position: "KENAFF Women Summit Representative",
            image: "/WebsitePhotos/NationalBoard/MissSusanRotich.jpeg",
        },
        {
            name: "Miss Joy Makena Kinyua",
            position: "KENAFF National Youth Summit Representative",
            image: "/WebsitePhotos/NationalBoard/MissJoyMakenaKinyua.jpeg",
        },
        {
            name: "Major (Rtd) Daniel Mwania",
            position: "Eastern Region Representative",
            image: "/WebsitePhotos/NationalBoard/MajorRtdDanielMwania.jpeg",
        },
        {
            name: "Mrs.Rosemary Onyango",
            position: "Lake Region Representative",
            image: "/WebsitePhotos/NationalBoard/MrsRosemaryOnyango.jpeg",
        },
        {
            name: "Mr.Dubat Ali Amey",
            position: "North Eastern Regional Representative",
            image: "/WebsitePhotos/NationalBoard/MrDubatAliAmey.jpeg",
        },
        {
            name: "Mrs. Grace Wairimu Ngambi",
            position: "Mount Kenya East Representative",
            image: "/WebsitePhotos/NationalBoard/MrsGraceWairimuNgambi.jpeg",
        },
        {
            name: "Mr. Livingstone Adweru Osuru",
            position: "Western Region Representative",
            image: "/WebsitePhotos/NationalBoard/MrLivingstoneAdweruOsuru.jpeg",
        },
        {
            name: "Mrs. Evangeline Mcharo Kiseu",
            position: "Regional  Representative Coast Region",
            image: "/WebsitePhotos/NationalBoard/MrsEvangelineMcharoKiseu.jpeg",
        },
        {
            name: "Mr. Luke Kipkemei Kessei",
            position: "SOUTH RIFT Regional Representative",
            image: "/WebsitePhotos/NationalBoard/MrLukeKipkemeiKessei.jpeg",
        },
    ];

    return (
        <div className="py-10 w-full">
            <Parallax/>
            <h1 className="text-2xl font-medium text-center text-gray-700">
                Our Team
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-10">
                
                {teamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="w-full mt-10 h-96 relative text-center"
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
