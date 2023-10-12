import React from 'react'
import logo from '../assets/logo.png'


function Footer() {
  return (
    <div className='w-full bg-[#F9F9F9] py-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex flex-col gap-4'>
          <img className='w-64 object-contain' src={logo} alt="logo" />
          <p className='text-[14px] text-[gray] w-[300px]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque accusamus aut sit eius quasi."</p>
        </div>

        <div className='flex gap-24'>
          <div className='text-[gray] space-y-2'>
            <p className='font-black text-[#000]'>Tastebite</p>
            <p>About us</p>
            <p>Career</p>
            <p>Contact Us</p>
            <p>Feedbacks</p>
          </div>

          <div className='text-[gray] space-y-2'>
            <p className='font-black text-[#000]'>Tastebite</p>
            <p>About us</p>
            <p>Career</p>
            <p>Contact Us</p>
            <p>Feedbacks</p>
          </div>

          <div className='text-[gray] space-y-2'>
            <p className='font-black text-[#000]'>Tastebite</p>
            <p>About us</p>
            <p>Career</p>
            <p>Contact Us</p>
            <p>Feedbacks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
