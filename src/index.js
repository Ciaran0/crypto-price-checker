import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/lib/storage'

import reducers from './redux/reducers';
import App from './components/app';

const persistConfig = {
  key: 'root',
  storage,
}

console.log( 'hello', App )

const reducer = persistReducer( persistConfig, reducers )

const store = createStore( reducer )
const persistor = persistStore( store )

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById( 'root' )
)
