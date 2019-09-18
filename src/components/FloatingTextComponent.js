import React, { Component } from 'react'

export default class FloatingTextComponent extends Component {
  render() {
    return (
      <div className="columns is-centered text-position">
        {
          this.props.marketing ?
            <div className="column is-vcentered is-half">
              <p className="title title-text is-size-1 center-column">
                <span className="color-blue">F</span>
                <span className="color-pink">o</span>
                <span className="color-blue">o</span>
                <span className="color-pink">d</span> <span className="color-blue">F</span>
                <span className="color-pink">r</span>
                <span className="color-blue">o</span>
                <span className="color-pink">m</span> <span className="color-blue">W</span>
                <span className="color-pink">h</span>
                <span className="color-blue">e</span>
                <span className="color-pink">r</span>
                <span className="color-blue">e</span>
                <span className="color-pink">?</span>
              </p> 
            </div>
          :
          <div className="column is-vcentered is-half">
            <p className="title title-text is-size-1 center-column">
              <span className="color-blue">T</span>
              <span className="color-pink">r</span>
              <span className="color-blue">e</span>
              <span className="color-pink">a</span>
              <span className="color-blue">t</span>
              <span className="color-pink">s</span> <span className="color-blue">T</span>
              <span className="color-pink">h</span>
              <span className="color-blue">a</span>
              <span className="color-pink">t</span> <span className="color-blue">M</span>
              <span className="color-pink">a</span>
              <span className="color-blue">k</span>
              <span className="color-pink">e</span> <span className="color-blue">Y</span>
              <span className="color-pink">o</span>
              <span className="color-blue">u</span> <span className="color-pink">S</span>
              <span className="color-blue">m</span>
              <span className="color-pink">i</span>
              <span className="color-blue">l</span>
              <span className="color-pink">e</span>
            </p> 
          </div>
        }
      </div>
    )
  }
}
