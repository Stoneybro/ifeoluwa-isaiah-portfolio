'use client'
import React from 'react'
import {CldImage} from 'next-cloudinary'
const CustomImage = ({w,h,source,sizes,desc}) => {
  return (

    <CldImage
    deliveryType='fetch'
    width={w}
    height={h}
    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${source}`}
    sizes={sizes}
    alt={desc}
    />

  )
}

export default CustomImage

export const SmallImage = ({source,desc}) => {
  return (

    <CldImage
    deliveryType='fetch'
    width='320'
    height='240'
    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${source}`}
    sizes='100vw'
    alt={desc}
    />

  )
}