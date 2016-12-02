import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PinList from './components/PinList/PinList'

import { requestGetPins, requestUpdatePin } from './PinActions'
import { getPins, getUsersPins } from './PinReducer'
import { getUser } from '../App/AppReducer'

class Pin extends Component {
  constructor(props) {
    super(props)

    this.likePin = this.likePin.bind(this)
    this.deletePin = this.deletePin.bind(this)
  }


  componentDidMount() {
    this.props.dispatch(requestGetPins())
  }


  likePin(injectedPin) {
    if (!this.props.user) {
      return
    }
    const pin = injectedPin.pinDBObject
    const userID = this.props.user._id
    if (!hasUserLiked(pin, userID)) {
      pin.likes.push(userID)
    } else {
      pin.likes = pin.likes.filter(currentUserID => currentUserID !== userID)
    }
    this.props.dispatch(requestUpdatePin(injectedPin))


    function hasUserLiked(pin, userID) {
      return pin.likes.indexOf(userID) !== -1
    }
  }


  deletePin(pin) {
    console.log('deleting the pin: ', pin)
  }


  render() {
    return (
      <PinList
        pins={this.props.pins}
        likePin={this.likePin}
        deletePin={this.deletePin}
        userID={this.props.user ? this.props.user._id : ''}
      />
    )
  }
}

Pin.need = [
  () => requestGetPins()
]

Pin.propTypes = {
  pins: PropTypes.array.isRequired,
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
  const userRouteID = props.params.id
  const pins = userRouteID ? getUsersPins(state, userRouteID) : getPins(state)
  return {
    user: getUser(state),
    pins
  }
}

export default connect(mapStateToProps)(Pin)
