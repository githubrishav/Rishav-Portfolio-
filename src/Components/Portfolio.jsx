import React from 'react'

const Portfolio = () => {
  return (
    <div className='w-full h-screen flex flex-col  p-8'>
      <div className="cc">
        <p className='text-yellow-500 font-bold text-4xl'>PORTFOLIO</p>
      </div>
      <div className="flex justify-evenly items-center h-screen ">
        <div className="flex flex-col gap-10 1px solid">
          <div className="border 1px solid w-[10rem] h-[10rem]">d1</div>
          <div className="border 1px solid w-[10rem] h-[10rem]">d2</div>
          <div className="border 1px solid w-[10rem] h-[10rem]">d3</div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="border 1px solid w-[10rem] h-[10rem]">d1</div>
          <div className="border 1px solid w-[10rem] h-[10rem]">d2</div>
          <div className="border 1px solid w-[10rem] h-[10rem]">d3</div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="border 1px solid w-[10rem] h-[10rem]">d1</div>
          <div className="border 1px solid w-[10rem] h-[10rem]">d2</div>
          <div className="border 1px solid w-[10rem] h-[10rem]">d3</div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio