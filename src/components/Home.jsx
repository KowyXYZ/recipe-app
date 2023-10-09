import React from 'react'

import cheesecake from '../assets/cheesecake.jpg'
import SliceHome from './SliceHome'


function Home() {
  return (
    <div className='w-full py-10'>
      <div className='container mx-auto flex md:flex-row flex-col justify-center items-center bg-[#E3F1FF]'>
        <img className='w-full md:w-1/2' src={cheesecake} alt="cheesecakeimg" />
        <div className='w-1/2 flex flex-col items-center text-center justify-center gap-2 p-4'>
          <p className='text-[24px] font-light'>85% would make this again</p>
          <p className='text-[44px] font-black'>Mighty Super Cheesecake</p>
          <p className='w-[300px] text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem qui perspiciatis eaque quasi modi.</p>
        </div>
      </div>

      <SliceHome/>
    </div>
  )
}

export default Home
