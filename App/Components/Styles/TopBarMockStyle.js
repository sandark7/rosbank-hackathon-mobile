import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 0.09,
    paddingTop: Metrics.titlePadding
  },
  rb_top_mock: {
    flex: 1,
    width: null,
    resizeMode: 'contain'
  }
})
