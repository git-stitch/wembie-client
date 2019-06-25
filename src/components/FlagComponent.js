import React, { Component } from 'react'

export default class FlagComponent extends Component {
  render() {
    return (
      <div className="column is-half is-vcentered">
        <img src={this.props.country === "bashkir" ? 
          "https://i.ibb.co/0CJpwdX/Bashkiria.jpg"
          :
          "https://i.ibb.co/MZZmg5F/Moldova.jpg"
        } alt={this.props.country}/>
      </div>
    )
  }
}
