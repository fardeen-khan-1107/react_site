import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import img19 from "../assets/img19.jpg"; 
import img18 from "../assets/img18.jpg";
import img20 from "../assets/img20.png"; 
import img21 from "../assets/img21.png";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";

const Section41 = () => {
  const [open, setOpen] = useState(Array(3).fill(false));

  const link = [
    {
      main: "BREEAM EXCELLENT",
      image: img19,
      title: "Rated ‘excellent’ according to the BREEAM standards, The CubeHouse scores very high as a sustainably built environment. Being BREEAM Excellent certified, means we work towards a holistic approach to achieve ESG  (Environmental, Social and Governmental factor), health and net zero goals."
    },
    {
      main: "Bio-based materials",
      image: img20,
      title: "Rated ‘excellent’ according to the BREEAM standards, The CubeHouse scores very high as a sustainably built environment. Being BREEAM Excellent certified, means we work towards a holistic approach to achieve ESG  (Environmental, Social and Governmental factor), health and net zero goals."
    },
    {
      main: "Paris Proof",
      image: img21,
      title: "Rated ‘excellent’ according to the BREEAM standards, The CubeHouse scores very high as a sustainably built environment. Being BREEAM Excellent certified, means we work towards a holistic approach to achieve ESG  (Environmental, Social and Governmental factor), health and net zero goals."
    },
    {
      main: "Reuse grey water system",
      image: img22,
      title: "Rated ‘excellent’ according to the BREEAM standards, The CubeHouse scores very high as a sustainably built environment. Being BREEAM Excellent certified, means we work towards a holistic approach to achieve ESG  (Environmental, Social and Governmental factor), health and net zero goals."
    },
    {
      main: "WELL GOLD",
      image: img23,
      title: "Rated ‘excellent’ according to the BREEAM standards, The CubeHouse scores very high as a sustainably built environment. Being BREEAM Excellent certified, means we work towards a holistic approach to achieve ESG  (Environmental, Social and Governmental factor), health and net zero goals."
    },
    {
      main: "Rooftop garden",
      image: img18,
      title: "Rated ‘excellent’ according to the BREEAM standards, The CubeHouse scores very high as a sustainably built environment. Being BREEAM Excellent certified, means we work towards a holistic approach to achieve ESG  (Environmental, Social and Governmental factor), health and net zero goals."
    },
  ];

  const toggle = (index) => {
    setOpen(prevOpen => {
      const newOpen= [...prevOpen]; 
      newOpen[index] = !prevOpen[index]; 
      return newOpen; 
    });
  };

  return (
    <section className='hidden sm:block md:block bg-[#e9fb6d]'>
      {link.map((item, index) => (
        <div key={index} className='w-auto h-auto py-10'>
          <hr />
          <div className='w-full flex justify-around' onClick={() => toggle(index)}>
            <span className='text-4xl sm:text-2xl font-[GT Alpina Fine]'>{item.main}</span>
            <div>
              <RiArrowDropDownLine className={`w-8 h-8 ${open[index] ? 'rotate-180' : ''}`} />
            </div>
          </div>
          {open[index] && (
            <div>
              <div className="w-full justify-center flex mt-20">
                <img src={item.image} className='w-3/6 h-[300px]' />       
              </div>
              <div className='w-full flex text-lg mt-10 justify-center'>
                <p className='w-[330px]'>{item.title}</p>
              </div>
            </div>
          )}
          <hr />
        </div>
      ))}
    </section>
  );
};

export default Section41;
