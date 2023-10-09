import React from 'react'
import {Navbar, Footer} from '../components'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='w-full'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
