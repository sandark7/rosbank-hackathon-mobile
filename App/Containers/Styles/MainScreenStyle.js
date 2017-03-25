import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexGrow: 1,
    height: Metrics.screenHeight - 50,
    backgroundColor: '#f0f0f0'
  }
})
