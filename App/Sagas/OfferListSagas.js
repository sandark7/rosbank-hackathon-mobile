import { put } from 'redux-saga/effects'
import offerListActions from '../Redux/OfferListRedux'

export function * offerList () {
  let data

  try {
    data = yield fetch('http://rsb-linuxvm-04.northeurope.cloudapp.azure.com/api/offers/123/')
    data = yield data.json()
  } catch (e) {
    yield put(offerListActions.offerListFailure(e))
  }

  if (data) {
    yield put(offerListActions.offerListSuccess(data))
  }
}
