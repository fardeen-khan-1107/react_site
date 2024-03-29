import React, { useState } from 'react';
import img1 from "../assets/img1.jpg";

const Section4 = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className='w-full h-auto bg-[#e5f77d]'>
      <div className='w-full flex'>
        <div className='w-7/12'>
        <div style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity 0.3s ease-in-out top-52' }}>
          <img src={img1} alt="img14" className='w-5/6' />
        </div>
        </div>
        <div className='w-5/12 mt-10'>
          <div className='text-5xl font-serif text-[#ccdc6f] hover:text-black duration-200' onClick={() => { setOpen(!open) }}>
            BREEAM EXCELLENT
          </div>
          <div className='mt-72'>
          <div style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity 0.3s ease-in-out top-52' }}>
            <div className='text-lg ml-32'>
              Rooftop garden
            </div>
            <div className='text-lg ml-32 mt-10 leading-5'>
              The publicly accessible rooftop garden <br />
              adds lush greenery to a rather petrified <br />
              Zuidas. Here, tenants and visitors can <br />
              enjoy lunch outdoors, surrounded by a <br />
              variety of flora and fauna. Apart from <br />
              boosting employees’ work pleasure and <br />
              well-being, the rooftop garden ensures <br />
              coolness when needed and store large <br />
              amounts of water (after heavy rain fall). <br />
              This combination of greenery and water <br />
              storage means that The CubeHouse <br />
              will be a climate-adaptive office <br />
              complex.
            </div>
            <div className='w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center'>
              Read more
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
