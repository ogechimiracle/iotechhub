/* eslint-disable react/no-unescaped-entities */
'use client'

import { services } from "@/lib/constants"
import { motion } from "framer-motion"
import Image from "next/image"


function Services() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.3, duration:0.4, ease:"easeInOut"}}} className='container px-5 md:px-16 mx-auto'>

      <div className='mt-5 flex flex-col justify-center w-full items-center'>
        <p className='font-semibold text-2xl'>My Service</p>
        <div className='md:max-w-[580px] text-center text-md text-gray-400 mt-2 leading-tight'>
          I Offer top-notch service in both mobile and web development, Scalable App and meet up design standard.
        </div>
      </div>


      <div className="mt-12 grid place-content-center">
        <div className="grid md:grid-cols-3 grid-cols-1 w-full justify-center items-center gap-x-3 gap-y-4">
            {services.map(({name, image, info})=>(
              <div key={name} className=" flex flex-col items-center w-[300px] h-[400px] bg-gray-300 text-black rounded-lg px-4 py-4 hover:bg-accent-hover hover:scale-105 transition-all ease-in-out duration-100 delay-75 cursor-pointer hover:text-white">
                 <Image src={image} height={130} width={130} alt={name} />

                 <p className="mt-8 mb-4 font-bold text-xl text-center">{name}</p>

                 <div className="text-sm text-gray-700 mt-2">
                  {info}
                 </div>
              </div>
            ))}
        </div>
      </div>

    </motion.div>
  )
}

export default Services