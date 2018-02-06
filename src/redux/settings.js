export const Fiat = {
  EUR: 'EUR',
  USD: 'USD'
}

// constants
const SET_FIAT = "SET_FIAT"

// actions
export const setFiat = ( fiat ) => ( { type: SET_FIAT, fiat } );

// reducer

//initial state
let initial = {
  fiat: Fiat.EUR
};

export const settingsReducer = ( state = initial, action ) => {

  switch ( action.type ) {
    case SET_FIAT: {
      console.log( 'hello', action )
      return { ...state, fiat: action.fiat }

    }
    default:
      return state;
  }
};
