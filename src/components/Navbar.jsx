import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full py-6'>
      <div className='container mx-auto flex justify-around sm:justify-between items-center'>
        <Link to='/'>
            <img className='sm:w-32 w-24 object-contain' src={logo} alt="logo" />
        </Link>
        
        <div className='gap-10 hidden sm:flex justify-center items-center'>
            <Link className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>Home</Link>
            <Link to='/recipes' className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>Recipes</Link>
            <Link className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>About</Link>
        </div>
        

        <div className='sm:hidden z-10 xl:hidden md:hidden flex justify-center items-center'>
          <img className='invert w-6 h-6' onClick={() => setToggle(!toggle)}  src={toggle ? close : menu} alt="hamburger menu" />
      
          <div className={`${toggle ? 'flex' : 'hidden'}  absolute top-[70px] flex-flex-col text-center bg-[#fff] right-0 rounded-2xl gap-4 p-4 flex-col border-2 border-[pink]`}>
          <Link className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>Home</Link>
            <Link to='/recipes' className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>Recipes</Link>
            <Link className='hover:border-b-[#000] border-2 border-white transition-all delay-75 ease-in-out'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
