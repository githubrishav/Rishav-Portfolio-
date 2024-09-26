import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { HiUpload } from "react-icons/hi";


const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

const delay = (d)=>{
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, d * 1000);
  })
}

  const OnSubmit = async (data) => {
    await delay(3)
    console.log(data)
  }

  return (
   

    <div className=' h-screen w-full flex flex-col '>
      
      <div className="text-4xl font-bold text-white   ">
        <p className='text-yellow-400 p-8 '>CONTACT</p>
      </div>
      {/* Left side info */}
      <div className="flex w-full justify-evenly border-1px solid">
        <div className=" flex flex-col gap-10 justify-center font-bold p-8 text-white ">
          <div className="flex items-center  gap-10">
            <div className=" ">
              <FaLocationDot />
            </div>
            <div className="c">
              <p>ADDRESS</p>
              <p>Enter ADD</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="">
              <IoIosCall />

            </div>
            <div className="c">
              <p>CALL</p>
              <p>+91-1234567890</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="">
              <FaMailBulk />
            </div>
            <div className="c">
              <p>E-MAIL</p>
              <p>Email: iamrishavkr@gmail.com</p>
            </div>
          </div>
          {/* <div className="flex gap-4">
            <div className="border 1px">
              <img src="" alt="pic" />
            </div>
            <div className="c">
              <p>ADDRESS</p>
              <p>Email: iamrishavkr@gmail.com</p>
            </div>
          </div> */}
        </div>
        {/* form here */}
        
        <form action="" onSubmit={handleSubmit(OnSubmit)} >
          
          <div className="flex justify-between mb-2">
            <div className="">
              <p className='mb-4 text-white'>Your name</p>
              <input type="text" required {...register('name', { minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 12, message: "Max length is 12" } })} autoComplete='off' placeholder='Enter your Name' className='px-4 py-1 rounded-md' />
              {errors.name && <div className='font-semibold text-red-700 ml-1'>{errors.name.message}</div>}

            </div>
            <div className="">
              <p className='mb-4  text-white'>Your email</p>
              <input type="email" required {...register('email', { minLength: { value: 3, message: "Max length is 3" }, maxLength: { value: 25, message: "Max length is 25" } })} autoComplete='off' placeholder='Enter your email' className='px-4 py-1 rounded-md' />
              {errors.email && <div className='font-semibold text-red-700 ml-1'>{errors.email.message}</div>}
            </div>
          </div>
          <div className="">
            <p className='mb-4  text-white'>Subject</p>
            <input type="text" autoComplete='off' required {...register('subject', { minLength: { value: 3, message: "Min Length is 3" }, })} placeholder='Enter subject' className='w-full px-4 py-1 text-black rounded-md' />
            {errors.subject && <div className='font-semibold text-red-700 ml-1'>{errors.subject.message}</div>}

          </div>
          <div className="mt-4 flex flex-col ">
            <p className='mb-4  text-white'>Message</p>
            <textarea {...register('yourmsg', { minLength: 3, })} autoComplete='off' cols="80" rows="10" required placeholder='Enter your message here' className='text-black px-4 py-2 rounded-md' />
            {errors.yourmsg && <div className='font-semibold text-red-700 ml-1'>{errors.yourmsg.message}</div>}

            <div className='text-white mt-8 w-full flex items-center justify-center'>
            {isSubmitting && <div className='flex gap-4 items-center'> Submitting <HiUpload />
              </div>}
              <button type="submit" disabled={isSubmitting} className=' hover:bg-slate-500 bg-yellow-400 px-10 py-2 rounded-full'> Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact