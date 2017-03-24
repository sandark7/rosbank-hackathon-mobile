import React from 'react'
import {
  View,
  Image
} from 'react-native'
import styles from './Styles/MiddleContentMockStyle'
import {Images} from '../Themes'
export default class MiddleContentMock extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={Images.rb_middle_mock}
          style={styles.rb_middle_mock}
        />
      </View>
    )
  }
}
