import React, { Component } from 'react'

import { fiatSymbol } from '../../utils.js'
import styles from './CryptoPriceRow.css'

export class CryptoPriceRow extends Component {

  loadLogo( cryptoSymbol ) {
    try {
      return require( `../logos/${cryptoSymbol}.svg` )
    } catch ( e ) {
      return null
    }
  }

  render() {
    const { crypto, name, fiat, price, change } = this.props
    const numberFormatter = new Intl.NumberFormat();
    const changePositive = ( change > 0 ) ? 'text--green' : 'text--red'
    const imgSrc = this.loadLogo( crypto )
    return (
      <tr>
        <td>{imgSrc && <img src={imgSrc} alt="Crypto logo" width="20" height="20" />}</td>
        <td>{`${name} (${crypto})`}</td>
        <td className="text--right"><span className={changePositive}>{fiatSymbol[fiat]}{numberFormatter.format( parseFloat( price ).toFixed( 4 ) ) || ""}</span></td>
        <td className="text--right"><span className={changePositive}>{change || ""}%</span></td>
      </tr>
    );
  }
}