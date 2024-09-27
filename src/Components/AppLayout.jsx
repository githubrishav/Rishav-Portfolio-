import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

const AppLayout = () => {

  return (
    <div className='w-full flex sm:hidden")]'>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AppLayout