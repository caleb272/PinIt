import React, { PropTypes } from 'react'
import Pin from '../Pin/PinListItem'

function PinList(props, context) {
  return (
    <div className="row">
      {props.pins.map((pin) =>
        <Pin
          pin={pin}
          userID={props.userID}
          likePin={props.likePin}
          deletePin={props.deletePin}
          key={pin.pinDBObject._id}
        />
      )}
    </div>
  )
}

PinList.contextTypes = {
  router: PropTypes.object.isRequired
}

PinList.propTypes = {
  pins: PropTypes.array.isRequired,
  likePin: PropTypes.func.isRequired,
  deletePin: PropTypes.func.isRequired,
  userID: PropTypes.string
}

export default PinList
