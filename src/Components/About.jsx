import React from 'react'
import ppf from "./../assets/ppf.jpg"
import profile from './../assets/profile.jpg'

const About = () => {
  return (
    <div className=' lg:w-full xl:w-full xl:h-screen hidden xl:block lg:block lg:h-screen flex  '>
      {/* Top-About */}
      <div className="flex flex-col p-8 w-full h-screen bg-black/50 ">
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
  )
}

export default About