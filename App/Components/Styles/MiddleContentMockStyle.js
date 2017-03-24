import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  rb_middle_mock: {
    resizeMode: 'contain',
    width: Metrics.screenWidth,
    height: 2800
  }
})
