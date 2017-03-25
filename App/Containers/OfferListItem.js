import React from 'react'
import {Actions} from 'react-native-router-flux'
import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import FAIcon from 'react-native-vector-icons/FontAwesome'
// Add Actions - replace 'Your' with whatever your reducer is called :)

import {Metrics} from '../Themes'
// Styles
import styles from './Styles/OfferListItemStyle'

class OfferListItem extends React.Component {

  render () {
    const {
      name: title,
      logo,
      description
    } = this.props
    console.log(this.props)
    return (
      <TouchableOpacity
        onPress={() => Actions.offerScreen(this.props)}
      >
        <View style={styles.row}>
          <View style={styles.rowColLeft}>
            <FAIcon name='circle' size={Metrics.icons.suretiny} style={styles.newItemCircle} />
          </View>
          <View style={styles.rowColLeft2}>
            <Image source={{uri: logo}} style={styles.itemLogo} />
          </View>
          <View style={styles.rowColMain}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.rowColRight}>
            <Icon name='chevron-small-right' size={Metrics.icons.small} style={styles.shevron} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default OfferListItem
