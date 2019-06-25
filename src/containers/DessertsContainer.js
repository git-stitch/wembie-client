import React, { Component } from 'react'
import DessertsComponent from '../components/DessertsComponent'

export default class DessertsContainer extends Component {
  render() {
    return (
      <div className="section">
        <div className="columns">
          {
            this.props.desserts.map((dessert, idx) => {
              return <DessertsComponent dessert={dessert} key={idx}/>
            })
          }
        </div>
      </div>
    )
  }
}
