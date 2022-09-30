import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <header className=" border-b-2 sticky top-0 z-20 bg-white ">
        <div className="flex items-center justify-between max-w-6xl pt-4 px-4 pb-2 mx-auto lg:max-w-screen-xl">
            <Link href="/" passHref>
                <a className="cursor-pointer">
                    <span className="text-lg pt-1 font-bold">KITO.ONLINE</span>
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