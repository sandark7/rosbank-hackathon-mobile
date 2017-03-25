import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 0.09,
    paddingBottom: 5,
    paddingTop: 5,
    borderTopWidth: 0.5,
    borderStyle: 'solid',
    borderTopColor: '#858585',
    backgroundColor: 'white'
  },

  tabBarItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  tabBarIcon: {
    color: '#858585'
  },

  tabBarIconBadge: {
    width: 15,
    height: 15
  },

  tabBarIconBadgeText: {
    fontSize: 12,
    color: 'white'
  },

  tabBarText: {
    fontWeight: 'bold',
    fontSize: 9,
    padding: 0,
    margin: 0,
    color: '#858585'
  },

  tabBarContainer: {
    backgroundColor: 'white',
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
