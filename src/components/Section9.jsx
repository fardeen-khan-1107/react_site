import React from 'react'
import img18 from "../assets/img18.jpg"
import img17 from "../assets/img17.jpg"
import img9 from "../assets/img9.jpg"
import img7 from "../assets/img7.jpg"
import img19 from "../assets/img19.jpg"
import img16 from "../assets/img16.jpg"
const Section9 = () => {
  return (
    <section className='py-20 w-full h-auto bg-[#353535] pb-52'>
        <div className='text-white ml-10 text-8xl'>
        Your like-minded  <br />
        colleagues are <br />
        already here. 
        </div>
        <div className='w-64 mt-20 ml-10 py-3 px-20 bg-white border-2 border-solid border-white'>
            Join today
        </div>
        <div className=' mt-32 w-full flex justify-around'>
            <div className='w-[15%] hover:w-[20%] duration-700   hover:scale-150 hover:mr-20'>
                <img src={img18} alt="" className='w-full' />
            </div>
            <div className='w-[15%] hover:w-[20%] duration-700   hover:scale-150 hover:mr-20 hover:ml-20'>
                <img src={img19} alt="" className='w-full' />
            </div>
            <div className='w-[15%] hover:w-[20%] duration-700   hover:scale-150 hover:mr-20 hover:ml-20'>
                <img src={img16} alt="" className='w-full' />
            </div>
            <div className='w-[15%] hover:w-[20%] duration-700   hover:scale-150 hover:mr-20 hover:ml-20'>
                <img src={img9} alt="" className='w-full' />
            </div>
            <div className='w-[15%] hover:w-[20%] duration-700   hover:scale-150 hover:mr-20 hover:ml-20'>
                <img src={img7} alt="" className='w-full' />
            </div>
            <div className='w-[15%] hover:w-[20%] duration-700   hover:scale-150 hover:mr-20 hover:ml-20'>
                <img src={img17} alt="" className='w-full' />
            </div>
        </div>
    </section>
  )
}

export default Section9