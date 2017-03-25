import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import ListviewExample from '../Containers/ListviewExample'
import OfferScreen from '../Containers/OfferScreen'
import MainScreen from '../Containers/MainScreen'
import I18n from 'react-native-i18n'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='mainScreen' component={MainScreen} title='' hideNavBar />
            <Scene key='listviewScreen' component={ListviewExample} title={I18n.t('offerListTitle')} hideNavBar={false} />
            <Scene key='offerScreen' component={OfferScreen} title={I18n.t('offerListTitle')} hideNavBar={false} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
