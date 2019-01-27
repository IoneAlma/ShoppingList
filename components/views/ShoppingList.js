import React from "react"

const ShoppingList = (props) => (
  <div>
    <h2>{ props.categoryName }</h2>
    <h3>{ props.productName }</h3>
  </div>
)

export default ShoppingList