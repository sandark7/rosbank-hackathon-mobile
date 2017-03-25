import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    padding: 5,
    backgroundColor: Colors.background
  },

  card: {
    flex: 1,
    backgroundColor: Colors.headerBgColor,
    padding: 10,
    borderWidth: 0.5,
    borderColor: Colors.mainColor,
    borderStyle: 'solid'
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },

  logo: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 15
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },

  companyName: {
    fontSize: 16,
    color: Colors.mainColor
  },

  cashbackContainer: {
    flex: 1,
    marginBottom: 15,
    alignItems: 'center'
  },

  cashbackTitle: {
    fontSize: 25,
    fontWeight: '200',
    color: 'black'
  },

  cashbackValue: {
    fontSize: 50,
    fontWeight: '500',
    color: 'black'
  },

  descriptionContainer: {
    flex: 1,
    marginBottom: 10
  },

  descriptionTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 5,
    color: 'black'
  },

  description: {
    color: 'black'
  }

})
