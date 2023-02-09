import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-900 mt-16 top-60 relative text-white py-10">
            <div className="container w-full mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 p-4">
                        <h4 className="mb-6 text-xl font-bold">Our Work</h4>
                        <ul className="list-reset">
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Hunger: Facts & Figures</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Challenges</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Progress & Impact</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Countries</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Projects & Programmes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <h4 className="mb-6 text-xl font-bold">News</h4>
                        <ul className="list-reset">
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Latest Articles</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Press Releases</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Publications</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-white hover:underline">Videos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full flex md:w-2/4 flex-row p-4">
                        <div className="w-full bg-gray-500 md:w-1/2 p-4">
                            <h4 className="mb-6 text-xl font-bold">Donation Account</h4>
                            <p className="mb-2">Deutsche Welthungerhilfe e. V.</p>
                            <p className="mb-2">Sparkasse KölnBonn</p>
                            <p className="mb-2">IBAN: DE15 3705 0198 0000 0011 15</p>
                            <p className="mb-2">BIC: COLSDE33</p>
                        </div>

                        <div className="w-full md:w-1/2 p-4">
                            <h4 className="mb-6 text-xl font-bold mt-6">Follow us</h4>
                            <p className="mb-2">Welthungerhilfe is recognised as a non-profit organisation by the German tax office; it is exempt from income taxes.</p>
                        </div>

                    </div>
                    
                </div>
            </div>
            <div className="container mx-auto flex flex-col justify-center items-center h-16 w-full text-center">
                <p>© {new Date().getFullYear()} My NGO</p>
            </div>
        </footer>
    )
}
export default Footer