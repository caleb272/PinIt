import React from 'react'

function LoggedIn(props, context) {
  function pins() {
    context.router.push('/')
  }


  function myPins() {
    context.router.push(`/user/${props.userID}`)
  }

  return (
    <ul className="right">
      <li>
        <a onClick={pins}>Pins</a>
      </li>
      <li>
        <a onClick={myPins}>My Pins</a>
      </li>
      <li
        onClick={() => props.toggleAddPinDropdown()}
      ><a>Add Pin<i className="material-icons right">arrow_drop_down</i></a></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  )
}

LoggedIn.contextTypes = {
  router: React.PropTypes.object.isRequired
}

LoggedIn.propTypes = {
  toggleAddPinDropdown: React.PropTypes.func.isRequired,
  userID: React.PropTypes.string
}

export default LoggedIn
