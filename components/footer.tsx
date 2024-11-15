
import {MdWhatsapp, MdFacebook} from 'react-icons/md'
import {BiLogoTwitter, BiLogoGithub, BiDownload} from 'react-icons/bi'
import Image from 'next/image'



const Footer =()=>{
    return(
        <footer className='bg-gray-950/30 mt-16'>
            <div className="container px-4 md:px-16 mx-auto mt-8 py-8">
                

                <div className="grid md:grid-cols-2 grid-cols-1 md:py-4 py-2">

                    <div className='grid md:grid-cols-2 md:items-center grid-cols-1'>
                        <div className='grid place-content-center'>
                            <Image src="/logo.png" height={100} width={100} alt='logo'  className='object-contain md:w-[150px] md:h-[150px] w-[150px] h-[150px] '/>
                        </div>
                      
                        <div className='text-center md:text-left'>
                            <ul className='flex  justify-center gap-x-3 text-md mb-2 '>
                                <li>Home</li>
                                <li>Services</li>
                                <li>Resume</li>
                                <li>Works</li>
                            </ul>
                            <p className='text-gray-300'>&copy; 2024 IOTECHHUB: All right Reserved</p>
                        </div>
                    </div>

                    <div className='grid place-content-center mt-8 md:mt-0'>
                        <div className='flex items-center gap-x-4 mb-4'>
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
                        <p>
                            <a href="iotechhub@gmail.com" target='_blank' className='text-center md:text-left'>iotechhub@gmail.com</a>
                        </p>
                        
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer