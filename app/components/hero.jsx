import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Footer from './heroFooter'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../public/Home-page/homepic1.jpg'
import img2 from '../../public/Home-page/homepic2.png'
import img3 from '../../public/Home-page/homepic3.png'
import img4 from '../../public/Home-page/homepic4.png'
import img5 from '../../public/Home-page/homepic5.png'
import img6 from '../../public/Home-page/homepic6.png'
import img7 from '../../public/Home-page/homepic7.png'

const hero = () => {
  const container=useRef(null)
  const wrapper=useRef(null)
  useEffect(()=>{

  },[])
  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(container.current,{
      xPercent:-66.5,
      scrollTrigger:{
        trigger:wrapper.current,
        scrub:1,
        start:'-50px top',
        end:()=>`+=${container.current.clientWidth}`,
        pin:true
      }
    })})

  return (
    <div className='h-[94vh] overflow-hidden relative font-sans ' ref={wrapper}>
      <div className=" w-[450vh] justify-between flex pr-32 pl-[6.5vh] " ref={container}>
      <div className="w-full h-[75vh] flex gap-8">


      <div className="flex flex-col h-full  gap-4 w-[55vh]">
        <div className="relative h-[55vh]">
        <Image
        src={img1}
        fill
        />
        </div>
      <div className="font-bold font-serif ">
      Hello, I’m <span className=' font-sans italic' style={{'font-family':'font-sans'}}>Ifeoluwa Isaiah</span> aka Product boy, a passionate photographer from Lagos, Nigeria.
      </div>
      </div>


{/* //////////////////////////// */}
        <div className="flex flex-col h-full  gap-4 w-[80vh] justify-end">
        <div className="font-semibold font-serif text-3xl text-right">

          Product <br/>
      <span className="italic" style={{'font-family':'font-sans'}}> Photographer</span> 


       </div>
          <div className="relative h-[50vh]">
          <Image
          src={img3}
          fill
          className='object-cover'
          />
          </div>
     
        </div>


{/* //////////////////////////// */}
<div className="flex flex-col h-full  gap-4 w-[50vh] ">

          <div className="relative h-[62vh]">
          <Image
          src={img2}
          fill
          className='object-cover'
          />
          </div>
          <div className="font-bold font-serif">
          In the world of product photography, I have a keen eye for highlighting the unique qualities of any object
       </div>
        </div>


{/* //////////////////////////// */}
<div className="flex flex-col h-full  gap-4 w-[50vh] justify-end">
<div className="font-bold text-right">
          <span className="font-sans italic text-3xl">Product Boy</span>
       </div>
          <div className="relative h-[50vh]">

          <Image
          src={img4}
          fill
          className='object-cover'
          />
          </div>
        </div>




        {/* //////////////////////////// */}
<div className="flex flex-col h-full  gap-4 w-[47vh] justify-start">
          <div className="relative h-[47vh]">

          <Image
          src={img6}
          fill
          className='object-cover'
          />
          </div>
          <div className="font-bold font-serif">
          Product boy is an Advertising photography brand, with years of experience in product and commercial photography, product boy understands the buying/selling industry .
       </div>
        </div>




                {/* //////////////////////////// */}
<div className="flex flex-col h-full  gap-4 w-[75vh] justify-end">
<div className="font-bold font-serif">
          Product photography is such a paramount aspect in selling out your business as a very good photograph has the ability to do the job of a hundred sales-man, what my photographs have to offer to your brand cannot be overemphasized .
       </div>
          <div className="relative h-[50vh]">

          <Image
          src={img5}
          fill
          className='object-cover'
          />
          </div>

        </div>



                        {/* //////////////////////////// */}
<div className="flex flex-col h-full  gap-4 w-[40vh] justify-start">
          <div className="relative h-[50vh]">

          <Image
          src={img7}
          fill
          className='object-cover'
          />
          </div>
          <Link href={"#"} className="font-bold font-serif">
VIEW ALL WORK 
       </Link>
        </div>






      </div>
      </div>
      <Footer />
    </div>
  )
}

export default hero;

