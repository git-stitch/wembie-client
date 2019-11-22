import React, { Component } from 'react'

export default class Location extends Component {
  render() {
    return (
      <div className="column">
          <iframe className="ifrizzame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.4632480517653!2d-73.92470568459245!3d40.79581297932288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5fad0d08567%3A0x4ada181916f32de3!2sRandall&#39;s%20Island%20Park!5e0!3m2!1sen!2sus!4v1574441409772!5m2!1sen!2sus" 
					position="relative"
					frameBorder="0" 
					allowFullScreen
          title="Location">
				</iframe>
      </div>
    )
  }
}