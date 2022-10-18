import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Hero = () => {

    const router = useRouter();

  return (
    <div className=''>
        <div className="relative h-[25rem]">
            <Image src="https://imgur.com/ouk8em4.png" layout='fill' objectFit='cover' />
        </div>
        {/* Announcement Container */}
        <section className=" -mt-2 py-2 md:mt-3 md:mx-auto  ">
            <h2 className="pl-5 font-bold text-3xl md:text-4xl ">Fossil-X Jaguar Boot</h2>
            <div className="px-5 mt-2 text-sm md:text-[1.05rem] md:max-w-2xl md:mx-auto">
            We approached the "Fossil-X" Series from the perspective of biomicry. Our apprecation of the beauty of the natural world shaped every part of the pieces involved.
            </div>

            <div className="flex items-center justify-start pl-5 mt-8 md:max-w-2xl md:mx-auto">
                <button onClick={() => router.push('/products/fossil-x-jaguar-runner')} className="border-[1px] shadow-lg border-black rounded-3xl bg-gray-300 font-semibold px-4 py-2 md:text-lg ">Availble Now</button>
            </div>

        </section>
    </div>
  )
}

export default Hero