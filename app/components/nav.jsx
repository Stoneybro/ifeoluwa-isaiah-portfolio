'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useGlobalcontext } from './hooks/Provider'
const nav = () => {
  const {dark}=useGlobalcontext()
  return (
    <div className="w-full sticky top-0 z-10 ">
    <div className={`max-w-[1190px] z-20  mx-auto py-2 ${dark?'text-white':'text-black'} transition duration-[1s] font-serif font-bold   flex justify-between items-center`}>
     
      <Link href={``} className=' '>
        IFEOLUWA ISAIAH
        </Link>
      <div className="flex gap-8">
      <Link href={`/work`} className=' '>WORK</Link>
      <Link href={``} className=' '>ABOUT</Link>
      <Link href={``} className=' '>ARCHIVE</Link>
      </div>
    </div>
    </div>
  )
}

export default nav