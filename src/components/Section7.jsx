import React from 'react'
import img15 from "../assets/img15.jpg"

const Section7 = () => {
  return (
    <section className='w-full flex mt-52'>
        <div className='w-5/12'>
            <img src={img15} alt="img15" className='w-full' />
        </div>
        <div className='w-7/12 pl-32'>
            <div className='text-6xl'>
            Only 8 minute travel <br />
             time to Amsterdam  <br />
             Central
            </div>
            <div className='text-gl leading-5 pl-72 pt-20'>
            The CubeHouse is designed with the <br />
             15-minute City concept in mind. This <br />
              means that everyone should have <br />
              access to essential urban services <br />
               within a 15-minute walk or bike ride. <br />
                Thanks to its location at the heart of <br />
                 the Zuidas, The CubeHouse is perfectly <br />
                 connected. It will only take you 2 <br />
                  minutes to get to the new Zuidas <br />
                  Station (by foot); 5 minutes to Schiphol <br />
                   International Airport (by train) and 8 <br />
                   minutes to Amsterdam Central Station <br />
                    (by train). Various shops and <br />
                    restaurants in the beating heart of the <br />
                     Zuidas, as well as numerous schools <br />
                      and universities, are just around the <br />
                      corner.
            </div>
            <div  className='text-gl leading-5 pl-72 pt-10'>
            The CubeHouse aligns perfectly with <br />
            the cities plans for the Zuidasdok. This <br />
             plan envisions the Zuidas as <br />
              Amsterdam’s second center, a well- <br />
              connected, international area where <br />
               working, living and enjoying life are all <br />
                interconnected.

            </div>
            <div className='mt-7 border-2 w-52 flex justify-center ml-72 py-2 px-12'>
                Read more
            </div>
        </div>
    </section>
  )
}

export default Section7