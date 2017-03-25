import React from 'react'
import {
  View,
  TouchableHighlight,
  Text
} from 'react-native'
import styles from './Styles/BottomBarMockStyle'
import { Actions } from 'react-native-router-flux'
import {Metrics} from '../Themes'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import I18n from 'react-native-i18n'
import IconBadge from 'react-native-icon-badge'

export default class BottomBarMock extends React.Component {

  renderOfferBtn () {
    const { offerCount } = this.props
    let offerIcon = (
      <View style={styles.tabBarItem}>
        <MaterialIcon
          name='local-offer'
          style={styles.tabBarIcon}
          size={Metrics.icons.medium}
        />
        <Text style={styles.tabBarText}>{I18n.t('offers')}</Text>
      </View>
    )
    if (offerCount) {
      return (
        <View>
          <IconBadge
            MainElement={offerIcon}
            BadgeElement={<Text style={styles.tabBarIconBadgeText}>{offerCount}</Text>}
            IconBadgeStyle={styles.tabBarIconBadge}
          />
        </View>
      )
    } else return offerIcon
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.tabBarContainer}>

          <View style={styles.tabBarItem}>
            <MaterialCommunityIcon
              name='wallet'
              style={styles.tabBarIcon}
              size={Metrics.icons.medium}
            />
            <Text style={styles.tabBarText}>{I18n.t('payments')}</Text>
          </View>

          <View style={styles.tabBarItem}>
            <MaterialCommunityIcon
              name='history'
              style={styles.tabBarIcon}
              size={Metrics.icons.medium}
            />
            <Text style={styles.tabBarText}>{I18n.t('history')}</Text>
          </View>

          <View style={styles.tabBarItem}>
            <MaterialCommunityIcon
              name='layers'
              style={styles.tabBarIcon}
              size={Metrics.icons.medium}
            />
            <Text style={styles.tabBarText}>{I18n.t('templates')}</Text>
          </View>

          <TouchableHighlight
            onPress={Actions.listviewScreen}
            underlayColor='white'
          >
            {this.renderOfferBtn()}
          </TouchableHighlight>

        </View>
      </View>
    )
  }
}
