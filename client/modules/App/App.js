import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Import Style
import styles from './App.css'

// Import Components
import Helmet from 'react-helmet'
import DevTools from './components/DevTools'
import Header from './components/Header/Header'
import CreatePinDropdown from './components/CreatePinDropdown/CreatePinDropdown'

import { requestGetUser } from './AppActions'
import { getUser } from './AppReducer'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      showCreatePinDropdown: false
    }
    this.toggleAddPinDropdown = this.toggleAddPinDropdown.bind(this)
  }


  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    this.props.dispatch(requestGetUser())
  }


  toggleAddPinDropdown(toggled = !this.state.showCreatePinDropdown) {
    this.setState({ showCreatePinDropdown: toggled })
  }


  // {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />} move this 3 spaces down into the first div to reactivate
  render() {
    return (
      <div>
        <div>
          <Helmet
            title="PIN IT"
            titleTemplate="%s"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            toggleAddPinDropdown={this.toggleAddPinDropdown}
            userID={this.props.user ? this.props.user._id : ''}
          />
          {
            this.state.showCreatePinDropdown
                ? <CreatePinDropdown toggleAddPinDropdown={this.toggleAddPinDropdown} />
                : null
          }
          <div className={styles.container}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user: getUser(state)
  }
}

export default connect(mapStateToProps)(App)
