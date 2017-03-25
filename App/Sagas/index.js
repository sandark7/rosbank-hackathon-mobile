import { takeLatest } from 'redux-saga/effects'
import { OfferListTypes } from '../Redux/OfferListRedux'
import { offerList } from './OfferListSagas'

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(OfferListTypes.OFFER_LIST_REQUEST, offerList)
  ]
}
