import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
const faqs = [
    {
        question: 'Lobby, Advocacy, and Policy Action',
        answer: 'Mobilize and organize farmers to lobby for and nurture a farmer-friendly policy, regulatory, and taxation environment that guarantees optimal income and quality livelihoods for farmers. Through training and modelling programmes, KENAFF shall build the capacity of KENAFF leaders at the grassroots (ward and sub-county), county and, finally, national levels to do this. In essence, farmers shall be challenged to leverage their numbers, the critical value of their enterprises and to negotiate a better deal for themselves. This pillar shall be organized under the rallying call "A fair deal for Kenyan farmers."'
    },
    {
        question: 'Members` Service',
        answer: 'Enhanced member services in pursuit of a fair deal for farmers, KENAFF shall enhance more and better member services through her anchor organs; County Associations, Commodity associations, KENAFF Youth Council and KENAFF Women Council. Of note here shall be farmers` health insurance as well as social security.'
    }, 
    {
        question: 'Contribute to a sustainable Kenyan agri-food system',
        answer: 'Contribute to a sustainable Kenyan agri-food system: lobby the national and sub-national governments to co-create with KENAFF and other actors a suitable environment for a sustainable agri-food system in Kenya. Such a system shall be possible through the progressively higher and commensurate allocation of resources to the sector (Malabo Declaration); deliberate and sustained mobilization, organization and registration of farmers into market- driven entities (this is where KENAFF excels); commercialization of priority value chains from farm to fork; promoting climate-resilient agriculture; and, promoting access to credit, insurance and structured markets for all farmers.'
    },
    {
        question: 'Leverage the energy, enthusiasm, innovation and knowledge of the youth and women to drive value chain development and commercialization',
        answer: 'Leverage the energy, enthusiasm, innovation and knowledge of the youth and women to drive value chain development and commercialization: harness the profound potential of women and the youth to tap into the sector’s myriad opportunities for employment and wealth creation. The KENAFF National Women Council and the KENAFF National Youth Development Council shall be the vehicles.'
    },
    {
        question: 'Farmer-driven climate action and resilience building against shocks and emergencies',
        answer: 'Farmer-driven climate action and resilience building against shocks and emergencies: support farmers’ organizations at all levels to build capacities for climate-smart agriculture; including livestock, fisheries, aquaculture, apiculture and farm forestry; contribute to the enhancement of Kenyas forest cover as well as the Regreening Kenya Initiative through the 10-year KENAFF Farm Forestry and Afforestation Programme, (KENAFF FF&AP), which intends to mobilize Kenyan farmers from all the 47 counties to plant 10 billion trees over ten years (2021 to 2030); promote and entrench a tree value chain in Kenya’s agricultural sector; promote other climate enhancing practices including sustainable land management practices, fodder banking, climate-responsive farming systems, and payment for ecosystem services.'
    },
    {
        question:'Data innovations and Information and Communication Technology (ICT) in agriculture',
        answer:'Data innovations and Information and Communication Technology (ICT) in agriculture: promote the application of ICT and data innovations in the agricultural sector for optimal production and productivity. KENAFF shall promote digital applications in knowledge sharing and information dissemination, provision of technical advisory, market facilitation and weather data services. Others will be the elimination of fake farm inputs, traceability, food safety and KilimoHub (KENAFF hubs) for ongoing training and advisory services for farmers.'
    },
    {
        question: 'Partnership and Collaboration',
        answer: 'Partnership and Collaboration: all sector actors and the agri-food system who share a standard holistic view of the agriculture sector in Kenya rally for complementarity of tasks and synergy of expertise on well-defined sector priorities and goals towards agricultural development and transformation.'
    },
    // Add more FAQ items here
];

const FaqItem = ({ question, answer, index, activeIndex, setActiveIndex }) => {
    return (
        <div className="border-b min-h-10 px-4 py-2 border-gray-800">
            <h2 className="text-lg font-medium text-black cursor-pointer pb-2" onClick={() => setActiveIndex(index)}>
                {question}
            </h2>
            <AnimatePresence>
                {activeIndex === index && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="mt-4 text-gray-500"
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const StrategicPlan = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="container w-full top-60 relative mx-auto px-4 py-16">
            <h1 className="text-3xl font-medium text-center text-black">
                Strategic Plan 2022-2026
            </h1>
            <div className='flex flex-row px-4 py-16'>
                <Image
                    className="w-full h-full object-cover rounded-lg"
                    src='/WebsitePhotos/WhatsAppImage2023-02-07at7.06.58PM.jpeg'
                    alt='Kenaff Strategic Plan'
                    width={300}
                    height={200}
                />
                <div className='flex flex-col w-full'>
                    {faqs.map((faq, index) => (
                        <FaqItem key={faq.question} question={faq.question} answer={faq.answer} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                    ))}
                </div>
                
            </div>
            
        </div>
    );
};


export default StrategicPlan