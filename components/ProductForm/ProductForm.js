import { useState, useContext } from "react"
import { formatter } from '../../utils/helpers'
import ProductOptions from "../ProductOptions"
import { CartContext } from "../../context/shopContext"


const ProductForm = ({ product }) => {

    const { addToCart } = useContext(CartContext)

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
            variantQuantity: 1,
            image: variant.node.image?.url
        }
       
        
    })
    const defaultValues = {}

    function setOptions(name, value) {
        setSelectedOptions(prevState => {
            return {...prevState, [name]: value}
        })

        const selection = {
            ...selectedOptions,
            [name]: value
        }

        allVariantOptions.map(item => {
            if (JSON.stringify(item.options) === JSON.stringify(selection)) {
                setSelectedVariant(item)
            }
        })
    }


    product.options.map(item => {
        defaultValues[item.name] = item.values[0]
    })
    
    const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
    const [selectedOptions, setSelectedOptions] = useState(defaultValues)





    // console.log("default Values", defaultValues)
    // console.log("all VarientOptions", allVariantOptions)

  return (
    <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3 ">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <span className="pb-6">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
        {product.options.map(({ name, values }) => (
            <ProductOptions 
            key={`${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
            />
        ))}
        <button
        onClick={() => {
            addToCart(selectedVariant)
        }}
        className="bg-black rounded-lg text-white px-2 py-3 hover:bg-gray-800 ">Add to cart</button>
    </div>
  )
}

export default ProductForm