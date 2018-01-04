import 'babel-polyfill'; // generators
import React from 'react';
import ReactDOM from 'react-dom';

import { render as renderReact } from 'react-dom';

let App = require( './components/app' ).default;
const render = ( Component ) => {
  renderReact( <Component />, document.getElementById( 'root' ) );
};

render( App )

if ( module.hot ) {
  module.hot.accept( './components/app', function () {
    console.log( 'hh1' )
    let newApp = require( './components/app' ).default;
    render( newApp );
  } );
}

// ReactDOM.render( <App />, document.getElementById( 'root' ) );