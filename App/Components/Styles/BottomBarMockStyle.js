import { StyleSheet } from 'react-native'
import {Colors} from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 0.09,
    paddingBottom: 5,
    paddingTop: 5,
    borderTopWidth: 0.5,
    borderStyle: 'solid',
    borderTopColor: Colors.mainColor,
    backgroundColor: Colors.headerBgColor
  },

  tabBarItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  tabBarIcon: {
    color: Colors.mainColor
  },

  tabBarIconBadge: {
    width: 20,
    height: 20,
    backgroundColor: Colors.rbRed
  },

  tabBarIconBadgeText: {
    fontSize: 11,
    color: Colors.headerBgColor
  },

  tabBarText: {
    fontWeight: 'bold',
    fontSize: 9,
    padding: 0,
    margin: 0,
    color: Colors.mainColor
  },

  tabBarContainer: {
    backgroundColor: Colors.headerBgColor,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  rb_bottom_mock_img: {
    flex: 1,
    width: null,
    resizeMode: 'contain'
  }
})
