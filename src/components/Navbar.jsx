  import React, { useState } from 'react'
  import video1 from "../assets/video1.mp4"
  import { IoMenu} from "react-icons/io5"
  import { HiMiniXMark } from "react-icons/hi2"

  const Navbar = () => {
    const links=[
      {
        name:"home",
        url:"/",
      },
      {
        name:"Building",
        url:"/",
      },
      {
        name:"Story",
        url:"/",
      },
      {
        name:"Menu",
        url:"/",
      },
      {
        name:"Location",
        url:"/",
      },
      {
        name:"Available",
        url:"/",
      },
      {
        name:"Contact",
        url:"/",
      },
    ]
    let[open,setopen]=useState(false)
    return (
      <section className="sub1 w-full cover h-[65rem]  ">
      <video src={video1} autoPlay loop className="absolute w-full h-[65rem] object-cover sm:w-[639px] sm:h-[110rem]" />
      <div className='flex'>
      <ul className={` relative top-12 bg-gray-900 shadow-sm bg-opacity-90 justify-center w-full  text-sm text-white cursor-pointer transition-all duration-500  ease-linear ${open ?'sm:top-12':'sm:top-[-490px]'}`}>
    <div className="w-full sm:block flex">
    {links.map(ups =>
        <li className='w-full  z-10 py-1 sm:text-lg'> 
          <a href="/" className='w-full text-white justify-between '>{ups.name}</a>
        </li>
      )}
    </div>
      </ul>
    <div onClick={()=>setopen(!open)} className='absolute text-white right-5 top-0 hidden sm:block'>
      {
        open ? <HiMiniXMark className='w-7 h-7'/>:<IoMenu className='w-7 h-7'/>
      }
    </div>
  </div>  
  <div className="size-full text-white sm:mt-0 w-full">
        <div className="relative  text-[10rem] top-28 flex justify-center sm:text-9xl  mm:text-8xl">The</div>
        <div className="relative  text-[10rem] top-32 flex  justify-start sm:text-9xl sm:top-[15rem] mm:text-8xl mm:top-[15rem]">Cube</div>
        <div className="relative  text-[10rem] top-[5rem]  flex  justify-end sm:text-9xl sm:top-[20rem] mm:text-8xl mm:top-[25rem]">House</div>
        <div className="relative  text-xl top-[8rem] sm:top-[23rem] sm:text-lg mm:text-[15px] mm:top-[27rem]  flex justify-center">
          The first hybrid-timber building at the Zuidas
        </div>
      </div>
    </section>
    );
  }

  export default Navbar