import React from 'react'

export default function Button({style}) {
  return (
    <button className={`font-poppins font-medium py-4 px-6 bg-blue-gradient text-[18px] text-primary outline-none ${style}`}>
    Get Started
    </button>
  )
}
