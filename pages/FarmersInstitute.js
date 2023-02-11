import Image from 'next/image'
import React from 'react'
import Parallax from './components/Parallax'

function FarmersInstitute() {
  return (
    <div className=''>
        <Parallax/>
        <div className='flex flex-row justify-center items-center mt-10'>
            <div className='w-full flex justify-center items-center'>
                  <Image src='/WebsitePhotos/Fj_9AcLWQAAm8gP.jpeg' width={800} height={400} />
            </div>
              <div className='w-full flex justify-center flex-col items-center'>
                  <p className='p-4'>KENAFF believes that Kenya`s agricultural sector has a lot of untapped potential. The many opportunities in the crops, livestock, fisheries and forests and forestry products can provide millions of unemployed/underemployed Kenyans with viable pathways to quality livelihoods and wealth creation

                      The KENAFF BFI develops and deploys leadership, technical and business management training and skill building programmes for people out to leverage opportunities in the agricultural value chains. Using different tools, KENAFF becomes the caring sounding board upon which the beginning farmer gets answers to questions, encouragement and linkages to resources like technical advisory services, inputs and logistics, financial services and markets. Through educational sessions, business case studies and toolkits, experiential learning, professional speakers and farm-tours and stays, the KENAFF BFI programme has everything that the beginning (and determined) farmer needs to excel.

                      Fill the form below to apply to the KENAFF BFI, 2018 Please Note: The KENAFF BFI accepts applications only for candidates who`ve already made the decision and have a plan to leverage opportunities in the agricultural value chain</p>
                <button className='bg-green-500 px-4 rounded-lg py-2'>REGISTER NOW</button>    
            </div>
        </div>
    </div>
  )
}

export default FarmersInstitute