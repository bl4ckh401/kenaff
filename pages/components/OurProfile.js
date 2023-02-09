import Image from 'next/image';
import React, { useState } from 'react'

const images = [
    {
        url: "/WebsitePhotos/FaV3gZwXgAAYNuR.jpeg",
        alt: "Slide 1"
    },
    {
        url: "/WebsitePhotos/FawJE-eXEAAafGC.jpeg",
        alt: "Slide 2"
    },
    {
        url: "/WebsitePhotos/Fduhxl_XgAEOGar.jpeg",
        alt: "Slide 3"
    },
    {
        url: "/WebsitePhotos/FhGd_OCWIAAqyCK.jpeg",
        alt: "Slide 1"
    },
    {
        url: "/WebsitePhotos/FhRG7gbWIAAInZe.jpeg",
        alt: "Slide 2"
    },
    {
        url: "/WebsitePhotos/FhRGDWRXoAAhimM-2.jpeg",
        alt: "Slide 3"
    },
    {
        url: "/WebsitePhotos/FhRHsr3XoAEbpOd.jpeg",
        alt: "Slide 2"
    }, 
    {
        url: "/WebsitePhotos/Fi9Qx95XkAEzpk0.jpeg",
        alt: "Slide 2"
    }, 
    {
        url: "/WebsitePhotos/Fi9Ua_UXgAEhYAi.jpeg",
        alt: "Slide 2"
    }, 
    {
        url: "/WebsitePhotos/Fi9UZDZXgAAswex.jpeg",
        alt: "Slide 2"
    }, 
    {
        url: "/WebsitePhotos/Fj_9AcLWQAAm8gP.jpeg",
        alt: "Slide 2"
    },
];

function OurProfile() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = images[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((currentIndex + images.length - 1) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

  return (
    <div className="relative top-60 bg-cover bg-center" style={{ backgroundImage: 'url(https://image.shutterstock.com/shutterstock/photos/1843204999/display_1500/stock-photo-ngo-caucasian-young-man-showing-in-his-phone-new-developments-to-an-african-villager-1843204999.jpg)' }}>
          <div className="h-full bg-green-500 py-4 opacity-90 flex justify-start flex-col items-center">
              <h1 className='text-6xl font-bold text-white'>Our Profile</h1>
              <p className='text-white py-4 text-2xl'>Our Vision is to provide an inclusive, strong, influential and respected National Farmers’ Organization.</p>
              <button className='text-white py-4 rounded-l-full rounded-r-full px-2 text-2xl bg-blue-500'>Our Work</button>
              <div className='w-full flex flex-row'>
                <div className='flex justify-center w-full items-center'>
                      <h1 className='text-6xl w-full text-center font-bold text-white'>#Zero Hunger</h1>
                </div>
                  <div className="relative w-full justify-center items-center flex overflow-hidden h-64">
                      <div className="relative h-full w-3/4">
                          <Image
                            width={800}
                            height={400}
                              className="absolute h-full w-full object-cover"
                              src={currentImage.url}
                              alt={currentImage.alt}
                          />
                      </div>
                      <div className="absolute bottom-0 w-3/4 p-4 flex justify-between items-center">
                          <button
                              onClick={handlePrev}
                              className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-l"
                          >
                              Prev
                          </button>
                          <button
                              onClick={handleNext}
                              className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-r"
                          >
                              Next
                          </button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default OurProfile