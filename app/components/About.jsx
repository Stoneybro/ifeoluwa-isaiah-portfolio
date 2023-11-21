import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGlobalcontext } from './hooks/Provider'
import Image from 'next/image'
import Spic1 from '../../public/Spic1.png'
import Spic2 from '../../public/Spic2.png'
import Spic3 from '../../public/Spic3.png'
import Spic4 from '../../public/Spic4.png'
import Spic5 from '../../public/Spic5.png'
import Spic6 from '../../public/Spic6.png'



const About = () => {
  const {dark,setDark}=useGlobalcontext()
  const wrapper=useRef(null)
    useLayoutEffect(()=>{
      gsap.registerPlugin(ScrollTrigger)
      const ctx=gsap.context(()=>{
        const tl=gsap.timeline({
          scrollTrigger:{
            trigger:wrapper.current,
            pin:true,
            scrub:true,
            start:'top top',
            end:'1500px',
           
          }
        })
        tl.to(
          '.one',{
            yPercent:-1000
          },0
        )
        tl.to(
          '.two',{
            yPercent:-1000
          },0
        )
        tl.to(
          '.three',{
            yPercent:-1000
          },0
        )
        tl.to(
          '.four',{
            yPercent:-1000
          },0
        )
        tl.to(
          '.five',{
            yPercent:-1000
          },0
        )
        tl.to(
          '.six',{
            yPercent:-1000
          },0
        )
      },wrapper.current)
      return ()=>ctx.revert()
    },[])

  return (
    <div className={`  ${dark?' text-white bg-black':'bg-white text-black '}  transition duration-[1s] ease-in-out overflow-hidden `}>
    <div className='h-screen  flex flex-col justify-end items-center relative overflow-hidden' ref={wrapper}>
        <div className=" text-[56px] font-medium">
            <div className="white text-center font-serif ">Worked with a list of popular brands like</div>
            <div className="flex flex-wrap justify-center gap-x-4">
            <span className="italic ">Nutzy</span>
            <span className="font-serif"> Trophylager</span>
            <span className="italic">Pringles</span>
            <span className="font-serif">Beloxxi</span>
            <span className="italic">Lipton</span>
            <span className="font-serif">Nivea</span>
            <span className="italic">Extract</span>
            <span className="font-serif">Snickers</span>
            <span className="italic">Clorets</span>
            <span className="font-serif"> Mcvites</span>
            </div>
          
        </div>
        <Image src={Spic1} width={200} height={200} alt='pictures of brands i have worked with' className='pic absolute bottom-[-130%]  left-[15%] one' />
        <Image src={Spic2} width={200} height={200} alt='pictures of brands i have worked with' className='pic absolute  bottom-[-130%]  left-[25%] two' />
        <Image src={Spic3} width={200} height={200} alt='pictures of brands i have worked with' className='pic absolute  bottom-[-130%]  left-[40%] three' />
        <Image src={Spic4} width={200} height={200} alt='pictures of brands i have worked with' className='pic absolute  bottom-[-130%]  left-[50%] four' />
        <Image src={Spic5} width={200} height={200} alt='pictures of brands i have worked with' className='pic absolute  bottom-[-130%]  left-[70%] five' />
        <Image src={Spic6} width={200} height={200} alt='pictures of brands i have worked with' className='pic absolute  bottom-[-130%]  left-[90%] six' />


    </div>
    </div>
  )
}

export default About