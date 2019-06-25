import React, { Component } from 'react'
import LogoComponent from '../components/LogoComponent';

export default class LogoContainer extends Component {
  render() {
    return (
      <div className="column is-half">
        <LogoComponent />
      </div>
    )
  }
}
