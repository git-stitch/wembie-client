import React, { Component } from 'react'
import '../App.sass'
import FloatingTextComponent from '../components/FloatingTextComponent'

export default class FoodImgContainer extends Component {
  render() {
    return (
      <div className="section"> 
        <div className="container food">
            <FloatingTextComponent marketing={false}/>
        </div>
      </div>
    )
  }
}