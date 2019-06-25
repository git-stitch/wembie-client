import React, { Component } from 'react'

export default class CountryComponent extends Component {
  render() {
    return (
      <div className="column is-half is-vcentered">
        <div className="content has-text-centered"> 
          <p className="title is-1">{this.props.location.name}</p>
          <article>{this.props.location.bio}</article>
        </div>
      </div>
    )
  }
}
