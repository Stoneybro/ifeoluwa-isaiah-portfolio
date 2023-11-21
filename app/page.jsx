'use client'
import react, { useEffect } from "react"
import {CldImage} from 'next-cloudinary'
import CustomImage from "./components/CustomImage"
import Preloader from "./components/Preloader"
import Hero from "./components/hero"
import Link from "next/link"
import About from "./components/About"
import Lenis from '@studio-freight/lenis'
import AnimatedText from "./components/AnimatedText"
import Lastsection from "./components/Lastsection"


export default function Home() {
  useEffect(()=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },[])


  return (
    
    <div className="">
      <Hero />
      <About />
    <AnimatedText />
    <Lastsection />
    </div>
  )
}
