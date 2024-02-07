import React from 'react'
import video1 from "../assets/video1.mp4"
const Navbar = () => {
  return (
    <section className="sub1 w-full h-[55rem]">
    <video src={video1} autoPlay loop className="absolute w-full h-[55rem] object-cover" />
    <div>
      <ul className='relative z-10 flex justify-around top-20 text-sm text-white cursor-pointer'>
      <li className="relative group">
          <span className="absolute bottom-0 h-0.5 bg-white w-0  duration-200  group-hover:w-full"></span>
          Home
        </li>
        <li className="relative group">
          <span className="absolute bottom-0 h-0.5 bg-white w-0 duration-200 group-hover:w-full"></span>
         Building
        </li>
        <li className="relative group">
          <span className="absolute bottom-0 h-0.5 bg-white w-0 duration-200 group-hover:w-full"></span>
         Story
        </li>
        <li className="relative group">
          <span className="absolute bottom-0 h-0.5 bg-white w-0 duration-200 group-hover:w-full"></span>
         Menu
        </li>
        <li className="relative group">
          <span className="absolute bottom-0 h-0.5 bg-white w-0 duration-200 group-hover:w-full"></span>
         Location
        </li>
        <li className="relative group">
          <span className="absolute bottom-0 h-0.5 bg-white w-0 duration-200 group-hover:w-full"></span>
         Availability
        </li>
        <li className="relative group">
        <span className="absolute bottom-0 h-0.5 w-0 bg-white duration-200  group-hover:w-full" />
         Contact
        </li>
      </ul>
    </div>
    <div className="size-full">
      <div className="relative text-white text-[9rem] top-28 ml-[45rem]">The</div>
      <div className="relative text-white text-[9rem] top-32">Cube</div>
      <div className="relative text-white text-[9rem] top-[5.5rem] ml-[60rem]">House</div>
      <div className="relative text-white text-xl top-[8rem] ml-[35rem]">
        The first hybrid-timber building at the Zuidas
      </div>
    </div>
  </section>
  );
}

export default Navbar