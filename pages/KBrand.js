import Head from "next/head";
import Image from "next/image";
import Parallax from "./components/Parallax";

const KBrand = () => (
    <div className="flex flex-col min-h-screen">
        <Head>
            <title>KBrand - KENAF Brands</title>
        </Head>
        <Parallax/>
        <div className="flex justify-center items-start flex-col">
            <div className="md:w-2/3 w-full bg-white">
                <h1 className="text-2xl font-bold mb-6">Home</h1>
                <h2 className="text-xl font-bold mb-6">KENAF Brands</h2>
                <div className="flex justify-center w-full items-center flex-col md:flex-row">
                    <Image width={400} height={400} src="/DamacrestPPL.webp" alt="conservation image" className="mb-6" />
                <div className="p-4">
                    <h3 className="text-lg text-white italic w-fit bg-green-300 px-4 py-2 rounded-2xl mb-2">CONSERVATION</h3>
                    <p className="mb-6 w-3/4">
                        FARM FORESTRY AND AFFORESTATION PROGRAMME
                        <br />
                        The programme`s development objective, enhancing the incomes and livelihoods of Kenyan smallholder farmers through tree value chains is premised on the mutualism between agriculture and forestry
                    </p>
                    <button className="text-lg text-white italic w-fit bg-green-500 px-4 py-2 rounded-2xl mb-2">Visit Site</button> 
   
                </div>
                
                </div>
                <div className="flex justify-center items-center flex-col md:flex-row w-full">
                    <Image width={400} height={400} src="/DamacrestPPL.webp" alt="education and technology image" className="mb-6" />
                    <div className="p-4">
                    <h3 className="text-lg text-white italic w-fit bg-green-300 px-4 py-2 rounded-2xl mb-2">EDUCATION & TECHNOLOGY</h3>   
                    <p className="mb-6 w-3/4">
                        KENAFF VIDEO LIBRARY! KNOWLEDGE FOR PRACTICAL AGRICULTURE
                        <br />
                        On this website farmers will find free, high-quality learning videos and texts with practical use for their daily work in agriculture.
                    </p>
                        <button className="text-lg text-white italic w-fit bg-green-500 px-4 py-2 rounded-2xl mb-2">Visit Site</button> 

                    </div>
                </div>
                <div className="flex justify-center items-center flex-col md:flex-row w-full">
                    <Image width={400} height={400} src="/DamacrestPPL.webp" alt="luxury image" className="mb-6" />
                    <div className="p-4">
                        <h3 className="text-lg text-white italic w-fit bg-green-300 px-4 py-2 rounded-2xl mb-2">LUXURY</h3>
                        <p className="mb-6 w-3/4">
                            KILIMO TALII
                        <br />
                        Kilimo Talii is a fabulous all-inclusive rural retreat, It`s best for family holidays and an ideal place for chilling out, parties and social gatherings. We have expansive well-manicured gardens that can carry out all sorts of events; weddings, birthday parties, graduations etc
                        </p>
                        <button className="text-lg text-white italic w-fit bg-green-500 px-4 py-2 rounded-2xl mb-2">Visit Site</button> 

                    </div>
                     
                </div>
               
                <div className="flex justify-center items-center flex-col md:flex-row w-full">
                    <Image width={400} height={400} src="/DamacrestPPL.webp" alt="luxury image" className="mb-6" />
                    <div className="p-4">

                    <h3 className="text-lg text-white italic w-fit bg-green-300 px-4 py-2 rounded-2xl mb-2">LUXURY</h3>
                    <p className="mb-6 w-3/4">
                        KILIMO GRAND RESORT
                        <br />
                        It`s one of those places in Nairobi where the refined luxury of internationally acclaimed cuisine and exceptional room amenities mingles effortlessly with lush vegetation amidst a huge swimming pool and kids garden. This is where you can`t help but celebrate living
                    </p>
                        <button className="text-lg text-white italic w-fit bg-green-500 px-4 py-2 rounded-2xl mb-2">Visit Site</button> 
                    </div>
                </div>
                
                <div className="flex justify-center items-center flex-col md:flex-row w-full">
                    <Image width={400} height={400} src="/DamacrestPPL.webp" alt="farmer's voice image" className="float-left mb-6 h-full" />
                <div className="px-4">
                    <h3 className="text-lg text-white italic w-fit bg-green-300 px-4 py-2 rounded-2xl mb-2">FARMER`S VOICE</h3>
                    <p className="mb-6 w-3/4">
                        KILIMO MEDIA INTERNATIONAL (KIMI)
                        <br />
                        Kilimo Media International (KiMI) is a farmer centered, media based agricultural advisory service provider whose aim is to make agricultural information
                    </p>
                    <button className="text-lg text-white italic w-fit bg-green-500 px-4 py-2 rounded-2xl mb-2">Visit Site</button> 
                </div>
                
                </div>
                
        </div>

            <div className="md:w-1/4 w-full bg-white p-6">
                <h2 className="text-xl font-bold mb-6">Subscribe to our Newsletter</h2>
                <form className="mb-6">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="p-2 mb-6 border border-gray-400 w-full"
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-300">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default KBrand;
