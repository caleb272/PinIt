import React from 'react'

// Import Style
import styles from './Header.css'

export function Header(props, context) {
  function goHome() {
    if (!context.router.isActive('')) {
      context.router.go('')
    }
  }

  return (
    <div className={`${styles.header} navbar-fixed`}>
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo left" onClick={goHome}>PIN IT</a>
          <ul className="right">
            <li><a>Pins</a></li>
            <li><a>My Pins</a></li>
            <li
              onClick={() => props.toggleAddPinDropdown()}
            ><a>Add Pin<i className="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

Header.contextTypes = {
  router: React.PropTypes.object,
}

Header.propTypes = {
  toggleAddPinDropdown: React.PropTypes.func.isRequired
}

export default Header
