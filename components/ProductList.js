import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <div className=''>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Products</h2>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-col-2 lg:grid-col-3 xl:grid-cols-4 xl:gap-x-8 ">
                {
                    products.map(product => (
                        <ProductCard key={product.node.id} product={product} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ProductList