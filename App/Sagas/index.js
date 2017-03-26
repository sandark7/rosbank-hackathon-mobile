import { takeLatest } from 'redux-saga/effects'
import { OfferListTypes } from '../Redux/OfferListRedux'
import { offerList, offerListNavigate } from './OfferListSagas'

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(OfferListTypes.OFFER_LIST_REQUEST, offerList),
    takeLatest(OfferListTypes.OFFER_LIST_NAVIGATE, offerListNavigate)
  ]
}
