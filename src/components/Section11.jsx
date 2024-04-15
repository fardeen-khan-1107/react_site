import React, { useState } from 'react';
import img19 from "../assets/img1.jpg";

const Section11 = () => {
  const [subSections, setSubSections] = useState([
    {
      index: 0,
      title: "BREEAM EXCELLENT",
      content: "Rooftop garden content for Sub-1",
      isOpen: false
    },
    {
      index: 1,
      title: "BREEAM EXCELLENT",
      content: "Rooftop garden content for Sub-2",
      isOpen: false
    },
    // Add more sub-sections as needed
  ]);

  const toggleSubSection = (index) => {
    setSubSections(subSections.map(sub => {
      if (sub.index === index) {
        return { ...sub, isOpen: !sub.isOpen };
      }
      return sub;
    }));
  };

  return (
    <section className='w-full h-[1000px] bg-[#e5f77d] mt-96'>
      <div className='main-1 w-full'>
        {subSections.map(sub => (
          <div className='w-full flex' key={sub.index}>
            <div className='w-7/12'>
              {sub.isOpen &&
                <div>
                  <img src={img19} alt="img14" className='w-5/6 h-[800px]' />
                  <div className='mt-72'></div>
                </div>
              }
            </div>
            <div className='w-5/12 mt-10'>
              <div>
                <div className={`text-5xl font-serif text-[#ccdc6f] hover:text-black duration-200 ${sub.isOpen ? 'active' : ''}`} onClick={() => toggleSubSection(sub.index)}>
                  {sub.title}
                </div>
                {sub.isOpen &&
                  <div className='mt-64'>
                    <div className='text-lg ml-32'>
                      {sub.content}
                    </div>
                    <div className='w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center'>
                      Read more
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section11;
