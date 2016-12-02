import React, { PropTypes } from 'react'

function Pin(props, context) {
  const hasUserLiked = (props.pin.pinDBObject.likes.indexOf(props.userID) !== -1)
  const showDeleteButton = Boolean(props.deletePin && props.pin.pinDBObject.creator === props.userID)
  const likeButton = (
    <i
      className="material-icons right"
      style={hasUserLiked ? { color: '#ff80ab' } : {}}
      onClick={like}
    >favorite</i>
  )
  const deleteButton = (
    <i
      className="material-icons right"
      style={{ color: '#ff1744' }}
      onClick={deletePin}
    >delete</i>
  )

  function like() {
    props.likePin(props.pin)
  }


  function deletePin() {
    props.deletePin(props.pin)
  }


  function usersPins() {
    context.router.push(`/user/${props.pin.pinDBObject.creator}`)
  }

  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img className="responsive-img" src={props.pin.pinDBObject.image} alt="the pin" />
        </div>
        <div className="card-content">
          <p className="row">
            <img
              src={props.pin.creatorsProfilePic}
              alt="user"
              className="circle responsive-img col s2"
              onClick={usersPins}
            />
            <span className="col s10">
              {props.pin.pinDBObject.description}
              <span className="badge">
                {props.pin.pinDBObject.likes.length}
                {showDeleteButton ? deleteButton : likeButton}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

Pin.contextTypes = {
  router: PropTypes.object.isRequired
}

Pin.propTypes = {
  pin: PropTypes.object.isRequired,
  likePin: PropTypes.func.isRequired,
  deletePin: PropTypes.func,
  userID: PropTypes.string
}

export default Pin
