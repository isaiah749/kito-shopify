import React from 'react'
import Image from 'next/image'

const HeroVideo = () => {
  return (
    <div className="w-[350px] h-[32rem] mx-auto ">
        <video src='https://cdn.shopify.com/videos/c/o/v/14168d9d548a46409abfa2f867cba4db.mp4' className='w-full object-cover h-full' autoPlay loop muted />
    </div>
  )
}

export default HeroVideo