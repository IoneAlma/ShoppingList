import React from "react"

const CategoriesSelect = (props) => (

  <form>
    <select value={ props.value } onChange={ props.handleSelectChange }>
      <option value="sin categoría">Sin categoría</option>
      <option value="lácteos">Lácteos</option>
      <option value="fruta y verdura">Fruta y Verdura</option>
      <option value="carne">Carne</option>
      <option value="pescado">Pescado</option>
      <option value="bebidas">Bebidas</option>
      <option value="panadería">Panadería</option>
    </select>
  </form>
)
  
  
export default CategoriesSelect
