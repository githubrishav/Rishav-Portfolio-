import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { HiUpload } from "react-icons/hi";
import axios from 'axios';


const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

    const OnSubmit = async (data) => {
      await delay(3);
      console.log(data);

      try {
        const response = await axios.post('http://localhost:3000/contact', data);
        console.log(response.data);
        alert('Your message has been sent');
      } catch (error) {
        console.error('There was an error submitting the message ', error);
        alert('There was an error while submitting the message');
      }
    };

  

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-8 px-4">
      <div className="text-4xl font-bold text-white">
        <p className='text-[#4185ac] p-8'>CONTACT</p>
      </div>

     
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-3/4 bg-gray-100 rounded-lg shadow-lg p-8">

        
        <div className="flex flex-col gap-10 justify-center text-black w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex items-center gap-4">
            <FaLocationDot size={30} />
            <div>
              <p className="font-bold">ADDRESS</p>
              <p>Greater Noida West</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <IoIosCall size={30} />
            <div>
              <p className="font-bold">CALL</p>
              <p>+91-7011812707</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMailBulk size={30} />
            <div>
              <p className="font-bold">E-MAIL</p>
              <p>Email: iamrishavkr@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(OnSubmit)} className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col gap-6 mb-4">
            <div>
              <label className="mb-2 text-black">Your name</label>
              <input type="text" required {...register('name', { minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 12, message: "Max length is 12" } })} placeholder='Enter your Name' className='w-full px-4 py-2 rounded-md text-black' />
              {errors.name && <div className='font-semibold text-red-700'>{errors.name.message}</div>}
            </div>
            <div>
              <label className="mb-2 text-black">Your email</label>
              <input type="email" required {...register('email', { minLength: { value: 3, message: "Max length is 3" }, maxLength: { value: 25, message: "Max length is 25" } })} autoComplete='off' placeholder='Enter your email' className='w-full px-4 py-2 rounded-md text-black' />
              {errors.email && <div className='font-semibold text-red-700'>{errors.email.message}</div>}
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 text-black">Subject</label>
            <input type="text" autoComplete='off' required {...register('subject', { minLength: { value: 3, message: "Min Length is 3" }, })} placeholder='Enter subject' className='w-full px-4 py-2 rounded-md text-black' />
            {errors.subject && <div className='font-semibold text-red-700'>{errors.subject.message}</div>}
          </div>

          <div className="mb-4">
            <label className="mb-2 text-black">Message</label>
            <textarea {...register('yourmsg', { minLength: 3, })} autoComplete='off' cols="30" rows="6" required placeholder='Enter your message here' className='w-full px-4 py-2 rounded-md text-black' />
            {errors.yourmsg && <div className='font-semibold text-red-700'>{errors.yourmsg.message}</div>}
          </div>

          <div className="text-white mt-4 w-full flex items-center justify-center">
            {isSubmitting && <div className='flex gap-4 items-center text-black'> Submitting <HiUpload size={20} /></div>}
            <button type="submit" disabled={isSubmitting} className='bg-[#4185ac]  px-10 py-2 rounded-full'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
