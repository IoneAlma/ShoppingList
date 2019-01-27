import React from "react"

const ProductsList = (props) => (
  <ul>
    <li>{ props.categoryName }</li>
    <li>{ props.productName }</li>
  </ul>
)

export default ProductsList