'use client'
import React, { useLayoutEffect } from 'react'
import Image from 'next/image'
import img1 from '../../public/pics/img1.jpg'
import img2 from '../../public/pics/img2.jpg'
import img3 from '../../public/pics/img3.jpg'
import img4 from '../../public/pics/img4.jpg'
import img5 from '../../public/pics/img5.jpg'
import img6 from '../../public/pics/img6.jpg'
import img7 from '../../public/pics/img7.jpg'


const Preloader = () => {
    useLayoutEffect(()=>{

    },[])

  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center fixed top-0'>
        

    </div>
  )
}

export default Preloader