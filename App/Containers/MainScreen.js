import React from 'react'
import { View,
  ScrollView,
  KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import TopBarMock from '../Components/TopBarMock'
import BottomBarMock from '../Components/BottomBarMock'
import MiddleContentMock from '../Components/MiddleContentMock'

// Styles
import styles from './Styles/MainScreenStyle'

class Main extends React.Component {

  render () {
    return (
      <View>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <TopBarMock />
            <MiddleContentMock />
          </KeyboardAvoidingView>
        </ScrollView>
        <BottomBarMock />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)