import React from 'react'
import {
  View,
  RefreshControl,
  ListView
} from 'react-native'
import { connect } from 'react-redux'

// For empty lists
import AlertMessage from '../Components/AlertMessage'
import OfferListItem from '../Containers/OfferListItem'

// Styles
import styles from './Styles/ListviewExampleStyles'
import offerListActions from '../Redux/OfferListRedux'

class ListviewExample extends React.Component {

  constructor (props) {
    super(props)
    const { offerList } = props.offerList
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    this.state = {
      dataSource: ds.cloneWithRows(offerList)
    }
  }

  renderRow (rowData) {
    return (
      <OfferListItem {...rowData} />
    )
  }

  componentWillReceiveProps (newProps) {
    if (newProps.offerList && newProps.offerList.offerList) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.offerList.offerList)
      })
    }
  }

  onRefresh = () => {
    this.props.fetchOfferList()
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        { !this.noRowData() &&
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          pageSize={15}
        />
        }
      </View>
    )
  }
}

const mapStateToProps = ({ offerList }) => {
  return {
    // ...redux state to props here
    offerList,
    refreshing: offerList.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // ...redux state to props here
    fetchOfferList: () => dispatch(offerListActions.offerListRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListviewExample)
