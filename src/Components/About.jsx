import React from 'react'
import ppf from "./../assets/ppf.jpg"
import profile from './../assets/profile.jpg'

const About = () => {
  return (


    <div className=" ">
      <div className="flex flex-col w-full xl:hidden lg:hidden  ">
        <div className=" w-full flex flex-col ">
          {/* Top */}
          <div className="">
            <p className='text-3xl flex mt-4 justify-center font-semibold text-[#4185ac] underline underline-offset-4 '>ABOUT</p>
            <p className='text-lg md:text-justify text-justify p-8 text-black'> Hi, I'm<strong className='text-[#4185ac]'>  Rishav Kumar </strong> — a passionate web developer, designer, video editor, and photographer. With a keen eye for aesthetics and a love for creating digital experiences I specialize in crafting responsive, user-friendly websites, designing visually compelling interfaces, and editing videos that tell powerful stories.
            </p>
          </div>
          {/* Bottom */}
          <div className=" flex justify-center items-center  ">
            <div className="flex flex-col justify-center p-8 gap-4">
              <p className='text-lg font-semibold text-[#4185ac] underline-offset-4 underline'>UI/UX Designer & Web Developer</p>
              <img src={profile} alt="img" className='w-[14rem] md:w-[16rem] md:h-[16rem] h-[14rem] border 1px bg-cover bg-center rounded-lg' />
            </div>
            <div className="mt-16 md:w-[16rem] md:h-[16rem]   md:mb-4 mr-4">
              <div className=" text-balance  md:flex md:flex-col md:gap-3 text-base">
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
          <div className="flex flex-col justify-center p-[2rem] gap-[1rem] ">
            <p className='text-lg font-bold text-[#4185ac] underline underline-offset-4 underline'>SKILLS</p>
            <div className="flex gap-2">
              <p className='font-bold'>Languages & Development:</p>
              <div className='' >
                <p>Java, Python,JavaScript, Express.JS, Node.JS React.JS, MongoDB, HTML, CSS</p>
              </div>
            </div>
            <div className="flex gap-5">
              <p className='font-bold' >Developer Tools:</p>
              <div className='' >
                <p>VsCode,GitHub,Figma, Android Studio, Eclipse, Canva</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block lg:block ">
        <div className=' lg:w-full xl:w-full xl:h-screen  lg:h-screen flex  '>
          {/* Top-About */}
          <div className="flex flex-col p-8 w-full h-screen ">
            <p className='text-4xl font-bold text-[#4185ac] underline underline-offset-4'>ABOUT</p>
            <p className='text-base text-black mt-8'> Hi, I'm<strong className='text-[#4185ac]'>  Rishav Kumar </strong> — a passionate web developer, designer, video editor, and photographer. With a keen eye for aesthetics and a love for creating digital experiences I specialize in crafting responsive, user-friendly websites, designing visually compelling interfaces, and editing videos that tell powerful stories.
            </p>
            {/* Image and Header */}
            <div className="flex justify-evenly gap-4 mt-12">
              <img src={profile} alt="img" className='w-[24rem] h-[24rem] border 1px bg-cover bg-center rounded-lg' />
              <div className="flex flex-col gap-4 p-4">
                <h4 className='font-bold text-xl  underline underline-offset-8 text-[#4185ac]'>
                  UI/UX Designer & Web Developer</h4>
                <p className='text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                {/* More Info */}
                <div className="flex text-black gap-36 mt-8">
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
              <p className='text-4xl font-bold text-[#4185ac]  underline underline-offset-4'>SKILLS</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About