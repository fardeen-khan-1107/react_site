import React,{useState} from 'react'
import img10 from "../assets/img10.jpg"
import img11 from "../assets/img11.jpg"
import img12 from "../assets/img12.jpg"

function Section5() {
  const [show,setshow]=useState(false)
  const [show1,setshow1]=useState(false)
  const [show2,setshow2]=useState(false)
  return (
    <section className='my-20'>
        <div className='ml-12 text-7xl font-family-[Borna] my-20'>
        Available <br /> office spaces 
        </div>
        <div className='w-full py-4 h-full font-family-[Borna] bg-[#ededec] border-y-2 border-[#cfcfce] '>
          <button onClick={()=>setshow(!show)} className='w-full hover:px-4 duration-500'>
           <div className=' w-full flex sm:block md:block justify-around'>
           <div className='flex gap-7'>
              <img src={img10} alt="img10" className='w-24' />
            <p className='text-4xl mt-5'>office</p>
            </div>
            <div className='pt-5 sm:w-20'>
              <p className='text-xl'>Floor</p>
              <p className='text-xl text-[#bababa]'>1st floor</p>
            </div>
            <div className='pt-5 sm:w-20'>
              <p className='text-xl'>LAF</p>
              <p className='text-xl text-[#bababa]'>approx. 1,472 sq.m.</p>
            </div>
            <div className='pt-5 sm:w-20'>
              <p className='text-xl'>Status</p>
              <p className='text-xl text-[#bababa]'>Avaliable</p>
            </div>
            <div className='border-2  sm:text-xl border-solid border-[#cececd] px-14 py-2 sm:px-32 sm:py-10 mt-5 sm:items-center sm:w-full h-12 w-48'>
            <p>More info</p>
            </div>
            </div>
          </button>
          <div className='Section5'>
            {show?
       <div className='w-full flex sm:block mt-12'>
          <div className='w-1/2'>
              <div className='ml-10 text-xl italic my-10 font-family-[Borna]'>
              The 1st floor
              </div>
              <div className='ml-10 w-[360px] sm:w-[360px] weight-700 leading-5 text-xl'>
              The flexible divisible office space 
              located on the first floor includes
              approx. 1,472 square meters LFA. A 
              combination of fixed workstations
               boardrooms and collaborative space caters
                to all working styles. On this
                floor, you will find options for working 
                alone as well as working together. And of
                course there is plenty of space for 
                relaxation in between meetings and
                 meeting your next deadline – from
                  informal sitting areas to a trendy coffee
                  corner. 
              </div>
              <div className='ml-10 my-20  w-[360px] sm:w-[360px] weight-700 leading-5 text-xl'>
              With a WELL-gold certified indoor 
               climate and unique features, offices  
               located on the first floor truly prioritize 
                your employees’ needs. All workspaces 
                 are centered around offering beautiful 
                 views from every office and a great 
                  quality/ price ratio. The CubeHouse  
                  offers tenants a sustainable, creative 
                   and productive environment that 
                    empowers them to reach their full  
                    potential and drive collaboration and 
                     innovation.
              </div>
              <div className=' text-sm border-2 border-solid border-[#cfcfce] py-3 px-20 w-72 ml-10'>
                Download floorplan
              </div>
            </div>
          <div className='w-1/2 sm:w-full sm:mt-5 '>
            <img src={img10} alt="img10" className='w-74 h-5/6  sm:h-[500px] sm:w-[500px]'/>
          </div>
          </div>:null
        }
          </div>
        </div>




        <div className='w-full py-4 h-full font-family-[Borna] bg-[#ededec] border-y-2 border-[#cfcfce] '>
          <button onClick={()=>setshow1(!show1)} className='w-full hover:px-4  duration-500'>
           <div className=' w-full flex sm:block md:block justify-around'>
           <div className='flex gap-7'>
              <img src={img11} alt="img11" className='w-24' />
            <p className='text-4xl mt-5'>office</p>
            </div>
            <div className='pt-5 sm:w-20'>
              <p className='text-xl'>Floor</p>
              <p className='text-xl text-[#bababa]'>3st floor</p>
            </div>
            <div className='pt-5 sm:w-20'>
              <p className='text-xl'>LAF</p>
              <p className='text-xl text-[#bababa]'>approx. 1,472 sq.m.</p>
            </div>
            <div className='pt-5 sm:w-20'>
              <p className='text-xl'>Status</p>
              <p className='text-xl text-[#bababa]'>Avaliable</p>
            </div>
            <div className='border-2  sm:text-xl border-solid border-[#cececd] px-14 py-2 sm:px-32 sm:py-10 mt-5 sm:items-center sm:w-full h-12 w-48'>
            <p>More info</p>
            </div>
            </div>
          </button>
          <div className='Section5'>
            {show1?
       <div className='w-full flex sm:block mt-12'>
          <div className='w-1/2'>
              <div className='ml-10 text-xl italic my-10 font-family-[Borna]'>
              The 2nd floor
              </div>
              <div className='ml-10 w-[360px] sm:w-[360px] weight-700 leading-5 text-xl'>
              The flexible divisible office space
               located on the second floor includes
               approx. 1,472 square meters LFA. A 
               combination of fixed workstations,
                boardrooms and collaborative spaces
                 caters to all working styles. On this
                  floor, you will find options for working
                   alone as well as working together. And 
                   of course there is plenty of space for
                    relaxation in between meetings and
                    meeting your next deadline – from
                    informal sitting areas to a trendy coffee
                     corner. 
              </div>
              <div className='ml-10 my-20 w-[360px] sm:w-[360px] weight-700 leading-5 text-xl'>
              With a WELL-gold certified indoor
               climate and unique features, offices
                located on the second floor truly 
                prioritize your employees’ needs. All
                 workspaces are centered around
                  offering beautiful views from every
                   office and a great quality/ price ratio.
                    The CubeHouse offers tenants a
                     sustainable, creative and productive
                      environment that empowers them to
                       reach their full potential and drive
                       collaboration and innovation. 
              </div>
              <div className='text-sm border-2 border-solid border-[#cfcfce] py-3 px-20 w-72 ml-10'>
                Download floorplan
              </div>
            </div>
          <div className='w-1/2 sm:w-full sm:mt-5'>
            <img src={img11} alt="img11" className='w-74 h-5/6  sm:h-[500px] sm:w-[500px]' />
          </div>
          </div>:null
        }
          </div>
        </div>



        <div className='w-full py-4 h-full font-family-[Borna] bg-[#ededec] border-y-2 border-[#cfcfce] '>
          <button onClick={()=>setshow2(!show2)} className='w-full hover:px-4  duration-500'>
           <div className=' w-full flex sm:block md:block justify-around'>
           <div className='flex gap-7'>
              <img src={img12} alt="img11" className='w-24' />
            <p className='text-4xl mt-5'>office</p>
            </div>
            <div className='pt-5 sm:sw-20'>
              <p className='text-xl'>Floor</p>
              <p className='text-xl text-[#bababa]'>3st floor</p>
            </div>
            <div className='pt-5 sm:sw-20'>
              <p className='text-xl'>LAF</p>
              <p className='text-xl text-[#bababa]'>approx. 1,472 sq.m.</p>
            </div>
            <div className='pt-5 sm:sw-20'>
              <p className='text-xl'>Status</p>
              <p className='text-xl text-[#bababa]'>Avaliable</p>
            </div>
            <div className='border-2  sm:text-xl border-solid border-[#cececd] px-14 py-2 sm:px-32 sm:py-10 mt-5 sm:items-center sm:w-full h-12 w-48'>
            <p>More info</p>
            </div>
            </div>
          </button>
          <div className='Section5'>
            {show2?
       <div className='w-full flex sm:block mt-12'>
          <div className='w-1/2'>
              <div className='ml-10 text-xl italic my-10 font-family-[Borna]'>
              The 3nd floor
              </div>
              <div className='ml-10 w-[360px] sm:w-[360px] weight-700 leading-5 text-xl'>
              The flexible divisible office space  
              located on the second floor includes 
               approx. 1,472 square meters LFA. A  
               combination of fixed workstations, 
                boardrooms and collaborative spaces 
                 caters to all working styles. On this 
                  floor, you will find options for working 
                   alone as well as working together. And  
                   of course there is plenty of space for 
                    relaxation in between meetings and 
                    meeting your next deadline – from 
                    informal sitting areas to a trendy coffee 
                     corner.               </div>
              <div className='ml-10 my-20 w-[360px] sm:w-[360px] weight-700 leading-5 text-xl'>
              With a WELL-gold certified indoor 
               climate and unique features, offices 
                located on the second floor truly prioritize 
                 your employees’ needs. All workspaces 
                 are centered around offering beautiful 
                 views from every office and a great  
                 quality/ price ratio. The CubeHouse 
                 offers tenants a sustainable, creative 
                 and productive environment that
                 empowers them to reach their full
                 potential and 
                 drive collaboration and innovation. 
              </div>
              <div className='text-sm border-2 border-solid border-[#cfcfce] py-3 px-20 w-72 ml-10'>
                Download floorplan
              </div>
            </div>
          <div className='w-1/2 sm:w-full sm:mt-5'>
            <img src={img12} alt="img12" className='w-74 h-5/6 sm:h-[500px] sm:w-[500px]' />
          </div>
          </div>:null
        }
          </div>
        </div>
    </section>
  )
}
export default Section5