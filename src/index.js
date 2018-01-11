import 'babel-polyfill'; // generators
import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/lib/storage'
import { render as renderReact } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers';

let App = require( './components/app' ).default;

const config = {
  key: 'root',
  storage,
}

const reducer = persistReducer( config, reducers )

function configureStore() {
  let store = createStore( reducer )
  let persistor = persistStore( store )
  return { persistor, store }
}


const { store, persistor } = configureStore()

const render = ( Component ) => {
  const comp =
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component />
      </PersistGate>
    </Provider>
  renderReact( comp, document.getElementById( 'root' ) );
};

render( App )

if ( module.hot ) {
  module.hot.accept( './components/app', function () {
    let newApp = require( './components/app' ).default;
    render( newApp );
  } );
}
