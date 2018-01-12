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
    const trackedCoinNames = this.props.trackedCoins.map( coin => coin.name )
    return Object.keys( this.props.coins || {} )
      .filter( coin => !trackedCoinNames.includes( coin ) )
      .reduce( ( accumulator, key ) => {
        const value = this.props.coins[key]
        const coin = { name: value.name, symbol: value.symbol }
        return [...accumulator, { label: `${coin.name} (${coin.symbol})`, coin }]
      }, [] );
  }

  handleChange = ( selectedOption ) => {
    this.setState( { selectedOption } );
  }

  handleAdd = () => {
    this.props.actions.addCoin( this.state.selectedOption.coin )
    this.setState( { selectedOption: '' } )
  }

  render() {
    return (
      <div>
        <Select
          name="select-coin"
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