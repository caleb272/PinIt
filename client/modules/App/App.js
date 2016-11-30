import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      addPinDropdownToggled: false
    }
    this.toggleAddPinDropdown = this.toggleAddPinDropdown.bind(this)
  }


  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }


  toggleAddPinDropdown(toggled = !this.state.addPinDropdownToggled) {
    this.setState({ addPinDropdownToggled: toggled })
  }


  // {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />} move this 3 spaces down into the first div to reactivate
  render() {
    return (
      <div>
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
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
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(App)
