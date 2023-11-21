'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGlobalcontext } from './hooks/Provider'
const AnimatedText = () => {
  const wrapperRef=useRef(null)
const {dark,setDark}=useGlobalcontext()
    useLayoutEffect(()=>{
      gsap.registerPlugin(ScrollTrigger)
      let ctx=gsap.context(()=>{
        let tl=gsap.timeline({
          scrollTrigger:{
            trigger:wrapperRef.current,
            scrub:1,
           onToggle:(self)=>{self.isActive||self.direction===1?setDark(true):setDark(false) }
          }
        })
        tl.to('.text-foward',{x:600,},0 )
        tl.to('.text-backward',{x:-600,},0 )

      },wrapperRef.current)

      return ()=> ctx.revert()
    },[])


  return (
    <div >
    <div className={`  ${dark?' text-white bg-black':'bg-white text-black '}  transition duration-[1s] ease-in-out overflow-hidden `}>
      <div ref={wrapperRef} className="wrapper w-full whitespace-nowrap leading-none py-24">
        <div className="text-foward font-sans text-[180px] italic" >PRODUCT PHOTOGRAPHY</div> 
        <div className="text-backward font-sans text-[180px] italic">IFEOLUWA ISAIAH</div>
        <div className="text-foward flex items-center gap-6"><span className='font-serif'>ALSO KNOW AS</span><div className=" font-sans text-[180px] italic">PRODUCT BOY</div></div>
        <div className="text-backward font-sans text-[180px] italic">PORTRAIT PHOTOGRAPHER</div>
        <div className="text-foward flex items-center gap-6"><span className='font-serif'>PHOTOGRAPHY HAS BEEN A PART OF MY LIFE </span><div className=" font-sans text-[180px] italic">SINCE 2019</div></div>
        <div className="text-backward flex items-center gap-6"><div className="font-sans text-[180px] italic">LAGOS, NIGERIA</div><span className='font-serif'>LOCATION</span></div>
        </div>
    </div>
    </div>
  )
}

export default AnimatedText