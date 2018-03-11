import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
  MemoryRouter,
  Route,
} from 'react-router-dom'
import { keyBy } from 'lodash'

import Header from '../header/Header'
import Homepage from '../homepage/Homepage'
import { About } from '../about/About'
import AddCoin from '../add-coin/AddCoin'
import Settings from '../settings/Settings'

import './App.css'

const seconds10 = 30000

class App extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      timer: null,
      data: null
    }
    this.priceUrl = `https://api.coinmarketcap.com/v1/ticker/?convert=EUR`
  }

  componentWillMount() {
    return this.getPrice()
  }
  componentDidMount() {
    let timer = setInterval( this.getPrice, seconds10 );
    this.setState( { timer } );
  }

  componentWillUnmount() {
    clearInterval( this.state.timer );
  }

  getPrice = () => {

    return fetch( this.priceUrl )
      .then( ( resp ) => resp.json() )
      .then( ( data ) => {
        this.setState( { data: keyBy( data, 'name' ) } )
      } )
      .catch( console.log )
  }

  render() {
    const { data } = this.state
    return (
      <MemoryRouter
        initialEntries={['/prices', '/coins', '/settings', '/about']}
        initialIndex={0}
      >
        <div>
          <Header />
          <div className="app-container">
            <Route path="/prices" render={() => <Homepage data={data} />} />
            <Route path="/about" component={About} />
            <Route path="/coins" render={() => <AddCoin coins={data} />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </div>
      </MemoryRouter>
    );
  }
}

export default hot( module )( App )
