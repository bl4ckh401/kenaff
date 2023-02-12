import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import {FiChevronDown} from 'react-icons/fi'
import { useRouter } from 'next/router';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const [showAboutList, setShowAboutList] = useState(false);
    const [showProgrammesList, setShowProgrammesList] = useState(false);
    const [showMemberShipList, setShowMemberShipList] = useState(false);
    const [showResourcesList, setShowResourcesList] = useState(false);

    const router = useRouter()

    const activeRoute = router.pathname === '/KNTeam' || router.pathname === '/KBrand' 
    const buttonClassName = `${activeRoute ? 'bg-green-500 text-white rounded-lg px-4 py-2' : 'text-green-500'}`



    return (
        <nav className="bg-white fixed z-10 w-full flex flex-col lg:flex-row items-center  justify-evenly px-2 py-6">
            <div className='w-full flex lg:w-fit flex-row justify-between items-center '>
                <div className='sm:w-full lg:w-fit'>
                    <Image src='/images/logo1.png' width={100} height={100} alt='Logo' />
                </div>
                <div className='w-full justify-center flex flex-col items-end pr-3 lg:hidden' onClick={() => setShowMenu(!showMenu)}>
                    <HiOutlineMenu color='green' size={40} />
                </div>
            </div>
            {showMenu ? <div className='lg:hidden lg:flex-row w-full items-center  lg:h-16 justify-between'>
                <div className={`${router.pathname === '/' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <Link href="/">
                        <p className="font-bold ">Home</p>
                    </Link>
                </div>
                <div className={`relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <div className={`flex flex-row justify-between items-center ${router.pathname === '/KNTeam' || router.pathname === '/KBrand' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} w-full relative md:min-h-12 sm:min-h-12 rounded-lg`} onMouseEnter={() => setShowAboutList(!showAboutList)} onClick={() => setShowAboutList(!showAboutList)}>
                        <button
                            className='font-bold'
                            onMouseEnter={() => setShowAboutList(!showAboutList)} onClick={() => setShowAboutList(!showAboutList)}
                        >
                            About us
                        </button>
                        <span className="">
                            <FiChevronDown color="green" size={20} />
                        </span>
                    </div>
                    {showAboutList && (
                        <ul
                            className="lg:absolute relative w-full lg:right-0 mt-2 lg:w-32 py-2 bg-white rounded-lg shadow-xl"
                            onMouseEnter={() => setShowAboutList(true)}
                            onMouseLeave={() => setShowAboutList(!showAboutList)}
                        >
                            <li>
                                <Link href="/KNTeam">
                                    <p className="block text-green-500 p-2">Kenaff team</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/KBrand">
                                    <p className="block text-green-500 p-2">Kenaff Brands</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <div className={`flex flex-row justify-between items-center ${router.pathname === '/Programmes' || router.pathname === '/FarmersInstitute' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500' } w-full relative md:min-h-12 sm:min-h-12 rounded-lg`} onMouseEnter={() => setShowProgrammesList(!showProgrammesList)} onClick={() => setShowProgrammesList(!showProgrammesList)}>
                        <button className="font-bold"
                            onMouseEnter={() => setShowProgrammesList(!showProgrammesList)} onClick={() => setShowProgrammesList(!showProgrammesList)}
                        >Programmes</button>
                        <span className=''><FiChevronDown color='green' size={20} /></span>
                    </div>
                    {showProgrammesList && (
                        <ul className="lg:absolute relative w-full lg:right-0 mt-2 lg:w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowProgrammesList(true)} onMouseLeave={() => setShowProgrammesList(!showProgrammesList)}>
                            <li>
                                <Link href="/Programmes">
                                    <p className="block text-green-500 p-2">Programmes</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/FarmersInstitute">
                                    <p className="block text-green-500 p-2">Farmers Institute</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <div className={`flex flex-row justify-between items-center ${router.pathname === '/MembershipBenefits' || router.pathname === '/Register' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} w-full relative md:min-h-12 sm:min-h-12 rounded-lg`} onClick={() => setShowMemberShipList(!showMemberShipList)}>
                        <button className="font-bold"
                            onMouseEnter={() => setShowMemberShipList(!showMemberShipList)} onClick={() => setShowMemberShipList(!showMemberShipList)}
                        >Membership</button>
                        <span className=''><FiChevronDown color='green' size={20} /></span>
                    </div>
                    {showMemberShipList && (
                        <ul className="lg:absolute relative w-full lg:right-0 mt-2 lg:w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowMemberShipList(true)} onMouseLeave={() => setShowMemberShipList(!showMemberShipList)}>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Membership Benefits</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Join Kenaff</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Commodity Assosiation</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">County Farmers Assosiation</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Affiliate Members</p>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`${router.pathname === '/Media' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <Link href="/">
                        <p className="font-bold text-green-500 ">Media</p>
                    </Link>
                </div>
                <div className={`relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <div className={`flex flex-row justify-between items-center ${router.pathname === '/ScoreCard' || router.pathname === '/MonthlyReports' || router.pathname === '/AnnualRepoprts' || router.pathname === '/Magazine' || router.pathname === '/Downloads' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} w-full relative md:min-h-12 sm:min-h-12 rounded-lg`} onMouseEnter={() => setShowResourcesList(!showResourcesList)} onClick={() => setShowResourcesList(!showResourcesList)}>
                        <button className="font-bold"
                            onMouseEnter={() => setShowResourcesList(!showResourcesList)} onClick={() => setShowResourcesList(!showResourcesList)}
                        >Resources</button>
                        <span className=''><FiChevronDown color='green' size={20} /></span>
                    </div>
                    {showResourcesList && (
                        <ul className="lg:absolute relative w-full lg:right-0 mt-2 lg:w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowResourcesList(true)} onMouseLeave={() => setShowResourcesList(!showResourcesList)}>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Score Card</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Monthly Reports</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Annual Reports</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Magazine</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Downloads</p>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`${router.pathname === '/Partnerships' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <Link href="/Partnerships">
                        <p className="font-bold ">Partnership</p>
                    </Link>
                </div>
                <div className={`${router.pathname === '/Contact' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <Link href="/Contact">
                        <p className="font-bold ">Contact Us</p>

                    </Link>
                </div>
            </div>:<></>}
            <div className='hidden lg:flex lg:flex-row w-full items-center  lg:h-16 justify-end'>
                <div className={`${router.pathname === '/' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <Link href="/">
                        <p className="font-bold ">Home</p>
                    </Link>
                </div>
                <div className={`relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <div className={`flex flex-row justify-between items-center ${router.pathname === '/KNTeam' || router.pathname === '/KBrand' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} w-full relative md:min-h-12 sm:min-h-12 rounded-lg`} onMouseEnter={() => setShowAboutList(!showAboutList)} onClick={() => setShowAboutList(!showAboutList)}>
                        <button
                            className='font-bold'
                            onMouseEnter={() => setShowAboutList(!showAboutList)} onClick={() => setShowAboutList(!showAboutList)}
                        >
                            About us
                        </button>
                        <span className="">
                            <FiChevronDown color="green" size={20} />
                        </span>
                    </div>
                    {showAboutList && (
                        <ul
                            className="lg:absolute relative w-full lg:right-0 mt-2 lg:w-32 py-2 bg-white rounded-lg shadow-xl"
                            onMouseEnter={() => setShowAboutList(true)}
                            onMouseLeave={() => setShowAboutList(!showAboutList)}
                        >
                            <li>
                                <Link href="/KNTeam">
                                    <p className="block text-green-500 p-2">Kenaff team</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/KBrand">
                                    <p className="block text-green-500 p-2">Kenaff Brands</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <div className={`flex flex-row justify-between items-center ${router.pathname === '/Programmes' || router.pathname === '/FarmersInstitute' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} w-full relative md:min-h-12 sm:min-h-12 rounded-lg`} onMouseEnter={() => setShowProgrammesList(!showProgrammesList)} onClick={() => setShowProgrammesList(!showProgrammesList)}>
                        <button className="font-bold"
                            onMouseEnter={() => setShowProgrammesList(!showProgrammesList)} onClick={() => setShowProgrammesList(!showProgrammesList)}
                        >Programmes</button>
                        <span className=''><FiChevronDown color='green' size={20} /></span>
                    </div>
                    {showProgrammesList && (
                        <ul className="lg:absolute relative w-full lg:right-0 mt-2 lg:w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={()=> setShowProgrammesList(true)} onMouseLeave={()=>setShowProgrammesList(!showProgrammesList)}>
                            <li>
                                <Link href="/Programmes">
                                    <p className="block text-green-500 p-2">Programmes</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/FarmersInstitute">
                                    <p className="block text-green-500 p-2">Farmers Institute</p>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <div className={`flex flex-row justify-between items-center  ${router.pathname === '/MembershipBenefits' || router.pathname === '/Register' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} w-full relative md:min-h-12 sm:min-h-12 rounded-lg`} onMouseEnter={() => setShowMemberShipList(!showMemberShipList)} onClick={() => setShowMemberShipList(!showMemberShipList)}>
                    <button className="font-bold"
                        onMouseEnter={() => setShowMemberShipList(!showMemberShipList)} onClick={() => setShowMemberShipList(!showMemberShipList)}
                    >Membership</button>
                    <span className=''><FiChevronDown color='green' size={20} /></span>
                    </div>
                    {showMemberShipList && (
                        <ul className="lg:absolute relative w-full lg:right-0 mt-2 lg:w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowMemberShipList(true)} onMouseLeave={() => setShowMemberShipList(!showMemberShipList)}>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Membership Benefits</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Join Kenaff</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Commodity Assosiation</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">County Farmers Assosiation</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Affiliate Members</p>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`${router.pathname === '/Media' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <Link href="/Media">
                        <p className="font-bold ">Media</p>
                    </Link>
                </div>
                <div className={`relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <div className={`flex flex-row justify-between items-center ${router.pathname === '/ScoreCard' || router.pathname === '/MonthlyReports' || router.pathname === '/AnnualRepoprts' || router.pathname === '/Magazine' || router.pathname === '/Downloads' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} w-full relative md:min-h-12 sm:min-h-12 rounded-lg`} onMouseEnter={() => setShowResourcesList(!showResourcesList)} onClick={() => setShowResourcesList(!showResourcesList)}>
                        <button className="font-bold"
                            onMouseEnter={() => setShowResourcesList(!showResourcesList)} onClick={() => setShowResourcesList(!showResourcesList)}
                        >Resources</button>
                        <span className=''><FiChevronDown color='green' size={20} /></span>
                    </div>
                    {showResourcesList && (
                        <ul className="lg:absolute relative w-full lg:right-0 mt-2 lg:w-32 py-2 bg-white rounded-lg shadow-xl" onMouseEnter={() => setShowResourcesList(true)} onMouseLeave={() => setShowResourcesList(!showResourcesList)}>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Score Card</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Monthly Reports</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Annual Reports</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Magazine</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p className="block text-green-500 p-2">Downloads</p>
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`${router.pathname === '/Partnerships' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <Link href="/Partnerships">
                        <p className="font-bold ">Partnership</p>
                    </Link>
                </div>
                <div className={`${router.pathname === '/Contact' ? 'bg-green-500 px-4 py-2 text-white' : 'text-green-500'} relative lg:flex-row flex-col flex lg:justify-center lg:items-center  lg:ml-4 md:min-h-12 sm:min-h-12 rounded-lg`}>
                    <Link href="/Contact">
                        <p className="font-bold">Contact Us</p>

                    </Link>
                </div>
            </div>
            </nav>
            );
        };
export default NavBar