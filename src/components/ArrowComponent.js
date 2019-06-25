import React from 'react'

const ArrowComponent = (props) => {
  return (
    <i className={props.direction === "left" ? 
    "fas fa-arrow-alt-circle-left arrow-comp" 
    : 
    "fas fa-arrow-alt-circle-right arrow-comp"   
    }></i>
  )
}
export default ArrowComponent