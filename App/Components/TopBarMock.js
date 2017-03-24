import React from 'react'
import {
  Image,
  View
} from 'react-native'
import styles from './Styles/TopBarMockStyle'
import {Images} from '../Themes'
export default class TopBarMock extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={Images.rb_top_mock}
          style={styles.rb_top_mock}
        />
      </View>
    )
  }
}
