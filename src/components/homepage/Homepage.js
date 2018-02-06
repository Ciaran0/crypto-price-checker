import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCoin } from '../../redux/addCoin';
import { CryptoPriceRow } from '../CryptoPriceRow/CryptoPriceRow';
import './Homepage.css';

class Homepage extends Component {

  renderTrackedCoins() {
    const { coins, data, fiat } = this.props
    const currencyKey = `price_${fiat.toLowerCase()}`
    return data && coins.map( coin => {
      const coinData = data[coin.name]
      return <CryptoPriceRow
        key={coin.name}
        name={coin.name}
        crypto={coin.symbol}
        fiat={fiat}
        price={coinData[currencyKey]}
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

const mapStateToProps = ( state ) => {
  console.log( 'ss', state )
  return {
  coins: state.coins.trackedCoins,
    fiat: state.settings.fiat
  }
}


const mapDispatch = { addCoin };
export default connect( mapStateToProps, null )( Homepage );
