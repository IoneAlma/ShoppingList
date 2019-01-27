import React, {Component, Fragment} from "react"
import ProductName from "./../views/ProductName"
import CategoriesSelect from "./../views/CategoriesSelect"

class ShoppingListContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      productValue: '',
      categoryValue: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleChange(event) {
    const inputValue = event.target.value
    this.setState({
      productValue: inputValue
    })
  }

  handleSelectChange(event) {
    this.setState({
      categoryValue: event.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <ProductName  handleChange={ this.handleChange }/>
        <CategoriesSelect handleSelectChange={ this.handleSelectChange }/>
      </Fragment>
    ) 

  }
}

export default ShoppingListContainer