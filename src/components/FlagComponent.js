import React, { Component } from 'react'
import moldova from '../images/MoldovaFix.jpg'

export default class FlagComponent extends Component {
  render() {
    return (
      <div className="column is-half is-vcentered">
        <img src={this.props.country === "bashkir" ? 
          "https://i.ibb.co/0CJpwdX/Bashkiria.jpg"
          :
          moldova
        } alt={this.props.country}/>
      </div>
    )
  }
}
