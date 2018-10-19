import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            imgUrl: '',
            name: '',
            price: 0
            
        }
        this.handleImgChange = this.handleImgChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleClickCancel = this.handleClickCancel.bind(this)
    }

    handleImgChange(e) {
      this.setState({
        imgUrl: e.target.value
      })
    }

    handleNameChange(e) {
      this.setState({
        name: e.target.value
      })
    }

    handlePriceChange(e) {
      this.setState({
        price: e.target.value
      })
    }

    handleClickCancel() {
      this.setState({
        imgUrl: '',
        name: '',
        price: 0
      })
    }
  render() {
    return (
      <div>
        Form
        <input onChange={this.handleImgChange} value={this.state.imgUrl} type="text"/>
        <input onChange={this.handleNameChange} value={this.state.name} type="text"/>
        <input onChange={this.handlePriceChange} value={this.state.price} type="text"/>
        <button onClick={this.handleClickCancel}>Cancel</button>
        <button>Add</button>
        <br/>
      </div>
    )
  }
}
