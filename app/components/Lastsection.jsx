import React from 'react'
import Image from 'next/image'
import img5 from '../../public/pics/img5.jpg'
const Lastsection = () => {
  return (
    <div className='h-screen bg-black flex justify-center items-center'>
      <Image src={img5} width={250} height={200} />
    </div>
  )
}

export default Lastsection