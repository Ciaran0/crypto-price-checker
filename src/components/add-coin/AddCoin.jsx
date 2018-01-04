import React, { Component } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

export class AddCoin extends Component {

  state = {
    selectedOption: '',
  }

  getOptions = () => {
    console.log( this.props )
    return Object.keys( this.props.coins || {} ).reduce( ( accumulator, key ) => {
      const value = this.props.coins[key]
      return [...accumulator, { label: `${key} (${value.symbol})`, value }]
    }, [] );
  }

  handleChange = ( selectedOption ) => {
    this.setState( { selectedOption } );
    console.log( `Selected: ${selectedOption.label}` );
  }

  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={this.getOptions()}
        scrollMenuIntoView={false}
      />
    );
  }
}