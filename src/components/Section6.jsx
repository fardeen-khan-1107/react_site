import React, { useState } from 'react';
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";

const Section6 = () => {
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);

  return (
    <section className='w-full h-auto'>
      <div className='text-7xl ml-12 my-32'>
        Connecting the <br />
        Amsterdam Zuidas
      </div>
      <div
        className='w-full flex mt-20 gap-10 group'>
        <div className='w-1/2 flex justify-end relative'
             onMouseEnter={() => setHide(true)}
             onMouseLeave={() => setHide(false)}
        >
          <img src={img13} alt="img13" className='w-72 h-72 hover:h-full hover:w-full duration-1000' />
          {hide && (
            <div className='absolute bottom-0 bg-white pl-52 pt-5 text-2xl w-full'>
             Only 2 minutes away from Zuidas Station
            </div>
          )}
        </div>
        <div
          className='w-1/2 group relative'
          onMouseEnter={() => setHide1(true)}
          onMouseLeave={() => setHide1(false)}
        >
          <img src={img14} alt="img14" className='w-72 hover:w-full duration-1000' />
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
