'use client'

import React,{useState} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { skills, Works_experience, About } from '@/lib/constants'
import Image from 'next/image'




function Resume() {


  return (
    <div className='container px-5 md:px-16 mx-auto lg:mt-12 mt-3'>

    <Tabs defaultValue="experience" className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">

      <TabsList className='w-full flex flex-col'>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skill">Skills</TabsTrigger>
        <TabsTrigger value="about">About me</TabsTrigger>
      </TabsList>

      <div className='md:col-span-2'>
      <TabsContent value="experience">
        <div className='w-full md:px-4'>
        <p className='font-bold text-2xl mb-2'>My Experience</p>
        <div className='mt-4'>
          <p className='text-[14px] text-white/60'>Explore a comprehensive overview of my diverse experiences as a full-stack software engineer, where I have worked on various projects involving both front-end and back-end development, utilizing a wide range of technologies and tools.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5'>
        {Works_experience.map((data, index)=>(
          <div className='bg-slate-700 rounded-lg px-4 py-3 leading-normal flex flex-col space-y-4' key={index} >
              <small className='text-xs font-semibold text-accent'>{data.date}</small>
              <p>{data.role}</p>
              <small className='text-xs inline-flex space-x-3 items-center '>
                <div className="size-2 rounded-full bg-accent"></div>
                <span className='text-white/60'>{data.company}</span>
              </small>
          </div>
        ))}
        </div>
        </div>
      </TabsContent>


      <TabsContent value="skill" className='w-full'>
        <div className='md:px-4 w-full'>
          <p className='font-bold text-2xl mb-2'>My Skills</p>
          <p className='text-[14px] text-white/50 py-2'>I utilized cutting-edge technologies to develop outstanding web and mobile applications, adhering to professional standards and delivering remarkable user interfaces and experiences</p>
          <div className='mt-4 w-full'>
            <div className='w-full grid grid-cols-3 md:grid-cols-4 lg:gap-[30px] gap-4'>
              {skills.map((item, index)=>(
                <div key={index} className='w-full grid place-content-center bg-primary py-1 rounded-xl'>
                  <div className='flex flex-col items-center justify-center'>
                  <Image src={item.image} quality={100} width={40} height={40}  alt={item.label} className='size-[60px]' />
                  <small className='text-white/60'>{item.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="about">
        <div className='w-full md:px-4 '>
            <p className='text-2xl font-bold '>About Me</p>
            <div className='mt-3 mb-4 text-white/60'>
            Bridging the gap between ideas and innovation, I engineer digital solutions that elevate web and mobile experiences to new heights.
            </div>

            <div className='mt-8'>
              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {About.map((data, index)=>(
                  <li key={index} className='inline-flex text-sm '>
                    <span className='text-white/60 '>{data.label}:</span>
                    <span>{data.Val}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </TabsContent>
      </div>

    </Tabs>

    </div>
  )
}

export default Resume