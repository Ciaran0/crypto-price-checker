
import { combineReducers } from 'redux'
import { settingsReducer } from './settings'
import { addCoinReducer } from './addCoin'

const reducers = combineReducers( { coins: addCoinReducer, settings: settingsReducer } )

export default reducers;