import React from 'react'
import Banner from '../assets/banner.jpg'

function Home() {

  

  return (
    <div>

        
        <div className='py-4'>
           
            
            <div className='relative flex flex-col lg:flex-row gap-8 p-8 bg-black bg-gradient-to-tl py-8 rounded-2xl from-black via-black to-orange-400'>

            <div> <div className='w-1 rounded-full h-[450px] bg-orange-600 absolute hidden lg:block left-12'></div>
            <div className='absolute left-11 bottom-4 lg:block hidden rounded-full h-3 w-3 bg-orange-600'></div></div>
                <div className='flex-1 overflow-hidden'>
                    <img src={Banner} alt="bunny"  className='md:w-[500px] rounded-2xl place-content-center mx-auto' shrink-0/>
                </div>


                <div className='text-orange-400 flex-1 flex flex-col py-4 gap-8 font-oswald ' >


                    <div>
                        <h1 className=' lg:text-9xl text-6xl lg:pt-14 leading-3'>Perfection<span className='text-sm'>At Its Peak</span></h1>
                    </div>


                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, inventore laborum reprehenderit ullam quam a quae odit reiciendis vitae temporibus deleniti perferendis dignissimos quisquam nesciunt esse labore, repellendus ut sequi.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
