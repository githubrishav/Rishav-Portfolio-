import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
   <div className='w-full flex bg-cover bg-center filter opacity-90 bg-[url("https://r4.wallpaperflare.com/wallpaper/709/31/637/firewatch-dark-night-minimalism-videogame-hd-wallpaper-279f22b45fd53f7a4ff2141121b1d735.jpg")]'>
        <Sidebar/>
        <Outlet/>
   </div>
  )
}

export default AppLayout