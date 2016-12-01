import React, { Component } from 'react'

import styles from './CreatePinDropdown.css'

class CreatePinDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'image-field': '',
      'description-field': ''
    }

    this.onTextFieldChanged = this.onTextFieldChanged.bind(this)
  }


  onTextFieldChanged(e) {
    this.setState({ [e.target.id]: e.target.value })
  }


  render() {
    return (
      <div className={`${styles.dropdown} red lighten-2`}>
        <h5 className={`${styles.left} left`}>Add Pin</h5>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="image-field"
                  type="url"
                  onChange={this.onTextFieldChanged}
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
                  onChange={this.onTextFieldChanged}
                  onKeyDown={() => console.log('enter bitch')}
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

CreatePinDropdown.propTypes = {}

export default CreatePinDropdown
