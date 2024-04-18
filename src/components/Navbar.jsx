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
      <section className="sub1 w-full cover h-[55rem] ">
      <video src={video1} autoPlay loop className="absolute w-full h-[55rem] object-cover" />
      <div className='flex '>
      <ul className={`relative  top-20 text-sm text-white cursor-pointer transition-all duration-500  ease-linear ${open ?'top-12':'top-[-490px]'}`}>
    <div className="w-full sm:block flex justify-around">
    {links.map(ups =>
        <li className='py-1 sm:text-lg'> 
          <a href="/" className='relative'>
            {ups.name}
          </a>
        </li>
      )}
    </div>
      </ul>
    <div onClick={()=>setopen(!open)} className='absolute text-white right-5 top-0 hidden sm:block'>
      {
        open ? <IoMenu className='w-7 h-7'/>:<HiMiniXMark className='w-7 h-7'/>
      }
    </div>
  </div>  
  <div className="size-full text-white">
        <div className="relative  text-[9rem] top-28 ml-[45rem]">The</div>
        <div className="relative  text-[9rem] top-32">Cube</div>
        <div className="relative  text-[9rem] top-[5.5rem] ml-[60rem]">House</div>
        <div className="relative  text-xl top-[8rem] ml-[35rem]">
          The first hybrid-timber building at the Zuidas
        </div>
      </div>
    </section>
    );
  }

  export default Navbar