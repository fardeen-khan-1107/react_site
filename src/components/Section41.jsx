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
      title: "The CubeHouse is built using 75% reclaimed and/ or biobased materials for the structure, mainly timber. Biobased materials consist entirely of natural products, with the exclusion of fossil raw materials. About 13,000 m3 of sustainable timber will be used for The CubeHouse. This volume of timber will store up to 9,000 ton of CO2: this is as much as the emissions from the electricity consumption of 10,271 households in 1 year!"
    },
    {
      main: "Paris Proof",
      image: img21,
      title: "The CubeHouse has an MPG score (rating environmental performance of buildings) of 0.595. This means that the building meets the embodied carbon objective of Paris Proof: material-related emissions according to DGBC calculation protocol amount to 110 kg CO2-eq per m2 GFA."
    },
    {
      main: "Reuse grey water system",
      image: img22,
      title: "A grey water reuse system is a great way to reduce water waste and promote sustainability. The water crates on the roof surfaces collect up to 175 m3 of water. This water is then, for example, used to flush the toilets."
    },
    {
      main: "WELL GOLD",
      image: img23,
      title: "To promote the health and well-being of the building’s tenants, The CubeHouse is designed with the WELL Building standard in mind. The shell is Well Gold-certified. This means that the users and visitors quality of life is at the top of our agenda."
    },
    {
      main: "Rooftop garden",
      image: img18,
      title: "The publicly accessible rooftop garden adds lush greenery to a rather petrified Zuidas. Here, tenants and visitors can enjoy lunch outdoors, surrounded by a variety of flora and fauna. Apart from boosting employees’ work pleasure and well-being, the rooftop garden ensures coolness when needed and store large amounts of water (after heavy rain fall). This combination of greenery and water storage, means that The CubeHouse will be a climate-adaptive office complex."
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
    <section className='hidden sm:block md:block bg-[#e9fb6d] mt-20'>
        <div className='w-full flex justify-center pt-10'>
          <hr  className='border-[#b7c664] w-5/6'/>
          </div>
      {link.map((item, index) => (
        <div key={index} className='w-auto h-auto py-10'>
            <div className='w-full flex justify-around' onClick={() => toggle(index)}>
            <span className='text-4xl sm:text-2xl font-[GT Alpina Fine]'>{item.main}</span>
            <div>
              <RiArrowDropDownLine className={`w-8 h-8 duration-500 ${open[index] ? 'rotate-180' : ''}`} />
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
          <div className='w-full flex justify-center mt-10'>
          <hr  className='border-[#b7c664] w-5/6'/>
          </div>
        </div>
      ))}
      <div className='w-full text-white flex ml-10 '>
        <p className='w-32  rounded-sm px-6 py-2 bg-[#353535] mb-10'>Read more</p>
      </div>
    </section>
  );
};

export default Section41;
