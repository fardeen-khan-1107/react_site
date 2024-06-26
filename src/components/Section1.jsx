import React from 'react';

const Section1 = () => {
  return (
    <section className='sub2 w-full  h-auto mm:h-[95rem] bg-[#e9fb6d] relative'>
      <div className='w-auto h-auto'>
        <div className='ml-20 py-32 w-[40rem] font-family-[Borna] md:text-6xl md:w-[26rem] text-8xl text-black sm:text-4xl sm:w-[20rem] sm:ml-5 mm:text-5xl mm:w-[20rem] mm:py-32'>
          The first hybrid-timber building at the Zuidas
        </div>
        <div className='w-full flex mt-20 sm:block md:block'>
        <div
          className='w-4/6 bg-no-repeat bg-center h-[120vh] sm:h-[30vh] md:[50vh] mm:h-[30vh] lg:h[50vh] lg:mb-20'
          style={{
            backgroundImage: `url('https://img2.storyblok.com/1824x1725/filters:quality(80)/f/229367/1950x2924/cf9ba29453/stocksy_txpfaa671a2k3j300_large_4883606.jpg')`,
            backgroundAttachment: 'fixed',
            backgroundSize: '70%',
            backgroundPositionX: 'left',
          }}
        ></div>
        <div className='w-2/6 pl-24 lg:pl-12 sm:w-full  lg:mt-52 md:mt-0 md:w-full md:pb-20'> 
         <div className='text-2xl mt-10 font-family-[GT Alpina Fine] md:w-full sm:text-xl'>
         Creating New Dimensions
         </div>
         <div className='text-lg w-[300px] sm:w-[230px] font-family-[Borna] mt-8 leading-5 font-normal lg:text-sm'>
         Offices today are not what they once 
         used to be. The CubeHouse is a next-
         generation office building, designed to
          inspire, connect and accelerate 
          tomorrow’s working world. Our three-
          dimensional approach creates spaces 
          where visitors, businesses and nature 
          can thrive, proving that sometimes the
           best things come from thinking inside 
           the box.

         </div>
         <div className='text-lg w-[300px] sm:w-[230px]  font-family-[Borna] mt-5 leading-5 font-normal lg:text-sm'>
         Unwilling to settle for just excelling in
          one area, The CubeHouse pushes the 
          envelope on every front. As the very 
          first hybrid timber building of the
           Zuidas, well-connected to all parts of
            the city and publicly accessible, it truly
             ticks all the boxes. Add to this a vibrant
              entrance, lively rooftop gardens,
               integrated breathe spaces and stunning 
               views and there you have it: a future-
               proof office building, empowering users 
               to reach their full potential day after 
               day.
         </div>
         <div className='mt-10 py-4 px-20 w-72 h-14  bg-[#353535] text-white text-sm border-solid border-2 border-black rounded-[3px]'>
           avaliable floors 
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;