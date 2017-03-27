import React from 'react'
import PushNotification from 'react-native-push-notification'
import offerListActions from '../Redux/OfferListRedux'
import {
  View,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'

import TopBarMock from '../Components/TopBarMock'
import BottomBarMock from '../Components/BottomBarMock'
import MiddleContentMock from '../Components/MiddleContentMock'

// Styles
import styles from './Styles/MainScreenStyle'

class Main extends React.Component {

  componentWillMount () {
    this.props.fetchOfferList()
    PushNotification.configure({
      onRegister: this.onRegister,
      onNotification: this.onNotification,
      senderID: '142726714221',
      popInitialNotification: false
    })
  }

  onRegister = ({token}) => {
    console.log('TOKEN:', token)
    fetch('http://rsb-linuxvm-04.northeurope.cloudapp.azure.com/api/registerDevice/' + token)
  }

  onNotification = notification => {
    console.log('NOTIFICATION:', notification)
    this.props.fetchOfferList()
    if (notification.foreground) return

    setTimeout(() => {
      let id = parseInt(notification.offerId, 10)
      let offer = this.props.offerList.offerList.find(v => v.id === id)
      this.props.navigateOfferScreen(offer)
    }, 500)
  }

  render () {
    const { offerCount } = this.props
    return (
      <View style={styles.container}>
        <TopBarMock />
        <ScrollView style={styles.container}>
          <MiddleContentMock />
        </ScrollView>
        <BottomBarMock offerCount={offerCount} />
      </View>
    )
  }

}

const mapStateToProps = ({offerList}) => {
  return {
    offerCount: offerList.offerCount,
    offerList
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    fetchOfferList: () => dispatch(offerListActions.offerListRequest()),
    navigateOfferScreen: (offer) => dispatch(offerListActions.offerListNavigate(offer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
