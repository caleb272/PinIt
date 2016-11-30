import React, { Component } from 'react'

import styles from './CreatePinDropdown.css'

class CreatePinDropdown extends Component {
  render() {
    // teal lighten-2
    return (
      <div className={`${styles.dropdown} red lighten-2`}>
        <h5 className="center">Add Pin</h5>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="image" type="url" />
                <label htmlFor="image">Image URL</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="description" type="text" className="" />
                <label htmlFor="description">Pin Description</label>
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
