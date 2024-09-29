import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaMailBulk } from "react-icons/fa";
import profile from './../assets/profile.jpg'
import { FaGithub } from "react-icons/fa";


import Home from './Home';
import About from './About';



const Sidebar = () => {

  const [open, setOpen] = useState(true);




  return (
    <>
      
      <div className=" lg:flex  bg-gradient-to-l from-white to-[#4185ac]  brightness-125 xl:flex lg:flex-col xl:flex-col lg:h-screen xl:h-screen lg:w-[22rem] xl:w-[22rem]  items-center hidden shadow-inner ">
        <div className=" flex flex-col gap-2  w-full p-3 ">
          {/* image part here */}
          <div className=" flex justify-center p-4">
            <div className="w-40 h-40 rounded-full items-center flex justify-center transition-all duration-300 ease-in-out hover:brightness-90  hover:bg-[#4185ac]">
              <img src={profile} alt="img" className='w-36 h-36 rounded-full bg-center bg-cover ' />
            </div>
          </div>
          {/* name part here */}
          <div className="text-center text-xl font-semibold font-mono ">
            <p>Rishav </p>
          </div>
          {/* social media part here */}
          <div className="flex justify-center items-center p-2 gap-3 ">
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#4185ac] transition-all duration-300 ease-in-out">
              <a href="https://github.com/githubrishav"><FaGithub />
              </a>
            </div>
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full  hover:bg-[#4185ac] transition-all duration-300 ease-in-out">
             <a href="https://www.linkedin.com/in/rishav-kumar-3a656a293/"><FaLinkedin /></a> 
            </div>
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full  hover:bg-[#4185ac] transition-all duration-300 ease-in-out">
              <div className="c">
                <a href="https://www.instagram.com/binlooping?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
               
              </div>
              
            </div>
            <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full  hover:bg-[#4185ac] transition-all duration-300 ease-in-out">
             <a href="https://x.com/wrapyourcode?t=-SywXdQlt433KPwSMUy-rQ&s=09"></a> <FaXTwitter />
            </div>
           
          </div>
        </div>
        {/* Routes here */}
        <div className="flex flex-col mt-8 w-full justify-center items-center gap-6">
          <div className="flex gap-3 items-center mr-3 p-1 transition-all duration-300 ease-in-out hover:text-white">
            <IoMdHome /><Link to={'/'}
            >Home</Link>
          </div>
          <div className="flex gap-3 items-center p-1 mr-3 transition-all duration-300 ease-in-out hover:text-white">
            <FaRegCircleUser />
            <Link to={'/about'}>About</Link>
          </div>
          <div className="flex gap-3 items-center p-1 ml-1 transition-all duration-300 ease-in-out  hover:text-white">
            <IoDocumentTextOutline />
            <Link to={'/portfolio'}>Portfolio</Link>
          </div>
          <div className="flex gap-3 items-center p-1 transition-all duration-300 ease-in-out hover:text-white">
            <FaMailBulk />
            <Link to={'/contact'}>Contact</Link></div>
        </div>

      </div>



    </>
  )
}

export default Sidebar