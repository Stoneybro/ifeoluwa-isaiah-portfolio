import React from 'react'
import Link from 'next/link'
import Time from './Time'
const heroFooter = () => {

  

  return (
    <div className="w-full sticky top-0 z-10 ">
    <div className="max-w-[95vw] z-20  mx-auto py-2 text-black font-serif font-bold   flex justify-between items-end">
     
      <div className="flex gap-16 items-end">

    <div className="flex flex-col gap-1">
    <div className="">TWITTER </div>
    <div className="">LINKEDIN</div>
    <div className="">INSTAGRAM</div>
     </div>

     <div className="flex flex-col gap-1">
        <div className="">+234 902 172 2234</div>
        <div className="">Hello@ifeoluwaisaiah.com</div>
    </div>   

      </div>




      <div className="flex gap-8 items-end">
        
   <Time />
      </div>
    </div>
    </div>
  )
}

export default heroFooter