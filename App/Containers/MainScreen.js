import React from 'react'
import offerListActions from '../Redux/OfferListRedux'
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

  componentWillMount () {
    this.props.fetchOfferList()
  }

  render () {
    const { offerCount } = this.props
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

const mapStateToProps = ({offerList}) => {
  return {
    offerCount: offerList.offerCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOfferList: () => dispatch(offerListActions.offerListRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
