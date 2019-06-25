import React, { Component } from 'react'
import LocationTextComponent from '../components/LocationTextComponent';
import Location from '../components/Location'

export default class LocationContainer extends Component {
  render() {
    return (
      <div className="section">
        <div className="columns">
          <LocationTextComponent />
          <Location />
        </div>
      </div>
    )
  }
}
