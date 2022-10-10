import { useState, useContext } from "react"


const ProductForm = ({ product }) => {

    

    const allVariantOptions = product.variants.edges?.map(variant => {
        const allOptions = {}
        variant.node.selectedOptions.map(item => {
            allOptions[item.name] = item.value
        })

        return {
            id: variant.node.id,
            price: variant.node.priceV2.amount,
            variantTitle: variant.node.title,
            options: allOptions,
            variantQuantity: 1
        }
       
        
    })
    const defaultValues = {}

    product.options.map(item => {
        defaultValues[item.name] = item.values[0]
    })
    
    const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
    const [selectedOptions, setSelectedOptions] = useState(defaultValues)

    // console.log("default Values", defaultValues)
    // console.log("all VarientOptions", allVariantOptions)

  return (
    <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3 ">
        <h2 className="text-3xl font-bold">{product.title}</h2>
    </div>
  )
}

export default ProductForm