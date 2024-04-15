import React, { useState } from 'react';
import img19 from "../assets/img1.jpg";

const Section11 = () => {
  const [open, setOpen] = useState(null)

  const operation = (index) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  }

  return (
    <section className='w-full h-[1000px] mt-96 bg-[#e5f77d]'>
      <div className='w-full flex'>
      <div className={`text-3xl font-serif text-[#ccdc6f] hover:text-black duration-200 ${open === 0 ? 'active' : ''}`} onClick={() => operation(0)}>
              BREEAM EXCELLENT
            </div>
            <div className={`text-3xl font-serif text-[#ccdc6f] hover:text-black duration-200 ${open === 1 ? 'active' : ''}`} onClick={() => operation(1)}>
              BREEAM EXCELLENT
            </div>
            <div className={`text-3xl font-serif text-[#ccdc6f] hover:text-black duration-200 ${open === 2 ? 'active' : ''}`} onClick={() => operation(2)}>
              BREEAM EXCELLENT
            </div>
        <div className='w-7/12'>
          {open === 0 &&
            <div>
              <img src={img19} alt="img14" className='w-5/6 h-[800px]' />
            </div>
          }
        </div>
        <div className='w-7/12'>
          {open === 1 &&
            <div>
              <img src={img19} alt="img14" className='w-5/6 h-[800px]' />
            </div>
          }
        </div>
        <div className='w-7/12'>
          {open === 2 &&
            <div>
              <img src={img19} alt="img14" className='w-5/6 h-[800px]' />
            </div>
          }
        </div>

        {open === 0 &&
              <div className='mt-64'>
                <div className='text-lg ml-32'>
                  Rooftop garden
                </div>
                <div className='text-lg ml-32 mt-10 leading-5'>
                  The publicly accessible rooftop garden <br />
                  adds lush greenery to a rather petrified <br />
                  Zuidas. Here, tenants and visitors can <br />
                  enjoy lunch outdoors, surrounded by a <br />
                  variety of flora and fauna. Apart from <br />
                  boosting employees’ work pleasure and <br />
                  well-being, the rooftop garden ensures <br />
                  coolness when needed and store large <br />
                  amounts of water (after heavy rain fall). <br />
                  This combination of greenery and water <br />
                  storage means that The CubeHouse <br />
                  will be a climate-adaptive office <br />
                  complex.
                </div>
                <div className='w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center'>
                  Read more
                </div>
              </div>
            }


            {open === 1 &&
              <div className='mt-64'>
                <div className='text-lg ml-32'>
                  Rooftop garden
                </div>
                <div className='text-lg ml-32 mt-10 leading-5'>
                  The publicly accessible rooftop garden <br />
                  adds lush greenery to a rather petrified <br />
                  Zuidas. Here, tenants and visitors can <br />
                  enjoy lunch outdoors, surrounded by a <br />
                  variety of flora and fauna. Apart from <br />
                  boosting employees’ work pleasure and <br />
                  well-being, the rooftop garden ensures <br />
                  coolness when needed and store large <br />
                  amounts of water (after heavy rain fall). <br />
                  This combination of greenery and water <br />
                  storage means that The CubeHouse <br />
                  will be a climate-adaptive office <br />
                  complex.
                </div>
                <div className='w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center'>
                  Read more
                </div>
              </div>
            }


            {open === 2 &&
              <div className='mt-64'>
                <div className='text-lg ml-32'>
                  Rooftop garden
                </div>
                <div className='text-lg ml-32 mt-10 leading-5'>
                  The publicly accessible rooftop garden <br />
                  adds lush greenery to a rather petrified <br />
                  Zuidas. Here, tenants and visitors can <br />
                  enjoy lunch outdoors, surrounded by a <br />
                  variety of flora and fauna. Apart from <br />
                  boosting employees’ work pleasure and <br />
                  well-being, the rooftop garden ensures <br />
                  coolness when needed and store large <br />
                  amounts of water (after heavy rain fall). <br />
                  This combination of greenery and water <br />
                  storage means that The CubeHouse <br />
                  will be a climate-adaptive office <br />
                  complex.
                </div>
                <div className='w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center'>
                  Read more
                </div>
              </div>
            }








      </div>
      <div className='w-full flex'>
        <div className='w-7/12'>
          {open === 1 &&
            <div>
              <img src={img19} alt="img14" className='w-5/6 h-[800px]' />
              <div className='mt-72'></div>
            </div>
          }
        </div>
      </div>
    </section>
  );
}

export default Section11;
