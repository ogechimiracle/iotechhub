/* eslint-disable react/no-unescaped-entities */

'use client'
import { motion } from "framer-motion"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { useState } from "react"
import { projects } from "@/lib/constants"
import Link from "next/link"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Image from "next/image"
import ButtonSlider from "@/components/buttonSlider"


function Works() {

  const [project, setProject] = useState (projects[0])

  const handleSwipeChange = (swiper:any)=>{
    const currIndex =  swiper.activeIndex
    setProject(projects[currIndex])
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} className="md:mt-12 mt-5  w-full flex flex-col justify-center">

      <div className="container px-5 md:px-16 mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 ">

        <div className="w-full flex flex-col justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-6xl font-extrabold text-accent leading-none inline-flex items-center flex-col md:flex-row gap-x-4">{project.num} <span className="text-3xl">{project.title}</span></div>
              <h2 className="text-white font-bold text-[29px] leading-none">{project.type} Project</h2>
              <p className="text-white/60">{project.description}</p>
              
              <div className=" md:max-w-[100%] text-wrap">
              <ul className="flex flex-wrap gap-2 leading-none text-accent ">
                {project.stack.map((item, index)=>(
                  <li key={index}>
                    {item} 
                    {index !== project.stack.length - 1 && ","}
                    </li>
                ))}
                
              </ul>
              </div>
              
              
              <div className="border border-white/60 w-[70%]"></div>

              <div className="flex gap-5 items-center">
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[60px] h-[60px] bg-white/5 rounded-full grid place-content-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[60px] h-[60px] bg-white/5 rounded-full grid place-content-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Link</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
        </div>


        <div className="rounded-md cursor-pointer">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          className="mb-12"
          onSlideChange={handleSwipeChange}
          >
            {projects.map((items, index)=>(
              <SwiperSlide key={index} className="xl:h-[520px] w-full mb-12">
                <div className="h-[460px] relative flex group justify-center items-center bg-white/20">

                  <div></div>

                  <div className="relative h-full w-full rounded-md">
                    <Image src={project.image} fill className="object-cover" alt="images"/>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* slider button */}
            <ButtonSlider containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
            btnStyle=" bg-accent hover:bg-accent-hover h-[44px] w-[44px] rounded-full flex justify-center items-center transition-all "
            iconStyle="size-[30px]"/>
          </Swiper>
        </div>

        </div>
        
      </div>

    </motion.div>
  )
}

export default Works