{/* <div className="h-[75vh] w-auto  flex flex-col gap-4">
<div className="flex  ">
  <div className="font-bold font-serif ">Product
Photographer</div>
</div>
  <div className="w-[453px] ">
  <Image
   src={img3}
  width={403}
  height={323}
  sizes="(min-width: 1780px) 608px, (min-width: 1200px) 453px, (min-width: 900px) 279px, (min-width: 800px) 360px, (min-width: 600px) calc(52.22vw - 84px), calc(45.36vw - 75px)"
  className=' object-cover w-full h-full'
  alt='x for now' />
  </div>
</div>
<div className="h-[75vh] w-auto  flex flex-col gap-4">
  <div className="w-[305px]">
  <Image
   src={img2}
  width={300}
  height={350}
  sizes="(min-width: 1780px) 422px,(min-width: 1200px) 305px, (min-width: 900px) 279px, (min-width: 840px) 253px, (min-width: 600px) calc(33.64vw - 23px), calc(45.36vw - 75px)"
  className=' object-cover w-full h-full'
  alt='x for now' />
  </div>
  <div className="flex  ">
  <div className="font-bold font-serif ">
  In the world of product photography, I have a keen eye for highlighting the unique qualities of any object. Whether it's the intricate details of a product or the sleek lines of an handcrafted item, I strive to make products shine like stars on your screen.
  </div>
</div>
</div>
<div className="h-[75vh] w-auto  flex flex-col gap-4">
<div className="flex  ">
  <div className="font-bold font-serif ">Product Boy</div>
</div>
  <div className="w-[336px]">
  <Image
   src={img4}
  width={400}
  height={400}
  sizes="(min-width: 1780px) 477px,(min-width: 1200px) 336px, (min-width: 840px) calc(-2.06vw + 303px), (min-width: 600px) calc(37.73vw - 23px), calc(45.36vw - 75px)"
  className=' object-cover w-full h-full'
  alt='x for now' />
  </div>
</div>
<div className="h-[75vh] w-auto  flex flex-col gap-4">
  <div className="w-[330px]">
  <Image
   src={img6}
  width={400}
  height={400}
  sizes="(min-width: 1780px) 429px,(min-width: 1200px) 330px, (min-width: 900px) 279px, (min-width: 840px) 339px, (min-width: 600px) calc(50vw - 71px), calc(45.36vw - 75px)"
  className=' object-cover w-full h-full'
  alt='x for now' />
  </div>
  <div className="flex  ">
  <div className="font-bold font-serif ">
  Product boy is an Advertising photography brand, with years of experience in product and commercial photography, product boy understands the buying/selling industry and the importance of having high-end, quality photographs that speak a thousand words in marketing your brand, hereby boosting sales.
  </div>
</div>
</div>
<div className="h-[75vh] w-auto  flex flex-col gap-4">
<div className="flex  ">
  <div className="font-bold font-serif ">Product photography is such a paramount aspect in selling out your business as a very good photograph has the ability to do the job of a hundred sales-man, what my photographs have to offer to your brand cannot be overemphasized .</div>
</div>
  <div className="w-[408px]">
  <Image
   src={img5}
  width={400}
  height={400}
  sizes="(min-width: 1780px) 564px,(min-width: 1200px) 408px,(min-width: 900px) 288px, (min-width: 840px) 258px, (min-width: 600px) calc(34.55vw - 25px), calc(45.36vw - 75px)"
  className=' object-cover w-full h-full'
  alt='x for now' />
  </div>
</div>
<div className="h-[75vh] w-auto  flex flex-col gap-4">
  <div className="h-full w-[238px]">
  <Image
   src={img7}
  width={400}
  height={400}
  sizes="(min-width: 1780px) 361px,(min-width: 1200px) 238px, (min-width: 900px) 268px, (min-width: 840px) 217px, (min-width: 600px) calc(29.09vw - 22px), (min-width: 520px) calc(38.33vw - 58px), calc(41vw - 62px)" 
  className=' object-cover w-full h-full'
  alt='x for now' />
  </div>
  <div className="flex  ">
  <Link href={"#"} className="font-bold font-serif">VIEW ALL WORK </Link>
</div>

</div> */}