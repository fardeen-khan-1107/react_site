import React,{useState} from 'react'
import img10 from "../assets/img10.jpg"

function Section5() {
  const [show,setshow]=useState(false)
  const [show1,setshow1]=useState(false)
  return (
    <section className='my-20'>
        <div className='text-4xl font-family-[Borna] my-20'>
        Available <br /> office spaces 
        </div>
        <div className='w-full py-4 h-full font-family-[Borna] bg-[#ededec] border-y-2 border-[#cfcfce] '>
          <button onClick={()=>setshow(!show)} className='w-full hover:px-4 duration-500'>
           <div className=' w-full flex justify-around'>
           <div className='flex gap-7'>
              <img src={img10} alt="img10" className='w-24' />
            <p className='text-4xl mt-5'>office</p>
            </div>
            <div className='pt-5'>
              <p className='text-xl'>Floor</p>
              <p className='text-xl text-[#bababa]'>1st floor</p>
            </div>
            <div className='pt-5'>
              <p className='text-xl'>LAF</p>
              <p className='text-xl text-[#bababa]'>approx. 1,472 sq.m.</p>
            </div>
            <div className='pt-5'>
              <p className='text-xl'>Status</p>
              <p className='text-xl text-[#bababa]'>Avaliable</p>
            </div>
            <div className='border-2 border-solid border-[#cececd] px-14 py-2 mt-7  h-12 w-48'>
            <p>More info</p>
            </div>
            </div>
          </button>
          <div className='Section5'>
            {show?
       <div className='w-full flex mt-12'>
          <div className='w-1/2'>
              <div className='ml-10 text-xl italic my-10 font-family-[Borna]'>
              The 1st floor
              </div>
              <div className='ml-10 weight-700 leading-5 text-xl'>
              The flexible divisible office space <br /> located on the first floor includes <br />
              approx. 1,472 square meters LFA. A <br /> combination of fixed workstations,<br />
               boardrooms and collaborative space caters <br /> to all working styles. On this <br />
                floor, you will find options for working <br /> alone as well as working together. And of <br />
                course there is plenty of space for <br /> relaxation in between meetings and <br />
                 meeting your next deadline – from <br />
                  informal sitting areas to a trendy coffee <br />
                  corner. 
              </div>
              <div className='ml-10 my-20 weight-700 leading-5 text-xl'>
              With a WELL-gold certified indoor <br />
               climate and unique features, offices <br /> located on the first floor truly prioritize <br />
                your employees’ needs. All workspaces <br /> are centered around offering beautiful <br />
                 views from every office and a great <br />
                  quality/ price ratio. The CubeHouse  <br />
                  offers tenants a sustainable, creative <br />
                   and productive environment that <br />
                    empowers them to reach their full  <br />potential and drive collaboration and <br /> innovation.
              </div>
              <div className='border-2 border-solid border-[#cfcfce] py-3 px-14 w-72 ml-10'>
                Download floorplan
              </div>
            </div>
          <div className='w-1/2'>
            <img src={img10} alt="img10" className='w-74 h-5/6' />
          </div>
          </div>:null
        }
          </div>
        </div>




        <div className='w-full py-4 h-full font-family-[Borna] bg-[#ededec] border-y-2 border-[#cfcfce] '>
          <button onClick={()=>setshow1(!show1)} className='w-full hover:px-4 duration-500'>
           <div className=' w-full flex justify-around'>
           <div className='flex gap-7'>
              <img src={img10} alt="img10" className='w-24' />
            <p className='text-4xl mt-5'>office</p>
            </div>
            <div className='pt-5'>
              <p className='text-xl'>Floor</p>
              <p className='text-xl text-[#bababa]'>1st floor</p>
            </div>
            <div className='pt-5'>
              <p className='text-xl'>LAF</p>
              <p className='text-xl text-[#bababa]'>approx. 1,472 sq.m.</p>
            </div>
            <div className='pt-5'>
              <p className='text-xl'>Status</p>
              <p className='text-xl text-[#bababa]'>Avaliable</p>
            </div>
            <div className='border-2 border-solid border-[#cececd] px-14 py-2 mt-7  h-12 w-48'>
            <p>More info</p>
            </div>
            </div>
          </button>
          <div className='Section5'>
            {show1?
       <div className='w-full flex mt-12'>
          <div className='w-1/2'>
              <div className='ml-10 text-xl italic my-10 font-family-[Borna]'>
              The 1st floor
              </div>
              <div className='ml-10 weight-700 leading-5 text-xl'>
              The flexible divisible office space <br /> located on the first floor includes <br />
              approx. 1,472 square meters LFA. A <br /> combination of fixed workstations,<br />
               boardrooms and collaborative space caters <br /> to all working styles. On this <br />
                floor, you will find options for working <br /> alone as well as working together. And of <br />
                course there is plenty of space for <br /> relaxation in between meetings and <br />
                 meeting your next deadline – from <br />
                  informal sitting areas to a trendy coffee <br />
                  corner. 
              </div>
              <div className='ml-10 my-20 weight-700 leading-5 text-xl'>
              With a WELL-gold certified indoor <br />
               climate and unique features, offices <br /> located on the first floor truly prioritize <br />
                your employees’ needs. All workspaces <br /> are centered around offering beautiful <br />
                 views from every office and a great <br />
                  quality/ price ratio. The CubeHouse  <br />
                  offers tenants a sustainable, creative <br />
                   and productive environment that <br />
                    empowers them to reach their full  <br />potential and drive collaboration and <br /> innovation.
              </div>
              <div className='border-2 border-solid border-[#cfcfce] py-3 px-14 w-72 ml-10'>
                Download floorplan
              </div>
            </div>
          <div className='w-1/2'>
            <img src={img10} alt="img10" className='w-74 h-5/6' />
          </div>
          </div>:null
        }
          </div>
        </div>
    </section>
  )
}

export default Section5