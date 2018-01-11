import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { addCoin } from '../../redux/reducers';
import Select from 'react-select'

import 'react-select/dist/react-select.css'

class AddCoin extends Component {

  state = {
    selectedOption: '',
  }

  getOptions = () => {
    console.log( this.props )
    return Object.keys( this.props.coins || {} ).reduce( ( accumulator, key ) => {
      const value = this.props.coins[key]
      const coin = { name: value.name, symbol: value.symbol }
      return [...accumulator, { label: `${key} (${value.symbol})`, coin }]
    }, [] );
  }

  handleChange = ( selectedOption ) => {
    this.setState( { selectedOption } );
    console.log( `Selected: ${selectedOption.label}` );
  }

  handleAdd = () => {
    this.props.actions.addCoin( this.state.selectedOption.coin )
  }

  render() {
    return (
      <div>
        <Select
          name="form-field-name"
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={this.getOptions()}
          scrollMenuIntoView={false}
        />
        <button onClick={this.handleAdd}>Add coin</button>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return { trackedCoins: state.coins };
};
function mapDispatchToProps( dispatch ) {
  return { actions: bindActionCreators( { addCoin }, dispatch ) }
}
export default connect( mapStateToProps, mapDispatchToProps )( AddCoin );