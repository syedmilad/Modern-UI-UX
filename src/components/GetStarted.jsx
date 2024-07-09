import React from 'react'
import { arrowUp } from '../assets'

export default function GetStarted() {
  return (
    <div className='flex justify-center items-center w-[134px] h-[134px] rounded-full bg-blue-gradient p-[2px] cursor-pointer'>

      <div className='flex flex-col items-center justify-center rounded-full text-white bg-primary w-full h-full'>
        
        <div className='font-poppins flex items-center justify-center gap-1 font-medium text-[18px] leading=[23px]'>
          <span className='text-gradient'>Get</span>
          <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain'/>
        </div>

        <div className='font-poppins gap-1 font-medium text-[18px] leading=[23px]'>
          <span className='text-gradient'>Started</span>
        </div>

      </div>  
    </div>
  )
}
