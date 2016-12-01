import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PinList from './components/PinList/PinList'

import { requestGetPins } from './PinActions'
import { getPins } from './PinReducer'

class Pin extends Component {
  componentDidMount() {
    this.props.dispatch(requestGetPins())
  }


  render() {
    return (
      <PinList
        pins={this.props.pins}
      />
    )
  }
}

Pin.need = [
  () => requestGetPins()
]

Pin.propTypes = {
  pins: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    pins: getPins(state)
  }
}

export default connect(mapStateToProps)(Pin)
