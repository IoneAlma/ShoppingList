import React from "react"

const ProductName = (props) => (
  <input 
    type="text" 
    value={ props.productName } 
    name="productName" 
    placeholder="Productos" 
    onChange={ props.handleChange } 
  />
)

export default ProductName