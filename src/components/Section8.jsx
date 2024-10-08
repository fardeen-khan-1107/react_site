import React from 'react'

const Section8 = () => {
  return (
    <section data-scroll data-scroll-speed='.7' className='bg-[#cecdd3] w-full h-full mt-20 py-20'>
               <div className='flex w-full h-full sm:block md:block'>
                    <div className='w-1/2 text-7xl ml-10'>
                    Become <br /> part of The <br /> CubeHouse 
                    </div>
                    <div className='w-1/2 sm:w-full'>
                        <p className='w-2/6 text-4xl sm:w-[150px] md:w-[200px] md:ml-5 md:mt-10  sm:justify-center sm:py-10 sm:ml-5 sm:mt-12 sm:text-xl weight-medium border-2 border-solid border-[#a2a2a2] py-20 px-12'>G&S&</p>
                        <div className='mt-20  sm:ml-12 md:ml-12'>
                            <p className='text-xl font-semibold'>G&S&</p>
                            <p className='text-sm font-medium'>+31 20 673 3779</p>
                            <p className='text-sm font-medium'>info@gens.nl</p>
                        </div>
                    </div>
              </div>
              <div className='ml-10 mt-20'>
                <p className='text-xl italic'>
                Only three more floors left!
                </p>
                <p className='mt-10 text-lg leading-6'>
                Are you ready to accelerate your <br />
                 business? Contact us today and see <br />
                  firsthand how our prime location, <br />
                   flexible design, and modern amenities <br />
                    can elevate your company to new <br />
                     heights!
                </p>
                <p className='mt-12 w-64 bg-[#353535] text-white text-sm py-4 px-20 border-2 border-solid'>
                    available floors
                </p>
              </div>
    </section>
  )
}

export default Section8