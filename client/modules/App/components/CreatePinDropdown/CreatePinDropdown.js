import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from './CreatePinDropdown.css'

import { requestCreatePin } from '../../../Pin/PinActions'

class CreatePinDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'image-field': '',
      'description-field': ''
    }

    this.onFormKeyPressed = this.onFormKeyPressed.bind(this)
    this.createPin = this.createPin.bind(this)
  }


  onFormKeyPressed(e) {
    if (e.key === 'Enter') {
      this.createPin()
    } else {
      this.setState({ [e.target.id]: e.target.value })
    }
  }


  createPin() {
    const image = this.state['image-field']
    const description = this.state['description-field']
    if (image.length > 0 && description.length > 0) {
      this.props.dispatch(requestCreatePin(image, description))
      this.props.toggleAddPinDropdown()
    }
  }


  render() {
    return (
      <div className={`${styles.dropdown} red lighten-2`}>
        <h5 className={`${styles.left} left`}>Add Pin</h5>

        <div className="row">
          <form className="col s12" onKeyDown={this.onFormKeyPressed} onChange={this.onFormKeyPressed}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="image-field"
                  type="url"
                  value={this.state['image-field']}
                />
                <label htmlFor="image-field">Image URL</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="description-field"
                  type="text"
                  value={this.state['description-field']}
                />
                <label htmlFor="description-field">Pin Description</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

CreatePinDropdown.propTypes = {
  toggleAddPinDropdown: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(CreatePinDropdown)
