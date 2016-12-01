import React, { PropTypes } from 'react'

function Pin(props, context) {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="the pin" />
        </div>
        <div className="card-content">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

Pin.dispatchTypes = {
  router: PropTypes.object.isRequired
}

Pin.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Pin
