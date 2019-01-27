import React, {Component, Fragment} from "react"
import ProductName from "./../views/ProductName"
import CategoriesSelect from "./../views/CategoriesSelect"
import AddButton from "./../views/AddButton"
import ShoppingList from "../views/ShoppingList"

class ShoppingListContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      productValue: '',
      categoryValue: 'Sin Categoría',
      isClicked: false,

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

  handleClick() {
    this.setState({
      isClicked: true
    }) 
  } 

  render() {
    return (
      <Fragment>
        <ProductName  handleChange={ this.handleChange }/>
        <CategoriesSelect handleSelectChange={ this.handleSelectChange }/>
        <AddButton handleClick={ this.handleClick }/>
        { 
          this.state.isClicked && 
          <ShoppingList 
            productName={ this.state.productValue } 
            categoryName={ this.state.categoryValue }
          /> 
        }
      </Fragment>
    ) 

  }
}

export default ShoppingListContainer