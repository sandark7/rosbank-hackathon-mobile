import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  rb_top_mock: {
    width: Metrics.screenWidth,
    height: 50
  }
})
