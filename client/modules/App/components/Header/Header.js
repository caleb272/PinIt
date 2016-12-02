import React from 'react'
import LoggedOut from './States/LoggedOut'
import LoggedIn from './States/LoggedIn'

// Import Style
import styles from './Header.css'

export function Header(props, context) {
  function goHome() {
    if (!context.router.isActive('/', true)) {
      context.router.push('/')
    }
  }

  return (
    <div className={`${styles.header}`}>
      <nav>
        <div className="nav-wrapper z-depth-2">
          <a className="brand-logo left" onClick={goHome}>PIN IT</a>
          {
            props.isLoggedIn
                ? <LoggedIn toggleAddPinDropdown={props.toggleAddPinDropdown} />
                : <LoggedOut />
          }
        </div>
      </nav>
    </div>
  )
}

Header.contextTypes = {
  router: React.PropTypes.object,
}

Header.propTypes = {
  toggleAddPinDropdown: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired
}

export default Header
