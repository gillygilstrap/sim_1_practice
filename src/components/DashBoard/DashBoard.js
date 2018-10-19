import React, { Component } from 'react'
import Product from '../Product/Product'
import { connect } from 'react-redux';
import { getAllInventory} from '../../ducks/reducer'

class DashBoard extends Component {
    constructor(props) {
        super()
        this.state = {
        inventory: []
     }
    }

    componentDidMount() {
      getAllInventory()
      this.setState({
        inventory: this.props.inventory
      })
    }
    
  render() {
    console.log('inventory',this.state.inventory)
    return (
      <div>
          <Product/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {inventory} = state
  return {
    inventory
  }
}

export default connect(mapStateToProps,{getAllInventory})(DashBoard);

