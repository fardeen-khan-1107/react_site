import React, { useState } from 'react';
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";

const Section6 = () => {
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);

  return (
    <section data-scroll data-scroll-section data-scroll-speed='1.2'  className='w-full h-[120vh]  relative -z-10'>
      <div className='text-7xl ml-12 my-32 sm:text-5xl'>
        Connecting the <br />
        Amsterdam Zuidas
      </div>
      <div
        className='w-full flex sm:block md:block mt-20 gap-10 group'>
        <div className='w-1/2 flex sm:block md:block justify-end relative sm:w-full md:w-full mb-10'
             onMouseEnter={() => setHide(true)}
             onMouseLeave={() => setHide(false)}
        >
          <img src={img13} alt="img13" className='w-72 h-72 hover:h-full hover:w-full duration-1000 sm:w-full sm:h-full md:w-full md:h-full' />
          <div className='hidden sm:block sm:text-2xl'>
          Only 2 minutes away from Zuidas Station
          </div>
          {hide && (
            <div className='absolute bottom-0 bg-white pl-52 pt-5 text-2xl w-full'>
             Only 2 minutes away from Zuidas Station
            </div>
          )}
        </div>
        <div
          className='w-1/2 flex sm:block  justify-start relative sm:w-full md:w-full'
          onMouseEnter={() => setHide1(true)}
          onMouseLeave={() => setHide1(false)}
        >
          <img src={img14} alt="img14" className='w-72 h-72 hover:h-full sm:mt-10 hover:w-full duration-1000 sm:w-full sm:h-full md:w-full md:h-full ' />
          <div className='hidden sm:block sm:text-2xl'>
          5 minutes travel time to Schiphol Airport
          </div>
          {hide1 && (
            <div className='absolute bottom-0 bg-white font-family-[Borna]  pt-5 text-2xl w-full'>
              5 minutes travel time to Schiphol Airport
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section6;
