import React from 'react'
import { quotes } from '../assets'

export default function FeedbackCard({title, content, img,name}) {
  return (
    <div className='flex justify-between flex-col px-10 py-8 rounded-[20px] max-w-[370px] md:mr-10 sm:mt-5 mr-5 my-5 feedback-card '>

    <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain ' />
    <p className='font-poppins font-normal text-[18px] leading-[30px] my-10 '>{content}</p>

    <div className='flex flex-row justify-center items-center'>
      <img src={img} alt="img" className='w[48px] h-27px rounded-full ' />
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white '>{name}</h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '>{title}</p>
      </div>
    </div>

    </div>
  )
}
