import React from "react"

const ShoppingItem = (props) => (
  <div>
    <h2>{ props.categoryName }</h2>
    <input type="checkbox" />
    <p>{ props.productName }</p>
  </div>
)

export default ShoppingItem