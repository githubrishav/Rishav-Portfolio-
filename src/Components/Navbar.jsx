import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaMailBulk } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import vslogo from './../assets/vslogo.png'






const Navbar = () => {


  const [showNav, setShowNav] = useState(false);
  
  
  return (
    <>
      <div className="xl:hidden lg:hidden">

        <div className="w-full bg-gradient-to-t from-white to-[#4185ac] flex h-[4rem] lg:hidden xl:hidden justify-between items-center p-4 ">
          
          <p className='w-[2.5rem]   '>
            <img src={vslogo} alt="" />
          </p>
          <button onClick={()=>{setShowNav(!showNav)}}  className='text-[#4185ac] h-[3rem] w-[3rem] flex justify-center items-center bg-white  rounded-full'><FaBars />
          </button>
         
        </div>
      


        {showNav &&   <div className="w-full h-full bg-black/50 top-0 left-0  lg:hidden fixed  ">

          <section className='text-black bg-white flex flex-col absolute top-0 right-0 h-screen w-[12rem] p-8 z-50 gap-8'>

            <IoMdClose onClick={()=>{setShowNav(!showNav)}} className=' cursor-pointer text-3xl' />

            <div className="flex gap-2 items-center ">
              <IoMdHome />
              <Link to={'/'}>Home</Link>
            </div>
            <div className="flex gap-2 items-center  ">
              <FaRegCircleUser />
              <Link to={'/about'}>About</Link>
            </div>
            <div className="flex gap-2 items-center  ">
              <IoDocumentTextOutline />
              <Link to={'/portfolio'}>Portfolio</Link>
            </div>
            <div className="flex gap-2 items-center  ">
              <FaMailBulk />
              <Link to={'/contact'}>Contact</Link></div>

          </section>
        </div>}
        
      </div>
    </>
  )
}

export default Navbar