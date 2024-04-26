import React from 'react'
import img15 from "../assets/img15.jpg"

const Section7 = () => {
  return (
    <section className='w-full flex sm:block md:block mt-52 md:mt-[600px]'>
        <div className='w-5/12 sm:w-full sm:flex sm:justify-center md:w-full md:flex md:justify-center'>
            <img src={img15} alt="img15" className='w-full sm:w-11/12   md:w-11/12' />
        </div>
        <div className='w-7/12 pl-32 md:pl-10 sm:w-full sm:pl-5 sm:mt-20 md:w-full md:mt-20'>
            <div className='text-6xl sm:text-4xl md:text-6xl'>
            Only 8 minute travel <br />
             time to Amsterdam  <br />
             Central
            </div>
            <div className='text-gl w-[320px] leading-5  pt-20'>
            The CubeHouse is designed with the 
             15-minute City concept in mind. This 
              means that everyone should have 
              access to essential urban services 
               within a 15-minute walk or bike ride. 
                Thanks to its location at the heart of 
                 the Zuidas, The CubeHouse is perfectly 
                 connected. It will only take you 2 
                  minutes to get to the new Zuidas 
                  Station (by foot); 5 minutes to Schiphol 
                   International Airport (by train) and 8 
                   minutes to Amsterdam Central Station 
                    (by train). Various shops and 
                    restaurants in the beating heart of the 
                     Zuidas, as well as numerous schools 
                      and universities, are just around the 
                      corner.
            </div>
            <div  className='text-gl leading-5 pt-10'>
            The CubeHouse aligns perfectly with <br />
            the cities plans for the Zuidasdok. This <br />
             plan envisions the Zuidas as <br />
              Amsterdam’s second center, a well- <br />
              connected, international area where <br />
               working, living and enjoying life are all <br />
                interconnected.

            </div>
            <div className='mt-7 border-2 w-52 flex justify-centerpy-2 px-12'>
                Read more
            </div>
        </div>
    </section>
  )
}

export default Section7