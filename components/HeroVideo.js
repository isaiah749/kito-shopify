import React from 'react'
import Image from 'next/image'

const HeroVideo = () => {
  return (
    <div className="w-screen snap-center flex-shrink-0">
      <div className="w-full md:w-[350px] h-[25rem] mx-auto ">
          <video src='https://cdn.shopify.com/videos/c/o/v/14168d9d548a46409abfa2f867cba4db.mp4' className='w-full object-cover h-full' autoPlay loop muted />
      </div>
      <div className="px-5">
          <h2 className="font-bold text-3xl mt-2 md:mt-4">KITOWARES</h2>
          <h2 className="font-bold text-2xl pl-4 -mt-2 mb-3">Creation & Destruction</h2>
          <p className="pl-2 text-sm md:max-w-2xl md:mx-auto md:text-[1.05rem] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quis eius, ipsam consequatur cumque tempore illum sunt a deleniti laudantium, dolores delectus eveniet quam alias temporibus. Odit, nesciunt. Veniam, explicabo.
          </p>
          <div className="flex items-center justify-start pl-2 mt-5 md:max-w-2xl md:mx-auto">
                <button className="border-[1px] shadow-lg border-black rounded-3xl bg-gray-300 font-semibold px-4 py-2 md:text-lg ">Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default HeroVideo