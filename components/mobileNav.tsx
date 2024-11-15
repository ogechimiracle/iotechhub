'use client'
import {CiMenuFries} from 'react-icons/ci'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { urlLinks } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
    const pth = usePathname()
  return (
    <Sheet>
        <SheetTrigger><CiMenuFries className='text-[32px] text-accent'/></SheetTrigger>
        <SheetContent className='bg-primary'>
            <div className='flex flex-col'>

                <div className='mt-16 mb-16 text-center'>IO-TechHub</div>

                <nav className='flex flex-col items-center justify-center gap-8'>
                    {urlLinks.map(({label, path})=>(
                        <Link href={path} key={label} className={`${path === pth && "text-accent border-b-2 border-accent "}hover:text-accent transition-all`}>
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav