import React, { useState } from "react";
import img19 from "../assets/img1.jpg";
import img20 from "../assets/img20.png";
import img21 from "../assets/img21.png";
import img22 from "../assets/img22.jpg";
import img18 from "../assets/img18.jpg";
import img23 from "../assets/img23.jpg";

const Section4 = () => {
  const [open, setOpen] = useState(null);

  const operation = (index) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <section className="w-full h-[1000px] bg-[#e5f77d] mt-48">
      <div className="w-full flex">
        <div className="w-7/12">
          {open === 0 && (
            <div>
              <img
                src={img19}
                alt="img14"
                className="w-5/6 h-[800px]"
              />
            </div>
          )}
        </div>

        <div className="w-5/12 mt-10">
          <div
            className={`text-4xl font-[GT Alpina Fine] text-[#ccdc6f] hover:text-black duration-200 ${open === 0 ? "active" : ""
              }`}
            onClick={() => operation(0)}>
            BREEAM EXCELLENT
          </div>
          <div
            className={`text-4xl font-[GT Alpina Fine] text-[#ccdc6f] hover:text-black duration-200 ${open === 1 ? "active" : ""
              }`}
            onClick={() => operation(1)}>
            Bio-based materials
          </div>
          <div
            className={`text-4xl font-[GT Alpina Fine] text-[#ccdc6f]  hover:text-black duration-200 ${open === 2 ? "active" : ""
              }`}
            onClick={() => operation(2)}>
            Paris Proof
          </div>
          <div
            className={`text-4xl font-[GT Alpina Fine] text-[#ccdc6f]  hover:text-black duration-200 ${open === 3 ? "active" : ""
              }`}
            onClick={() => operation(3)}>
            Reuse grey water system
          </div>
          <div
            className={`text-4xl font-[GT Alpina Fine] text-[#ccdc6f]  hover:text-black duration-200 ${open === 4 ? "active" : ""
              }`}
            onClick={() => operation(4)}>
            WELL GOLD
          </div>
          <div
            className={`text-4xl font-[GT Alpina Fine] text-[#ccdc6f]  hover:text-black duration-200 ${open === 5 ? "active" : ""
              }`}
            onClick={() => operation(5)}>
            Rooftop garden
          </div>
          {open === 0 && (
            <div className="mt-10">
              <div className="text-2xl ml-32 font-khan">Rooftop garden</div>

              <div className="text-lg ml-32 mt-10 leading-5">
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
              <div className="w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center">
                Read more
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-7/12">
          {open === 1 && (
            <div>
              <img
                src={img20}
                alt="img20"
                className="w-5/6 h-[800px] mt-[-279px]"
              />
            </div>
          )}
        </div>
        <div className="w-5/12 mt-10 sub-2">
          <div>
            {open === 1 && (
              <div>
                <div className="text-2xl ml-32">
                Bio-based materials
                </div>
                <div className="text-lg ml-32 mt-10 leading-5">
                The CubeHouse is built using 75% <br/>
                reclaimed and/ or biobased materials<br/>
                for the structure, mainly timber.<br/>
                Biobased materials consist entirely of<br/>
                natural products, with the exclusion of<br/>
                fossil raw materials. About 13,000 m3 of<br/> 
                sustainable timber will be used for<br/> 
                The CubeHouse. This volume of timber will <br/>
                store up to 9,000 ton of CO2: this is as<br/>
                 much as the emissions from<br/> the electricity consumption of 10,271 households in 1 year!
                </div>
                <div className="w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center">
                  Read more
                </div>
              </div>
            )}
          </div>
        </div>
    </div>


    <div className="w-full flex">
        <div className="w-7/12">
          {open === 2 && (
            <div>
              <img
                src={img21}
                alt="img21"
                className="w-5/6 h-[800px] mt-[-318px]"
              />
            </div>
          )}
        </div>
        <div className="w-5/12 mt-10 sub-2">
          <div>
            {open === 2 && (
              <div className="">
                <div className="text-2xl ml-32">
                Paris Proof
                </div>
                <div className="text-lg ml-32 mt-10 leading-5">
                The CubeHouse has an MPG score <br /> 
                (rating environmental performance of <br />
                buildings) of 0.595. This means that the <br />
                building meets the embodied carbon <br />
                objective of Paris Proof: material<br />
                -related emissions according to DGBC<br />
                calculation protocol amount to 110 kg<br />
                 CO2-eq per m2 GFA.
                </div>
                <div className="w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center">
                  Read more
                </div>
              </div>
            )}
          </div>
        </div>
    </div>

    <div className="w-full flex">
        <div className="w-7/12">
          {open === 3 && (
            <div>
              <img
                src={img22}
                alt="img22"
                className="w-5/6 h-[800px] mt-[-358px]"
              />
            </div>
          )}
        </div>
        <div className="w-5/12 mt-10 sub-2">
          <div>
            {open === 3 && (
              <div className="">
                <div className="text-2xl ml-32">
                Reuse grey water system
                </div>
                <div className="text-lg ml-32 mt-10 leading-5">
                A grey water reuse system is a great <br/>
                way to reduce water waste and <br/>
                promote sustainability. The water <br/>
                crates on the roof surfaces collect up <br/>
                to 175 m3 of water. This water is then, <br/>
                for example, used to flush the toilets
                </div>
                <div className="w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center">
                  Read more
                </div>
              </div>
            )}
          </div>
        </div>
    </div>

    <div className="w-full flex">
        <div className="w-7/12">
          {open === 4 && (
            <div>
              <img
                src={img18}
                alt="img18"
                className="w-5/6 h-[800px] mt-[-398px]"
              />
            </div>
          )}
        </div>
        <div className="w-5/12 sub-2">
          <div>
            {open === 4 && (
              <div className="">
                <div className="text-2xl ml-32">
                WELL GOLD
                </div>
                <div className="text-lg ml-32 mt-10 leading-5">
                To promote the health and well-being of <br/>
                the building’s tenants, The CubeHouse <br/>
                is designed with the WELL Building <br/>
                standard in mind. The shell is Well Gold-<br/>
                certified. This means that the users and <br/>
                visitors quality of life is at the top of <br/>
                our agenda.
                </div>
                <div className="w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center">
                  Read more
                </div>
              </div>
            )}
          </div>
        </div>
    </div>


    <div className="w-full flex">
        <div className="w-7/12">
          {open === 5 && (
            <div>
              <img
                src={img23}
                alt="img23"
                className="w-5/6 h-[800px] mt-[-398px]"
              />
            </div>
          )}
        </div>
        <div className="w-5/12  sub-2">
          <div>
            {open === 5 && (
              <div>
                <div className="text-2xl ml-32">
                Rooftop garden
                </div>
                <div className="text-lg ml-32 mt-10 leading-5">
                The publicly accessible rooftop garden <br/>
                adds lush greenery to a rather petrified <br/>
                Zuidas. Here, tenants and visitors can <br/>
                enjoy lunch outdoors, surrounded by a <br/>
                variety of flora and fauna. Apart from <br/>
                boosting employees’ work pleasure and <br/>
                well-being, the rooftop garden ensures <br/>
                coolness when needed and store large <br/>
                amounts of water (after heavy rain fall). <br/>
                This combination of greenery and water <br/>
                storage, means that The CubeHouse <br/>
                will be a climate-adaptive office <br/>
                complex
                </div>
                <div className="w-80 bg-[#353535] text-white rounded-sm border-2 border-black border-solid px-10 ml-32 mt-10 py-3 flex justify-center">
                  Read more
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
    </section>
  );
};

export default Section4;