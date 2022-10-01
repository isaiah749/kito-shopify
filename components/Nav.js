import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
  return (
    <header className="sticky top-0 z-20 bg-white ">
        <div className="flex items-center justify-between max-w-6xl pt-4 px-4 pb-2 mx-auto lg:max-w-screen-xl">
            <Link href="/" passHref>
                <a className="cursor-pointer relative h-[40px] w-[85px] ">
                    <Image src="https://cdn.shopify.com/s/files/1/0274/1351/2301/files/greyBlack.png?v=1663006704" layout='fill' objectFit='contain' />
                </a>
            </Link>
            <a className="cursor-pointer">
                    <span className="text-lg pt-1 font-bold">Cart</span>
                </a>
        </div>
    </header>
  )
}

export default Nav