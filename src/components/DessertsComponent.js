import React, { Component } from 'react'
import donut from '../images/vvembie_donuts.jpg'
import waffle from '../images/vvembie_waffles_top.jpg'

export default class DessertsComponent extends Component {
  render() {
    return (
      <div className="column is-half is-vcentered has-text-centered">
        <div className="card card-border">
          <div className="card-image dessert-image-container">
            <figure className="image is-4by3 dessert-image">
              <img src={this.props.dessert.name === "Moldovan Waffles" ?
              waffle 
              :
              donut} alt="" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4 has-text-centered">{this.props.dessert.name}</p>
              </div>
            </div>
            <div className="content">
              {this.props.dessert.description}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
