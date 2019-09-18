import React, { Component } from 'react'
import insta from '../images/pinkstagram.jpg'
import twitta from '../images/twittapic.jpg'
import facebook from '../images/pinkbook.jpg'

export default class Footer extends Component {
  render() {
    return (
      <div className="section">
        <footer className="footer">
          <div className="content has-text-centered is-large">
            <h1>
              <span className="color-blue">C</span>
              <span className="color-pink">o</span>
              <span className="color-blue">n</span>
              <span className="color-pink">t</span>
              <span className="color-blue">a</span>
              <span className="color-pink">c</span>
              <span className="color-blue">t</span> <span className="color-pink">U</span>
              <span className="color-blue">s</span>
              </h1>
            <p>
              <span className="color-blue">i</span>
              <span className="color-pink">n</span>
              <span className="color-blue">f</span>
              <span className="color-pink">o</span>
              <span className="color-blue">@</span>
              <span className="color-pink">w</span>
              <span className="color-blue">e</span>
              <span className="color-pink">m</span>
              <span className="color-blue">b</span>
              <span className="color-pink">i</span>
              <span className="color-blue">e</span>
              <span className="color-pink">.</span>
              <span className="color-blue">c</span>
              <span className="color-pink">o</span>
              <span className="color-blue">m</span>
              </p>
              <p className="has-text-centered image is-128x128 is-inline-flex">
                <span>
                    <a href="https://www.instagram.com/vvembie/"><img  src={insta} alt="instagram" /></a>
                </span>  <span>
                    <img  src={twitta} alt="twitter" />
                </span>  <span>
                    <img  src={facebook} alt="facebook" />
                </span>
              </p>
          </div>
        </footer>
      </div>
    )
  }
}
