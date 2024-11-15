/* eslint-disable react/no-unescaped-entities */

'use client'

import Hero from "@/components/hero";
import { skills, stats } from "@/lib/constants";
import Image from "next/image";
import CountUp from 'react-countup'



export default function Home() {
  return (
   <div className="container px-4 md:px-16 mt-12">
      <Hero />

      <div className="md:mt-8 mt-[4rem] mb-8 grid grid-cols-1 md:grid-cols-2 items-center">

        <div className="grid md:grid-cols-2 grid-cols-2 gap-3">
          {stats.map(({label, rate})=>(
            <div className="bg-gray-700 md:w-[195px] md:h-[130px] w-full h-full -skew-y-6 rounded-md px-4 py-2 hover:skew-y-0 hover:scale-125 transition-all ease-in-out duration-100 cursor-pointer" key={label}>
              <p className="text-4xl font-bold text-accent ">
              <CountUp start={0} end={rate} duration={5} separator="," />
                <span className="text-lg">+</span></p>
              <div className="flex items-center gap-x-4 mt-2">
                <div className="w-[50px] h-1 bg-gray-600"></div>
                <p className="leading-normal">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[2rem] md:mt-0">
          <p className="font-semibold text-2xl">About Me</p>
          <div className="md:max-w-[80%] text-lg mt-4 mb-4 text-gray-300">
            Building intuitive  <span className="text-accent">web and mobile solutions</span> that blend creativity with code. 
          </div>

          <p className="font-semibold text-2xl">Skills</p>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-3 mt-3">
              {
                skills.map(({label, image})=>(
                  <div key={label} className="md:w-[100px] md:h-[100px] w-full h-[100px] border-[1.2px] border-gray-500 rounded-md grid place-content-center cursor-pointer hover:bg-accent hover:border-none hover:scale-110 transition-all duration-100 ease-in-out group relative">
                    <div className="p-1">
                      <Image src={image} height={70} width={70} alt="label"/>
                    </div>
                    <div className="invisible absolute -bottom-8 right-0 left-0 w-full h-[40%] bg-black/30 grid place-content-center group-hover:bottom-0 group-hover:visible transition-all ease-in duration-150 delay-75">
                        <p className="text-sm font-semibold text-black ">{label}</p>
                      </div>
                  </div>
                ))
              }
          </div>

        </div>
        
       

      </div>


   </div>
  );
}
