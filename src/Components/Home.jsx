import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




const Home = () => {

  return (

    <div className='w-full h-screen '>
      <div className="  h-screen flex-col xl:flex lg:flex lg:justify-center xl:justify-center xl:items-center lg:items-center items-center flex justify-center  ">
        <p className='lg:text-black bg xl:text-black    text-3xl lg:text-6xl xl:text-7xl font-semibold lg:font-semibold  xl:font-semibold '>Welcome to My <span className='text-[#4185ac]'>Portfolio!</span> </p>
        <p className='lg:text-black xl:mt-[2rem] lg:mt[2rem] mt-[1rem] xl:text-black  text-2xl lg:text-4xl xl:text-4xl font-semibold lg:font-semibold  xl:font-semibold text-center '>Web Developer | <span className=' text-[#4185ac]'>Designer </span> | Creator</p>
        <div className="lg:text-black xl:mt-[2rem] lg:mt-[2rem] mt-[1rem] xl:text-black  w-full  text-xl lg:text-2xl xl:text-2xl font-semibold lg:font-semibold  xl:font-semibold">
          <p className='text-center p-8  text-[#4185ac]'>Connect with Me</p>

          <div className="flex justify-center xl:gap-[8rem] lg:gap-[8rem] gap-[4rem]  w-full">

            <div className=" w-10 h-10 flex items-center justify-center rounded-md   hover:bg-[#4185ac] transition-all duration-300 ease-in-out">
              <a href="https://github.com/githubrishav"><FaGithub /></a>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-md  hover:bg-[#4185ac] transition-all duration-300 ease-in-out ">
              <a href="https://www.linkedin.com/in/rishav-kumar-3a656a293/"><FaLinkedin /></a>
            </div>
            <div className=" w-10 h-10 flex items-center justify-center rounded-md   hover:bg-[#4185ac] transition-all duration-300 ease-in-out">
              <a href="https://www.instagram.com/binlooping?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
            </div>
            <div className=" w-10 h-10 flex items-center justify-center rounded-md   hover:bg-[#4185ac] transition-all duration-300 ease-in-out">
              <a href="https://x.com/wrapyourcode?t=-SywXdQlt433KPwSMUy-rQ&s=09">  <FaXTwitter /></a>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home