import React, { Component } from 'react';
import {
  MemoryRouter,
  Route,
  NavLink,
} from 'react-router-dom'
import SVG from 'react-inlinesvg';
import { keyBy } from 'lodash'

import Homepage from '../homepage/HomePage'
import { About } from '../about/About'
import AddCoin from '../add-coin/AddCoin'
import Settings from '../settings/Settings'

import './App.css'

const seconds10 = 30000

export default class App extends Component {

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
          <nav>
            <ul>
              <li>
                <NavLink to="/prices">
                  <SVG
                    src={require( './prices.svg' )}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/coins">
                  <SVG
                    src={require( './add_coin.svg' )}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings">
                  <SVG
                    src={require( './settings.svg' )}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <SVG
                    src={require( './info.svg' )}
                  />
                </NavLink>
              </li>
            </ul>
          </nav>

          <hr />

          <Route path="/prices" render={() => <Homepage data={data} />} />
          <Route path="/about" component={About} />
          <Route path="/coins" render={() => <AddCoin coins={data} />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </MemoryRouter>
    );
  }
}
