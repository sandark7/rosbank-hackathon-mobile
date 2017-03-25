import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  offerListRequest: null,
  offerListSuccess: ['offerList'],
  offerListFailure: ['error'],
  logout: null
})

export const OfferListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  offerList: Immutable([
    {
      'id': 1,
      'name': 'Кофе Хауз',
      'logo': 'http://rsb-linuxvm-04.northeurope.cloudapp.azure.com/images/logo.png',
      'description': 'Получи кешбек при покупки второй чашки кофе',
      'user_id': 1,
      'is_push': 0,
      'push_text': 'Спецпредложение от Кофе Хауз',
      'cashback': '10',
      'created_at': '2017-03-25 12:33:09',
      'updated_at': '2017-03-25 12:33:09'
    },
    {
      'id': 2,
      'name': 'Кофе Хауз',
      'logo': 'http://rsb-linuxvm-04.northeurope.cloudapp.azure.com/images/logo.png',
      'description': 'Получи кешбек при покупки первой чашки кофе',
      'user_id': 1,
      'is_push': 1,
      'push_text': 'Спецпредложение от Кофе Хауз',
      'cashback': '10',
      'created_at': '2017-03-25 12:33:09',
      'updated_at': '2017-03-25 12:33:09'
    },
    {
      'id': 3,
      'name': 'Starbucks',
      'logo': 'http://rsb-linuxvm-04.northeurope.cloudapp.azure.com/images/starbucks.png',
      'description': 'Получи кешбек при покупки второй чашки кофе',
      'user_id': 2,
      'is_push': 0,
      'push_text': '',
      'cashback': '10',
      'created_at': '2017-03-25 12:33:09',
      'updated_at': '2017-03-25 12:33:09'
    }
  ]),
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to offerList
export const request = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, action) => {
  return state.merge({ fetching: false, error: null, offerList: action.offerList })
}

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OFFER_LIST_REQUEST]: request,
  [Types.OFFER_LIST_SUCCESS]: success,
  [Types.OFFER_LIST_FAILURE]: failure
})
