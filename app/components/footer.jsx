import React from 'react'

const footer = () => {
  return (
    <div className=" text-white bg-black  w-full font-serif py-2">
    <div className="flex max-w-[1190px] mx-auto justify-between items-center">
      <div className="">Hello@ifeoluwaisaiah.com</div>
      <div className="">MADE BY NEXTSTUDIO</div>
      <div className="flex items-center gap-2">
      <svg width="13" height="13" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.20712 2.63175V11H4.79288V2.63175L0.999871 6.3195L0 5.34737L5.5 0L11 5.34737L10.0001 6.3195L6.20712 2.63175Z" fill="white"/>
      </svg>

        <span>BACK TO TOP</span>
        </div>
    </div>
    </div>
  )
}

export default footer