import React, {Component, Fragment} from "react"
import ProductName from "./../views/ProductName"
import CategoriesSelect from "./../views/CategoriesSelect"
import AddButton from "./../views/AddButton"
import ShoppingItem from "../views/ShoppingItem"

class ShoppingListContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      productValue: '',
      categoryValue: 'Sin Categoría',
      isClicked: false,
      productList: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const inputValue = event.target.value
    this.setState({
      productValue: inputValue
    })
  }

  handleSelectChange(event) {
    const cagoryValue = event.target.options[event.target.selectedIndex].text
    this.setState({
      categoryValue: cagoryValue
    })
  }

  handleClick(event) {
    event.preventDefault()
    const item = { 
      product: this.state.productValue,
      category: this.state.categoryValue
    }

    this.setState({
      isClicked: true,
      productList: [ ...this.state.productList, item ]
      // Los tres puntos (spread operator) realizan una copia del valor, es importante que no se modifique 
      //  el valor anterior, se puede utilizar con objetos y con arrays
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    })
  } 

  render() {
    return (
      <Fragment>
        <ProductName  handleChange={ this.handleChange }/>
        <CategoriesSelect handleSelectChange={ this.handleSelectChange }/>
        <AddButton handleClick={ this.handleClick }/>
        { 
          this.state.isClicked && this.state.productList.map(item => (
            <ShoppingItem key={ item.product }
              productName={ item.product } 
              categoryName={ item.category }
            />
          ))
        }
      </Fragment>
    ) 

  }
}

export default ShoppingListContainer