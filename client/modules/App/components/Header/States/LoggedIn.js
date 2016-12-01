import React from 'react'

function LoggedIn(props) {
  return (
    <ul className="right">
      <li><a>Pins</a></li>
      <li><a>My Pins</a></li>
      <li
        onClick={() => props.toggleAddPinDropdown()}
      ><a>Add Pin<i className="material-icons right">arrow_drop_down</i></a></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  )
}

LoggedIn.propTypes = {
  toggleAddPinDropdown: React.PropTypes.func.isRequired
}

export default LoggedIn
