import React from 'react'
import {
  View,
  Image
} from 'react-native'
import styles from './Styles/MiddleContentMockStyle'
import {Images} from '../Themes'
export default class MiddleContentMock extends React.Component {

  onLayout = (e) => {
    if (this.state && this.state.imageSize) { return }
    let imageOrig = {width: 720, height: 5188}
    const { width } = e.nativeEvent.layout
    let imageHeight = (width * imageOrig.height) / imageOrig.width
    this.setState({
      imageSize: {
        height: imageHeight,
        width: null,
        resizeMode: 'contain'
      }
    })
  }

  render () {
    let imageSize = this.state ? this.state.imageSize : {width: null, height: null}
    return (
      <View style={styles.container}>
        <Image
          onLayout={this.onLayout}
          source={Images.rb_middle_mock}
          style={imageSize}
        />
      </View>
    )
  }
}
