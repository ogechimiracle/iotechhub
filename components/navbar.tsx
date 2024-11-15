'use client'

import { urlLinks } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './mobileNav'
import Image from 'next/image'




function Navbar() {

    const pth = usePathname()

  return (
    
    <nav className='py-4'>
        <div className='text-white flex items-center justify-between w-full'>
            <div>
                <Image src="/logo.png" alt='logo' height={150} width={150}  />
            </div>

            <div className='hidden xl:flex gap-x-5 items-center'>
                <div className='flex gap-8'>
                    {urlLinks.map(({label, path})=>(
                        <Link href={path} key={label} className={`${path ===pth &&"text-accent border-b-2 border-accent"} capitalize hover:text-accent transition-all font-medium`}>
                            {label}
                        </Link>
                    ))}
                </div>
                <button className='px-4 py-1 rounded-lg font-normal text-primary bg-accent hover:bg-accent-hover transition-all ease-in-out'>Hire Me!</button>
            </div>

            <div className='xl:hidden'>
                <MobileNav/>
            </div>

        </div>
    </nav>
  )
}

export default Navbar