import React from 'react'
import { View,
  ScrollView
} from 'react-native'
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
    const { offerList } = this.props
    let offerCount = 0

    if (offerList && offerList.offerList) {
      offerCount = this.props.offerList.offerList.length
    }

    return (
      <View style={styles.container}>
        <TopBarMock />
        <ScrollView style={styles.container}>
          <MiddleContentMock />
        </ScrollView>
        <BottomBarMock offerCount={offerCount} />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    offerList: state.offerList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
