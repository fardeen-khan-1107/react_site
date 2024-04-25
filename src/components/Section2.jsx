import React from 'react';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const Section2 = () => {
  return (
    <section className='mt-20 w-full h-auto'>
      <div className='ml-8 text-[5rem] leading-none font-family-[Borna] w-[700px] sm:text-4xl sm:w-[300px]'>
        A unique place to work at 
      </div>
      <div className='w-full flex flex-wrap  font-family-[Borna] justify-around pl-3 mt-20 sm:justify-between'>
        <div className='w-[15%] sm:w-[45%] mt-20'>
          <img src={img1} alt="img" className='w-11/12 h-2/6 sm:w-full' />
          <p className='text-lg font-medium leading-5 mt-3 sm:text-[18px] sm:w-40'>
            The first hybrid-timber building at the Amsterdam Zuidas
          </p>
          <p className='text-gl font-medium w-62  leading-5 text-[#a6a6a6] mt-3 sm:text-[15px]'>
            The CubeHouse will be Paris Proof upon delivery, certified with a WELL-gold indoor climate, and various unique features promoting sustainability and well-being.
          </p>
        </div>
        <div className='w-[15%] sm:w-[45%] mt-20'>
          <img src={img2} alt="img" className='w-11/12 h-3/6 sm:w-full' />
          <p className='text-lg font-medium leading-5 mt-3'>
            Extraordinary rooftop <br />garden  
          </p>
          <p className='text-gl font-medium leading-5 text-[#a6a6a6] mt-3'>
            The publicly accessible <br /> rooftop garden boosts <br /> health, wellbeing and <br /> enriches biodiversity of <br /> visitors of The <br />CubeHouse. 
          </p>
        </div>
        <div className='w-[15%] sm:w-[45%] mt-20'>
          <img src={img3} alt="img" className='w-11/12 h-2/6 sm:w-full' />
          <p className='text-lg font-medium leading-5 mt-3'>
            Breathe Spaces that <br /> connect inside and <br /> outside
          </p>
          <p className='text-gl font-medium leading-5 text-[#a6a6a6] mt-3'>
            Enjoy an abundance of <br />daylight and lush <br /> greenery at the three <br /> Breathe Spaces,<br /> connecting the interior <br />office spaces and the <br /> outdoors.          
          </p>
        </div>
        <div className='w-[15%] sm:w-[45%] mt-20'>
          <img src={img4} alt="img" className='w-11/12 h-3/6' />
          <p className='text-lg font-medium leading-5 mt-3'>
          Publically accessible
          </p>
          <p  className='text-gl font-medium  leading-5 text-[#a6a6a6] mt-3'>
          The publicly accessible <br /> ground floor, The Cube, is <br /> a place for socializing, <br /> collaborating, innovating <br /> and celebrating. </p>
        </div>
        <div className='w-[15%] sm:w-[45%] mt-20'>
        <img src={img5} alt="img" className='w-11/12 h-2/6' />
          <p className='text-lg font-medium leading-5 mt-3'>
          80% of energy generated from PV- <br />panels
          </p>
          <p  className='text-gl font-medium  leading-5 text-[#a6a6a6] mt-3'>
          The main part of the <br />building’s energy demand <br/> is generated sustainably, <br />with PV-panels on the <br />roofs and parts of the <br /> facade.
          </p>
        </div>
        <div className='w-[15%] sm:w-[45%] mt-20'>
          <img src={img6} alt="img" className='w-11/12 h-3/6' />
          <p className='text-lg font-medium leading-5 mt-3'>
          75% bio-based <br />materials
          </p>
          <p  className='text-gl font-medium  leading-5 text-[#a6a6a6] mt-3'>
          The CubeHouse’ frame is <br /> built primarily using <br />recycled and/ or <br /> biobased materials, <br /> mainly timber originating <br /> from sustainably <br />managed forests.</p>
          </div>
      </div>
      <div className='container ml-10 mt-20'>
        <p className='text-[1.3rem] italic font-family-[Borna] '>
          Already convinced?
        </p>
        <div className='mt-3 bg-[#353535] text-white w-64 py-3 px-10 text-sm rounded-md border-solid broder-black border-2'>
          <p className='px-7'> available floors</p>
        </div>
      </div> 
    </section>
  );
}

export default Section2;
