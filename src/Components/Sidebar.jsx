import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import pfp from "./../assets/pfp.png"
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaMailBulk } from "react-icons/fa";
import profile from './../assets/profile.jpg'

import Home from './Home';
import About from './About';



const Sidebar = () => {

  const [open, setOpen] = useState(true);




  return (
    <>
      
      <div className=" lg:flex xl:flex lg:flex-col xl:flex-col lg:h-screen xl:h-screen lg:w-[22rem] xl:w-[22rem]  items-center hidden  md:bg-zinc-400">
        <div className=" flex flex-col gap-2  w-full p-3 ">
          {/* image part here */}
          <div className=" flex justify-center p-4">
            <div className="w-40 h-40 rounded-full items-center flex justify-center transition-all duration-300 ease-in-out hover:brightness-90  hover:bg-yellow-300">
              <img src={profile} alt="img" className='w-36 h-36 rounded-full bg-center bg-cover ' />
            </div>
          </div>
          {/* name part here */}
          <div className="text-center text-xl font-semibold font-mono text-yellow-400">
            <p>Rishav </p>
          </div>
          {/* social media part here */}
          <div className="flex justify-center items-center p-2 gap-3 ">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-400 transition-all duration-300 ease-in-out">
              <FaFacebook />
            </div>
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full  hover:bg-yellow-400 transition-all duration-300 ease-in-out">
              <FaLinkedin />
            </div>
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full  hover:bg-yellow-400 transition-all duration-300 ease-in-out">
              <FaInstagram />
            </div>
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full  hover:bg-yellow-400 transition-all duration-300 ease-in-out">
              <FaXTwitter />
            </div>
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full  hover:bg-yellow-400 transition-all duration-300 ease-in-out ">
              <FaYoutube />
            </div>
          </div>
        </div>
        {/* Routes here */}
        <div className="flex flex-col mt-8 w-full justify-center items-center gap-6">
          <div className="flex gap-3 items-center mr-3 p-1 transition-all duration-300 ease-in-out hover:brightness-90 text-white hover:text-yellow-400 ">
            <IoMdHome /><Link to={'/'}
            >Home</Link>
          </div>
          <div className="flex gap-3 items-center p-1 mr-3 transition-all duration-300 ease-in-out hover:brightness-90  text-white hover:text-yellow-400 ">
            <FaRegCircleUser />
            <Link to={'/about'}>About</Link>
          </div>
          <div className="flex gap-3 items-center p-1 ml-1 transition-all duration-300 ease-in-out hover:brightness-90  text-white hover:text-yellow-400">
            <IoDocumentTextOutline />
            <Link to={'/portfolio'}>Portfolio</Link>
          </div>
          <div className="flex gap-3 items-center p-1 transition-all duration-300 ease-in-out hover:brightness-90 text-white hover:text-yellow-400">
            <FaMailBulk />
            <Link to={'/contact'}>Contact</Link></div>
        </div>

      </div>



    </>
  )
}

export default Sidebar