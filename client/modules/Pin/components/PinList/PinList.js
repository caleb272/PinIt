import React, { PropTypes } from 'react'
import Pin from '../Pin/PinListItem'

function PinList(props) {
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

PinList.propTypes = {
  pins: PropTypes.array.isRequired,
  likePin: PropTypes.func.isRequired,
  deletePin: PropTypes.func.isRequired,
  userID: PropTypes.string
}

export default PinList
