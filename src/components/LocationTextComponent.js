import React, { Component } from 'react'

export default class LocationTextComponent extends Component {
  render() {
    return (
      <div className="column">
        <div className="box has-text-centered location-text location-background">
					<div className="content is-medium is-white">
						<h1 className="fix-this">
              <span className="color-blue">L</span>
              <span className="color-pink">o</span>
              <span className="color-blue">c</span>
              <span className="color-pink">a</span>
              <span className="color-blue">t</span>
              <span className="color-pink">i</span>
              <span className="color-blue">o</span>
              <span className="color-pink">n</span>
            </h1>
						<p>Come visit us at the Queens night market this season.</p>
						<h1 className="fix-this">
            <span className="color-blue">T</span>
            <span className="color-pink">i</span>
            <span className="color-blue">m</span>
            <span className="color-pink">e</span> <span className="color-blue">A</span>
            <span className="color-pink">n</span>
            <span className="color-blue">d</span> <span className="color-pink">D</span>
            <span className="color-blue">a</span>
            <span className="color-pink">t</span>
            <span className="color-blue">e</span>
              </h1>
						<p>April - October, Saturday's 5pm - 12am</p>
					</div>
				</div>
      </div>
    )
  }
}
