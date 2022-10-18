import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import menuIcon from '../styles/Icons/menu-icon.svg'
import kitoLogo from '../styles/Identity/kitoLogoBlack.png'
import closeIcon from '../styles/Icons/close.svg'
import bagIcon from '../styles/Icons/bag-icon-nav.svg'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter();
  return (
    <div className="relative">
      <div className="max-w-7xl flex items-center justify-center space-x-20 shadow-lg py-3">
          <div className="">
            <div onClick={() => setOpen(!open)} className={open ? 'hidden' : 'block h-8 w-8 relative'}>
              <Image src={menuIcon} layout='fill'  objectFit='cover' />
            </div>
            <div onClick={() => setOpen(!open)} className={open ? 'block h-8 w-8 relative' : 'hidden'}>
              <Image src={closeIcon} layout='fill'  objectFit='cover' />
            </div>
          </div>
          <div onClick={() => router.push('/')} className="relative h-[50px] w-[120px]">
          <Image src={kitoLogo} layout='fill'  objectFit='contain' />
          </div>
          <div className="relative h-10 w-10">
            <Image src={bagIcon} layout='fill'  objectFit='cover' />
            <div className="absolute top-3 left-4 ">
              0
            </div>
          </div>
      </div>
      <div className={open ? "fixed w-full top-15 left-0 bg-white h-[max-content] z-20 transition-all ease-in-out duration-200 pt-5 " : "hidden"}>
        <ul className='space-y-3 px-5'>
          <li onClick={() => router.push('/')} className='nav-list-link'>Home</li>
          <li onClick={() => router.push('/catelog')}  className='nav-list-link'>Catalog</li>
          <li onClick={() => router.push('/contact')}  className='nav-list-link'>Contact</li>
          <li onClick={() => router.push('/about-fossilx')}  className='nav-list-link'>What is Fossil-X</li>
          <li onClick={() => router.push('/production')}  className='nav-list-link'>How are these made?</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav