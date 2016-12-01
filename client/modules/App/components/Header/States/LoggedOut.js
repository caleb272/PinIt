import React from 'react'

function LoggedOut(props, context) {
  return (
    <ul className="right">
      <li><a href="/login">Login</a></li>
    </ul>
  )
}

LoggedOut.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoggedOut
