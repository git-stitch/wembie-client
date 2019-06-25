import React, { Component } from 'react'

export default class FloatingTextComponent extends Component {
  render() {
    return (
      <div className="columns is-centered text-position">
        {
          this.props.marketing ?
            <div className="column is-vcentered is-one-quarter">
              <p className="title title-text is-1 center-column">Food From Where?</p> 
            </div>
          :
          <div className="column is-vcentered is-one-quarter">
            <p className="title title-text is-1 center-column">Treats That Make You Smile</p> 
          </div>
        }
      </div>
    )
  }
}
