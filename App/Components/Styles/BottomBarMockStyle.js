import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  rb_bottom_mock: {
    width: Metrics.screenWidth,
    height: 60,
    position: 'absolute',
    top: Metrics.screenHeight - 50
  }
})
