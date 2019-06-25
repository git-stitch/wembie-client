import React, { Component } from 'react'

export default class Location extends Component {
  render() {
    return (
      <div className="column">
          <iframe className="ifrizzame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.591229336931!2d-73.8508249!3d40.7477746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77560c780fbedd10!2sQueens+Night+Market!5e0!3m2!1sen!2sus!4v1550640873496" 
					position="relative"
					frameBorder="0" 
					allowFullScreen
          title="Location">
				</iframe>
      </div>
    )
  }
}
