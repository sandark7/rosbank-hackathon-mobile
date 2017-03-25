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
    {'name': 'Abigail', 'state': 'CA'},
    {'name': 'Abigail', 'state': 'CA'},
    {'name': 'Abigail', 'state': 'CA'}
  ]),
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to offerList
export const request = (state) => state.merge({ fetching: true })

// we've successfully logged in
export const success = (state, { offerList }) =>
  state.merge({ fetching: false, error: null, offerList })

// we've had a problem logging in
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OFFER_LIST_REQUEST]: request,
  [Types.OFFER_LIST_SUCCESS]: success,
  [Types.OFFER_LIST_FAILURE]: failure
})
