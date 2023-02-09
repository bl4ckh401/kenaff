import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const [showAboutList, setShowAboutList] = useState(false);
    const [showProgrammesList, setShowProgrammesList] = useState(false);
    const [showMemberShipList, setShowMemberShipList] = useState(false);
    const [showResourcesList, setShowResourcesList] = useState(false);



    return (
        <nav className="bg-white fixed z-10 w-full flex flex-col lg:flex-row items-center justify-evenly px-2 py-6">
            <div className=''>
                <Image src='/images/logo1.png' width={100} height={100} alt='Logo'/>
            </div>
            <div className='w-full justify-center flex flex-col items-start lg:hidden' onClick={()=>setShowMenu(!showMenu)}>
                <HiOutlineMenu color='white' size={40} />
            </div>
            {showMenu ? <div className='lg:hidden lg:flex-row w-full items-center lg:h-16 justify-between'>
                <div className="flex-grow lg:flex-initial">
                    <Link href="/">
                        <p className="font-bold text-green-500 text-lg">Home</p>
                    </Link>
                </div>
                <div className="relative ml-4">
                    <button className="font-bold text-green-500"
                        onMouseEnter={() => setShowAboutList(!showAboutList)}
                    >About us</button>
                    {showAboutList && (
                        <ul className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowAboutList(true)} onMouseLeave={() => setShowAboutList(!showAboutList)}>
                            <li>
                                <Link href="/KNTeam">
                                    <p className="block text-black p-2">Kenaff team</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/KBrand">
                                    <p className="block text-black p-2">Kenaff Brands</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="relative ml-4">
                    <button className="font-bold text-green-500"
                        onMouseEnter={() => setShowProgrammesList(!showProgrammesList)}
                    >Programmes</button>
                    {showProgrammesList && (
                        <ul className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowProgrammesList(true)} onMouseLeave={() => setShowProgrammesList(!showProgrammesList)}>
                            <li>
                                <Link href="/Programmes">
                                    <p className="block text-black p-2">Programmes</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/FarmersInstitute">
                                    <p className="block text-black p-2">Farmers Institute</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="relative ml-4">
                    <button className="font-bold text-green-500"
                        onMouseEnter={() => setShowMemberShipList(!showMemberShipList)}
                    >Membership</button>
                    {showMemberShipList && (
                        <ul className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowMemberShipList(true)} onMouseLeave={() => setShowMemberShipList(!showMemberShipList)}>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Who we are</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Footprint</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Kenaff team</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Kenaff Brands</p>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="flex-grow ml-4 lg:flex-initial">
                    <Link href="/">
                        <p className="font-bold text-green-500 text-lg">Media</p>
                    </Link>
                </div>
                <div className="relative ml-4">
                    <button className="font-bold text-green-500"
                        onMouseEnter={() => setShowResourcesList(!showResourcesList)}
                    >Resources</button>
                    {showResourcesList && (
                        <ul className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowResourcesList(true)} onMouseLeave={() => setShowMemberShipList(!showResourcesList)}>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Who we are</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Footprint</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Kenaff team</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Kenaff Brands</p>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="flex-grow lg:flex-initial">
                    <Link href="/">
                        <p className="font-bold text-green-500 text-lg">Partnership</p>
                    </Link>
                </div>
                <div className="flex-grow lg:flex-initial">
                    <Link href="/">
                        <p className="font-bold text-green-500 text-lg">Contact Us</p>

                    </Link>
                </div>
            </div>:<></>}
            <div className='hidden lg:flex lg:flex-row w-full items-center lg:h-16 justify-end'>
                <div className="flex-grow ml-4 lg:flex-initial">
                    <Link href="/">
                        <p className="font-bold text-green-500 text-lg">Home</p>
                    </Link>
                </div>
                <div className="relative ml-4">
                    <button className="font-bold text-green-500"
                        onMouseEnter={() => setShowAboutList(!showAboutList)}
                    >About us</button>
                    {showAboutList && (
                        <ul className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowAboutList(true)} onMouseLeave={() => setShowAboutList(!showAboutList)}>
                            <li>
                                <Link href="/KNTeam">
                                    <p className="block text-black p-2">Kenaff team</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/KBrand">
                                    <p className="block text-black p-2">Kenaff Brands</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="relative ml-4">
                    <button className="font-bold text-green-500"
                        onMouseEnter={() => setShowProgrammesList(!showProgrammesList)}
                    >Programmes</button>
                    {showProgrammesList && (
                        <ul className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={()=> setShowProgrammesList(true)} onMouseLeave={()=>setShowProgrammesList(!showProgrammesList)}>
                            <li>
                                <Link href="/Programmes">
                                    <p className="block text-black p-2">Programmes</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://kenaff.org/farmers-institute.phpg">
                                    <p className="block text-black p-2">Farmers Institute</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="relative ml-4">
                    <button className="font-bold text-green-500"
                        onMouseEnter={() => setShowMemberShipList(!showMemberShipList)}
                    >Membership</button>
                    {showMemberShipList && (
                        <ul className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowMemberShipList(true)} onMouseLeave={() => setShowMemberShipList(!showMemberShipList)}>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Who we are</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Footprint</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Kenaff team</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Kenaff Brands</p>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="flex-grow ml-4 lg:flex-initial">
                    <Link href="/">
                        <p className="font-bold text-green-500 text-lg">Media</p>
                    </Link>
                </div>
                <div className="relative ml-4">
                    <button className="font-bold text-green-500"
                        onMouseEnter={() => setShowResourcesList(!showResourcesList)}
                    >Resources</button>
                    {showResourcesList && (
                        <ul className="absolute right-0 mt-2 w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowResourcesList(true)} onMouseLeave={() => setShowMemberShipList(!showResourcesList)}>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Who we are</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Footprint</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Kenaff team</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-black p-2">Kenaff Brands</p>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="flex-grow ml-4 lg:flex-initial">
                    <Link href="/">
                        <p className="font-bold text-green-500 text-lg">Partnership</p>
                    </Link>
                </div>
                <div className="flex-grow ml-4 lg:flex-initial">
                    <Link href="/">
                        <p className="font-bold text-green-500 text-lg">Contact Us</p>

                    </Link>
                </div>
            </div>
            </nav>
            );
        };
export default NavBar