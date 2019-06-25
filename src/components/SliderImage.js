import React from 'react'

const SliderImage = (props) =>{
  return (
    <div className="image is-square">
      <a href="https://www.instagram.com/vvembie/"><img src={props.image} alt="" className="slider-image"/></a>
    </div>
  )
}

export default SliderImage