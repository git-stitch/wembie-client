import React from 'react'
import logo from '../images/newCat.jpg'

const LogoComponent = () => {
  return (
    <figure className="image is-5x4">
      <img  src={logo} alt="" />
    </figure>
  )
}

export default LogoComponent