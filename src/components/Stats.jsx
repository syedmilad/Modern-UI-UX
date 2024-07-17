import React from 'react'
import { stats } from '../constant'

export default function Stats() {
  return (
    <section className='flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6'>
        {stats.map((stat)=>(
          <div className='flex flex-1 flex-row m-3 justify-start items-center'>
            <h4 className='font-poppins font-semibold xs:text-[30px] text-[30px] xl:leading-[53px] leading-[43px] text-white '>{stat.value}</h4>
            <p className='font-poppins font-normal xs:text-[20px] text-[15px] xl:leading-[26px] leading-[21px] ml-3 text-gradient uppercase'>{stat.title}</p>
          </div>
        ))}
    </section>
  )
}
