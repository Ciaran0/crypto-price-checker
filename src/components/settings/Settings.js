import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Select from 'react-select'
import { values } from 'lodash'
import { setFiat, Fiat } from '../../redux/settings';

import 'react-select/dist/react-select.css'
class Settings extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      selectedFiat: props.fiat
    }
  }
  componentWillReceiveProps( nextProps ) {
    this.setState( { selectedFiat: nextProps.fiat } )
  }

  getOptions = () => {
    return values( Fiat ).map( fiat => ( { label: fiat, fiat } ) )
  }

  handleSelectFiatChange = ( fiat ) => {
    this.setState( { selectedFiat: fiat } )
  }

  handleFiatChange = ( fiat ) => {
    this.props.actions.setFiat( this.state.selectedFiat.fiat )
  }

  render() {
    const { selectedFiat } = this.state
    const fiatButtonDisabled = selectedFiat.label === this.props.fiat.label
    return (
      <div>
        <Select
          placeholder="Select a fiat"
          name="select-fiat"
          value={selectedFiat}
          onChange={this.handleSelectFiatChange}
          options={this.getOptions()}
          scrollMenuIntoView={false}
          clearable={false}
        />
        <button className="btn" onClick={this.handleFiatChange} disabled={fiatButtonDisabled}>Change Fiat</button>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  const { fiat } = state.settings
  return { fiat: { label: fiat, fiat } };
};
function mapDispatchToProps( dispatch ) {
  return {
    actions: bindActionCreators( { setFiat }, dispatch ),
  }
}
export default connect( mapStateToProps, mapDispatchToProps )( Settings );
