import React from 'react'
import LoggedOut from './States/LoggedOut'
import LoggedIn from './States/LoggedIn'

// Import Style
import styles from './Header.css'

export function Header(props, context) {
  function goHome() {
    if (!context.router.isActive('')) {
      context.router.go('')
    }
  }

  return (
    <div className={`${styles.header}`}>
      <nav>
        <div className="nav-wrapper z-depth-2">
          <a className="brand-logo left" onClick={goHome}>PIN IT</a>
          {
            props.isLoggedIn || true
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

// <div className={`${styles.header} navbar-fixed`}>
//   <nav>
//     <div className="nav-wrapper">
//       <a className="brand-logo left" onClick={goHome}>PIN IT</a>
//       <ul className="right">
//         <li><a>Pins</a></li>
//         <li><a>My Pins</a></li>
//         <li
//           onClick={() => props.toggleAddPinDropdown()}
//         ><a>Add Pin<i className="material-icons right">arrow_drop_down</i></a></li>
//       </ul>
//     </div>
//   </nav>
// </div>
