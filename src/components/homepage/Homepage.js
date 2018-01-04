import React, { Component } from 'react';
import { values } from 'lodash'
import { CryptoPriceRow } from '../CryptoPriceRow/CryptoPriceRow';
import './Homepage.css';

export class Homepage extends Component {

  renderTrackedCoins() {
    const { trackedCoins, data, fiat } = this.props
    return data && values( trackedCoins ).map( coin => {
      const coinData = data[coin.name]
      return <CryptoPriceRow
        key={coin.name}
        name={coin.name}
        crypto={coin.symbol}
        fiat={fiat}
        price={coinData['price_eur']}
        change={coinData['percent_change_24h']}
      />
    } )
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.renderTrackedCoins()}
          </tbody>
        </table>
      </div>
    );
  }
}
