import { put } from 'redux-saga/effects'
import offerListActions from '../Redux/OfferListRedux'

export function * offerList () {
  // api req here
  yield put(offerListActions.offerListSuccess([]))
}
