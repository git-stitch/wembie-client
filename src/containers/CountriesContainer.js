import React, { Component } from 'react'
import CountryComponent from '../components/CountryComponent'
import FlagComponent from '../components/FlagComponent'

export default class CountriesContainer extends Component {
  render() {
    return (
      <div className="section">
        <div className="tabs is-boxed">
          <ul>
            <li className={this.props.bashkir ? "is-active" : ""} onClick={()=>this.props.setActiveCountry("bashkir")}>
              <a>
                <span className="icon is-small"><i className="far fa-flag" aria-hidden="true"></i></span>
                <span>Bashkir</span>
              </a>
            </li>
            <li className={this.props.moldova ? "is-active" : ""} onClick={()=>this.props.setActiveCountry("moldova")}>
              <a>
                <span className="icon is-small"><i className="far fa-flag" aria-hidden="true"></i></span>
                <span>Moldova</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="columns">
          {
            this.props.bashkir ?
            <>
              <FlagComponent country={"bashkir"}/>
              <CountryComponent country={"bashkir"} location={this.props.b}/>
            </>
            : 
            <>
              <FlagComponent country={"moldova"}/>
              <CountryComponent country={"moldova"} location={this.props.m}/>
            </>
           }
          </div>
        </div>
      </div>
    )
  }
}
