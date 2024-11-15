'use client'

import {MdWhatsapp, MdFacebook} from 'react-icons/md'
import {BiLogoTwitter, BiLogoGithub, BiDownload} from 'react-icons/bi'
import Image from 'next/image'
import { motion } from 'framer-motion'



function Hero() {

    const downloadCv = ()=>{
        const cvPath = "/cv/mycv.pdf";
        const link = document.createElement("a");
        link.href = cvPath;
        link.setAttribute("download", "iheaka.pdf"); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (
    <div>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center'>

            <div className='leading-none text-center md:text-left order-2 lg:order-none mt-3 lg:mt-0'>
                <small className='font-bold text-grey-300 '>Software Engineer</small>
                <p className='font-bold text-[40px] text-white py-2 mt-2'> Hi, I am</p>
                <p className='font-bold text-[40px] text-accent'>Iheaka Chinecherem .M.</p>
                <div className='leading-relaxed text-sm text-gray-400 mt-8 md:max-w-[80%]'>
                Bridging the gap between ideas and innovation, I engineer digital solutions that elevate web and mobile experiences to new heights.
                </div>

                <div className='mt-9 mb-3'>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <button onClick={downloadCv} className='rounded-3xl px-5 py-3 border-accent border-[1.4px] text-accent hover:bg-accent hover:text-black transition-all ease-in-out inline-flex items-center gap-x-4'>Download CV <BiDownload size={20} className=' animate-bounce'/></button>

                        <div className=' grid grid-cols-4 gap-x-4 justify-center md:flex md:ml-4  md:w-auto'>

                            <div className='w-10 h-10 text-accent rounded-full bg-none border-accent border-[1.4px] grid place-content-center'>
                                <MdWhatsapp color='accent' size={25}/>
                            </div>

                            <div className='w-10 h-10 text-accent rounded-full bg-none border-accent border-[1.4px] grid place-content-center'>
                                <MdFacebook color='accent' size={25}/>
                            </div>

                            <div className='w-10 h-10 text-accent rounded-full bg-none border-accent border-[1.4px] grid place-content-center'>
                                <BiLogoGithub color='accent' size={25}/>
                            </div>

                            <div className='w-10 h-10 text-accent rounded-full bg-none border-accent border-[1.4px] grid place-content-center'>
                                <BiLogoTwitter color='accent' size={25}/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            

            <div className='w-full h-full relative grid place-content-center'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.4, ease:"easeIn" }}
                className='order-first md:order-none'
                >
            <div className="">
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.4, ease:"easeIn" }}
                className="grid place-content-center md:w-[400px] md:h-[400px] h-[300px] w-[300px] px-5 overflow-clip mix-blend-lighten absolute rounded-full">
                
                    <Image
                    src="/mypics.png"
                    alt="pics"
                    fill
                    quality={100}
                    className="object-contain md:w-[330px] md:h-[330px] h-full w-full"
                    />
                
                </motion.div>
            </div>
                <motion.svg className='md:w-[400px] md:h-[400px] h-[300px] w-[300px]' fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{strokeDasharray: "24 10 0 0" }} animate={{strokeDasharray:["15 120 25 25" , "16 25 92 72", "4 250 22 22"], rotate:[120, 360]}}  transition={{ duration: 15, repeat: Infinity, reverseType:"reverse"}} />
                </motion.svg>

            </motion.div>

           
            </div>

            

        </div>
        
    </div>
  )
}

export default Hero