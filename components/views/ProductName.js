import React from "react"

const ProductName = (props) => (
  <form>
    <input 
      type="text" 
      value={ props.productName } 
      name="productName" 
      placeholder="Productos" 
      onChange={ props.handleChange } 
    />
  </form>
)

export default ProductName