import React from 'react'

const ProductOptions = ({ name, values, selectedOptions, setOptions }) => {
  return (
    <fieldset className='-mt-5'>
        <legend className="text-xl font-semibold">{name}</legend>
        <div className="inline-flex items-center flex-wrap">
            {
                values.map(value => {
                    const id = `options${name}-${value}`
                    const checked = selectedOptions[name] == value

                    return (
                        <label key={id} htmlFor={id}>
                            <input className='sr-only' type='radio' id={id} onChange={() => {
                                setOptions(name, value)
                            }} name ={`option-${name}`} value={value} checked={checked}  />
                            <div className={`p-1 my-3 text-lg rounded-full block cursor-pointer mr-3 ${checked ? "text-white bg-gray-900" : "text-gray-900 bg-gray-200"}`}>
                                <span className="px-2">{value}</span>
                            </div>
                        </label>
                    )
                })
            }
        </div>
    </fieldset>
  )
}

export default ProductOptions