import React from 'react'
import Image from 'next/image'

export default function ProductPageContent({ product }) {
  return (
    <div className='w-full  '>
        {product.title}
    </div>
  )
}
