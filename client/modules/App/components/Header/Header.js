import React from 'react'

// Import Style
import styles from './Header.css'

// this is how you tell if the home page is active
// {
//   context.router.isActive('/', true)
//     ? <p>fuck</p>
//     : null
// }

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">PIN IT</a>
        </div>
      </nav>
    </div>
  )
}

Header.contextTypes = {
  router: React.PropTypes.object,
}

export default Header
