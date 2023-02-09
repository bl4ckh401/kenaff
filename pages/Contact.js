import { useState } from "react";
import Parallax from "./components/Parallax";
import { FaFax, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to submit the form data
    };

    return (
        <div className="">
            <Parallax/>
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
            
            <div className="flex w-3/4 mx-auto flex-row justify-center items-center
            ">
                <form onSubmit={handleSubmit} className="w-1/2 p-4">
                    <div className="flex flex-col justify-center p-4 rounded-lg shadow-lg bg-white items-center w-3/4">
                        <div className="flex flex-col md:flex-row  md:items-center md:justify-between">
                            <div className="w-full md:w-1/2 mt-4 md:mt-0">
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-400 p-2 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 mt-4 md:mt-0">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-400 p-2 rounded-lg"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:flex-col md:items-center md:justify-center">
                            <div className="w-full md:w-full mt-4 md:mt-0">
                                <label
                                    htmlFor="phone"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-400 p-2 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="w-full mt-4">
                                <label
                                    htmlFor="message"
                                    className="block text-lg font-medium text-gray-700 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-400 p-2 h-32 rounded-lg"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                <div className="w-1/2">
                    <img
                    className="w-full h-full object-cover rounded-lg"
                    src='https://via.placeholder.com/600/771796'
                    alt='Kenaff Strategic Plan'
                />
                </div>
                
            </div>
            <div className="mt-4 flex flex-col justify-center items-center text-center">
                <h1>Get In Touch</h1>
                <div className="mt-2 flex flex-col justify-center items-center text-gray-700">
                    <span className="">
                        <FaMapMarkerAlt size={40} color='green'/>
                    </span>
                    <div className="text-lg w-1/2 font-medium">Address</div>

                    Farmers Conference Centre Along Thogoto Mutarakwa Road<br/> P. O. Box 43148-0040, Nairobi, Kenya
                </div>
                <div className="mt-4 text-lg flex flex-col justify-center items-center font-medium">
                    <span className="">
                        <FaPhoneAlt size={40} color='green' />
                    </span>
                    Phone
                    <div className="mt-2 text-gray-700">+254 723903957</div>

                </div>
                <div className="mt-4 text-lg flex flex-col justify-center items-center font-medium">
                    <span className="">
                        <FaFax size={40} color='green' />
                    </span>
                    Fax
                    <div className="mt-2 text-gray-700">+254 741441743</div>
                </div>
                <div className="mt-4 text-lg flex flex-col justify-center items-center font-medium">
                    <span className="">
                        <FaMailBulk size={40} color='green' />
                    </span>
                    Email
                    <div className="mt-2 text-gray-700">farmers@kenaff.org</div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;