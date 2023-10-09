import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


function Navbar() {

  return (
    <nav className='w-full py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
            <img className='w-32  object-contain' src={logo} alt="logo" />
        </Link>
        
        <div className='gap-10 flex justify-center items-center'>
            <Link className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>Home</Link>
            <Link to='/recipes' className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>Recipes</Link>
            <Link className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>About</Link>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
