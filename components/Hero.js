import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=''>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="hidden md:block relative h-[35rem] mx-auto w-[100%] md:h-[30rem] border-r-2 border-black ">
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Dunes_Scanned-20.png?v=1663954587' layout='fill' objectFit='cover' />
            </div>
            <div className="relative h-[35rem] w-[90%] mx-auto md:w-[100%] md:h-[30rem] ">
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Dunes_Scanned-21.png?v=1663954486' layout='fill' objectFit='cover' />
            </div>
            <div className="hidden md:block relative h-[35rem] mx-auto w-[100%] md:h-[30rem] border-l-2 border-black ">
                <Image src='https://cdn.shopify.com/s/files/1/0274/1351/2301/files/Dunes_Scanned-11.png?v=1663954485' layout='fill' objectFit='cover' />
            </div>
        </div>
        {/* Announcement Container */}
        <section className="mt-5 py-2 md:mt-3 md:mx-auto  ">
            <h2 className="pl-5 font-bold text-3xl md:text-4xl ">Fossil-X Jaguar Runner</h2>
            <div className="px-5 mt-2 text-sm md:text-[1.05rem] md:max-w-2xl md:mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eaque praesentium officiis hic qui, iste totam ab sunt doloremque cum quae optio iusto assumenda. Commodi voluptatibus minus ex nostrum beatae?
            </div>

            <div className="flex items-center justify-start pl-5 mt-8 md:max-w-2xl md:mx-auto">
                <button className="border-[1px] shadow-lg border-black rounded-3xl bg-gray-300 font-semibold px-4 py-2 md:text-lg ">Availble Now</button>
            </div>

        </section>
    </div>
  )
}

export default Hero