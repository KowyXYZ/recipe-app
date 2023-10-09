import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


function Navbar() {
  return (
    <nav className='w-full py-6'>
      <div className='container mx-auto flex justify-between items-center text-[14px]'>
        <div>
            <img className='w-32  object-contain' src={logo} alt="" />
        </div>'
        
        <div className='gap-10 flex justify-center items-center'>
            <Link>Home</Link>
            <Link>Recipes</Link>
            <Link>About</Link>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
