import React from 'react'
import img7 from "../assets/img7.jpg"

const section3 = () => {
  return (
    <section className='mt-48 '>
        <div className='ml-10 text-7xl font-family-[Borna]'>
        Versatile and fully equipped 
        </div>
        <div className='w-full flex mt-20'>
        <div
          className='w-4/6 bg-no-repeat bg-center h-[120vh]'
          style={{
            backgroundImage: `url('https://img2.storyblok.com/1824x1725/filters:quality(80)/f/229367/2800x4000/dbe16554e0/22_s7_g-s-cubehouse-stills_cam005.jpg')`,
            backgroundAttachment: 'fixed',
            backgroundSize: '70%',
            backgroundPositionX: 'left',
          }}
        ></div>
        <div className='w-2/6 px-10'> 
          <div className='w-[1/6] pl-8'>
            <hr className='border-black' />
            <div className='w-full flex'>
            <img src={img7} alt="img7" className='w-[25%] mt-10' />
            <div className='ml-4 pt-20 font-sans'>
              <p className='text-sm leading-4 font-semibold'>
              13 Floors in total:
              </p>
              <p className='text-gl'>
              Approx. 16,300 sq.m.
              </p>
            </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
    </section>
  );
}

export default section3