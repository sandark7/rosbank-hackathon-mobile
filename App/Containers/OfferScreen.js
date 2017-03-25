import React from 'react'
import I18n from 'react-native-i18n'
import {
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OfferScreenStyle'

class OfferScreen extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const {
      description,
      cashback,
      company_name: companyName,
      logo,
      name: title
    } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={{uri: logo}} style={styles.logo} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.companyName}>{companyName}</Text>
          </View>
          <View style={styles.cashbackContainer}>
            <Text style={styles.cashbackTitle}>{I18n.t('cashback')}</Text>
            <Text style={styles.cashbackValue}>{cashback}%</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>{I18n.t('descriptionTitle')}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen)
