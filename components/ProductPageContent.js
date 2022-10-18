import React from 'react'
import Image from 'next/image'
import ProductForm from './ProductForm/ProductForm'

export default function ProductPageContent({ product }) {
  return (
    <div className='flex flex-col justify-center items-center space-y-3 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto '>
        <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2 ">
          <div className="relative h-96 w-full">
            <Image src={product.images.edges[0].node.originalSrc} layout='fill' objectFit='cover' alt={product.images.edges[0].node.altText} />
          </div>
        </div>
        <ProductForm product={product} />
        <section className="w-full flex flex-col items-center justify-center pt-5">
          <h2 className="font-bold text-center text-xl">How Does The Jag Boot Fit?</h2>
          <p className="text-center mt-2 text-gray-500">
          The Jag Boot runs True to size, but in the case that the fit does not meet your expectations, we will offer size exchanges to get you the experience you deserve!
          </p>

          <h2 className="font-bold text-center text-xl mt-5">How Do I Get These On?</h2>
          <p className="text-center mt-2 text-gray-500">
          The Jag Boot is engineered so that the front tongue of the shoe is easy to move forward, which then gives you room to put your foot in the shoe. We like to make things that puzzle onlookers, and this boot is no exception!
          </p>

          <h2 className="font-bold text-center text-xl mt-5">How Long Until My Boot Arrives?</h2>
          <p className="text-center mt-2 text-gray-500">
          We plan to ship the boots within 2-5 months of the order. We are excited to offer the chance to have this unique shoe before anyone else (free shipping as well)!
          </p>
        </section>

    </div>
  )
}
