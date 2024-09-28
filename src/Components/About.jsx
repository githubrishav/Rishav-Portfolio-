import React from 'react'
import ppf from "./../assets/ppf.jpg"
import profile from './../assets/profile.jpg'

const About = () => {
  return (


    <div className=" ">
      <div className="flex flex-col h-screen w-full xl:hidden lg:hidden">
        <div className="h-screen w-full flex flex-col ">
          {/* Top */}
          <div className="">
            <p className='text-3xl flex mt-4 justify-center font-semibold '>ABOUT</p>
            <p className='text-lg md:text-justify text-justify p-8 text-black'> Hi, I'm<strong className='text-yellow-500'>  Rishav Kumar </strong> — a passionate web developer, designer, video editor, and photographer. With a keen eye for aesthetics and a love for creating digital experiences I specialize in crafting responsive, user-friendly websites, designing visually compelling interfaces, and editing videos that tell powerful stories.
            </p>
          </div>
          {/* Bottom */}
          <div className=" flex justify-center items-center  ">
            <div className="flex flex-col justify-center p-8 gap-4">
              <p className='text-lg font-semibold'>UI/UX Designer & Web Developer</p>
              <img src={profile} alt="img" className='w-[14rem] h-[14rem] border 1px bg-cover bg-center rounded-lg' />
            </div>
            <div className="mt-16 mr-4">
              <div className=" text-balance text-base">
                <p>Birthday : 28 Feb 2001</p>
                <p>Website: N/A</p>
                <p>Phone: +91-7011812707</p>
                <p>City : Noida, Uttarpradesh, India</p>
                <p>Age: 23</p>
                <p>Degree: Bachelors</p>
                <p>E-mail: iamrishavkr@gmail.com</p>
              </div>

            </div>
          </div>
          <div className="flex flex-col justify-center p-8 gap-4">
            <div className="">
              <p className='text-lg font-semibold'>SKILLS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block lg:block lg:bg-black/60  xl:bg-black/60 xl:backdrop-blur-sm lg:backdrop-blur-sm  ">
        <div className=' lg:w-full xl:w-full xl:h-screen  lg:h-screen flex  '>
          {/* Top-About */}
          <div className="flex flex-col p-8 w-full h-screen ">
            <p className='text-4xl font-bold text-yellow-400'>ABOUT</p>
            <p className='text-base text-white'> Hi, I'm<strong className='text-yellow-400'>  Rishav Kumar </strong> — a passionate web developer, designer, video editor, and photographer. With a keen eye for aesthetics and a love for creating digital experiences I specialize in crafting responsive, user-friendly websites, designing visually compelling interfaces, and editing videos that tell powerful stories.
            </p>
            {/* Image and Header */}
            <div className="flex justify-evenly gap-4 mt-12">
              <img src={profile} alt="img" className='w-[24rem] h-[24rem] border 1px bg-cover bg-center rounded-lg' />
              <div className="flex flex-col gap-4 p-4">
                <h4 className='font-bold text-xl text-white'>
                  UI/UX Designer & Web Developer</h4>
                <p className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                {/* More Info */}
                <div className="flex text-white gap-36 mt-8">
                  <div className="flex flex-col gap-4 font-medium">
                    <p>Birthday : 28 Feb 2001</p>
                    <p>Website: N/A</p>
                    <p>Phone: +91-7011812707</p>
                    <p>City : Noida, Uttarpradesh, India</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p>Age: 23</p>
                    <p>Degree: Bachelors</p>
                    <p>E-mail: iamrishavkr@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <p className='text-4xl font-bold text-yellow-400'>SKILLS</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About