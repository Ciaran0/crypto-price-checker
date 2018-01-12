// constants
const ADD_TRACKED_COIN = "ADD_TRACKED_COIN"
const REMOVE_TRACKED_COIN = "REMOVE_TRACKED_COIN"

// actions

export const addCoin = ( coin ) => ( { type: ADD_TRACKED_COIN, coin } );
export const removeCoin = ( coin ) => ( { type: REMOVE_TRACKED_COIN, coin } );

// reducer

//initial state
let initial = {
  coins: [{ name: 'Bitcoin', symbol: 'BTC' },
  { name: 'Ethereum', symbol: 'ETH' }]
};

const reducer = ( state = initial, action ) => {

  switch ( action.type ) {
    case ADD_TRACKED_COIN:
      return { ...state, coins: [...state.coins, action.coin] }
    case REMOVE_TRACKED_COIN:
      return { ...state, coins: state.coins.filter( coin => coin.name !== action.coin ) }
    default:
      return state;
  }
};

export default reducer;