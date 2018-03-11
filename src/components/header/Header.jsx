import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import SVG from 'react-inlinesvg';
import classNames from 'classnames';

import './Header.css';

export class Header extends Component {

  isActive = ( location: string ) => {
    return this.props.location.pathname.indexOf( location ) !== -1;
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink
              to="/prices"
            >
              <SVG
                src={require( './prices.svg' )}
              />
            </NavLink>
          </li>
          <li
            className={
              classNames( { 'tab-two__active': this.isActive( '/coins' ) } )
            }
          >
            <NavLink
              to="/coins"
            >
              <SVG
                src={require( './add_coin.svg' )}
              />
            </NavLink>
          </li>
          <li
            className={
              classNames( { 'tab-three__active': this.isActive( '/settings' ) } )
            }
          >
            <NavLink
              to="/settings"
            >
              <SVG
                src={require( './settings.svg' )}
              />
            </NavLink>
          </li>
          <li
            className={
              classNames( { 'tab-four__active': this.isActive( '/about' ) } )
            }
          >
            <NavLink
              to="/about"
            >
              <SVG
                src={require( './info.svg' )}
              />
            </NavLink>
          </li>
          <hr />
        </ul>
      </nav >
    )
  }
}

export default withRouter( Header );

