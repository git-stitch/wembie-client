import React, { Component } from 'react'
import '../App.sass'
import FloatingTextComponent from '../components/FloatingTextComponent'

export default class MarketImgContainer extends Component {
  render() {
    return (
      <div className="section"> 
        <div className="container market">
            <FloatingTextComponent marketing={true}/>
        </div>
      </div>
    )
  }
}
