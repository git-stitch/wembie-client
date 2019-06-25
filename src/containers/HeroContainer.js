import React, { Component } from 'react'
import AboutContainer from './AboutContainer'
import LogoContainer from './LogoContainer';

export default class HeroContainer extends Component {
  render() {
    return (
      <div className="section">
        <div className="columns">
          <LogoContainer />
          <AboutContainer />
        </div>
      </div>
    )
  }
}
