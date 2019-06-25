import React, { Component } from 'react'

export default class LocationTextComponent extends Component {
  render() {
    return (
      <div className="column">
        <div className="box has-text-centered location-text location-background">
					<div className="content is-medium is-white">
						<h1 className="fix-this">Location</h1>
						<p>Come visit us at the Queens night market this season.</p>
						<h1 className="fix-this">Time and Date</h1>
						<p>Every Saturday from 5pm - 12am</p>
					</div>
				</div>
      </div>
    )
  }
}
