import React, { PropTypes } from 'react'
import Pin from '../Pin/Pin'
// import Masonry from 'react-masonry-component'

function PinList(props) {
  return (
    <div className="row">
      {props.pins.map((pin, index) =>
        <Pin
          {...pin}
          key={`${pin.image}${pin.description}${index}`}
        />
      )}
    </div>
  )
}

PinList.propTypes = {
  pins: PropTypes.array.isRequired
}

export default PinList
