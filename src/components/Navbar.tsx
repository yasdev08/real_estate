import { NAVBAR_HEIGHT } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-xl'
    style={{height: `${NAVBAR_HEIGHT}px`}}
    >
        <div className='flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white'>
            <div className='flex items-center gap-4 md:gap-6'>
                <Link href="/" className='cursor-pointer hover:!text-primary-300' scroll={false}>
                    <div className='flex items-center gap-3'>
                        <Image src="/logo.svg" alt="Rentiful logo" width={24} height={24} className='w-6 h-6'
                        />
                        <div className='text-xl font-bold'>
                            RENT
                            <span className='text-secondary-500 font-light hover:!text-primary-500'>
                                IFUL
                            </span>
                        </div>
                    </div>
                </Link>
                <p className='text-pru'></p>
            </div>
        </div>
        Navbar</div>
  )
}

export default Navbar