import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },

  itemLogo: {
    flex: 1,
    resizeMode: 'contain',
    width: 40
  },

  rowColLeft2: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  rowColLeft: {
    flex: 0.5,
    alignItems: 'flex-end'
  },

  rowColMain: {
    flex: 8,
    flexDirection: 'column'
  },

  newItemCircle: {
    color: Colors.rbRed,
    marginTop: 3
  },

  rowColRight: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  shevron: {
    color: Colors.mainColor
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
  }
})
