import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight - 10,
    backgroundColor: Colors.background
  },

  row: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: Colors.mainColor,
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    backgroundColor: Colors.headerBgColor,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },

  description: {
    fontSize: 12,
    color: Colors.mainColor
  },

  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginVertical: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
    marginBottom: Metrics.smallMargin
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
