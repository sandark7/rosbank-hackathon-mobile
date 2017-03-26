import { put } from 'redux-saga/effects'
import {Actions as NavigationActions} from 'react-native-router-flux'
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

export function * offerListNavigate ({offer}) {
  NavigationActions.offerScreen(offer)
}
