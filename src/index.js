import 'babel-polyfill'; // generators
import React from 'react';
import ReactDOM from 'react-dom';
import { render as renderReact } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducers';

let App = require( './components/app' ).default;

let store = createStore( reducer )

const render = ( Component ) => {
  const comp = <Provider store={store}><Component /></Provider>
  renderReact( comp, document.getElementById( 'root' ) );
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
