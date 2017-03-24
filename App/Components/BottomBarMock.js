import React from 'react'
import {
  Image
} from 'react-native'
import styles from './Styles/BottomBarMockStyle'
import {Images} from '../Themes'
export default class BottomBarMock extends React.Component {

  render () {
    return (
      <Image
        source={Images.rb_bottom_mock}
        style={styles.rb_bottom_mock}
        />
    )
  }
}
