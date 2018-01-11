import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCoin } from '../../redux/reducers';
import { CryptoPriceRow } from '../CryptoPriceRow/CryptoPriceRow';
import './Homepage.css';

class Homepage extends Component {

  renderTrackedCoins() {
    const { coins, data, fiat } = this.props
    return data && coins.map( coin => {
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

const mapStateToProps = ( state ) => {
  return { coins: state.coins };
};
const mapDispatch = { addCoin };
export default connect( mapStateToProps, null )( Homepage );
