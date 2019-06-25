import React, { Component } from 'react'
import Slider from "react-slick";
import SliderImage from './SliderImage';
import ArrowComponent from './ArrowComponent'


export default class SimpleSlider extends Component {
  render() {
    let settings = {
        // className: "center",
        // centerMode: true,
        // nextArrow: <ArrowComponent direction={"right"}/>, 
        // prevArrow: <ArrowComponent direction={"left"}/>,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    return (
      <Slider {...settings} >
        {photoArr.map((image, idx) => {
           return <SliderImage image={image} key={idx}/>
         })
        }
      </Slider>
    )
  }
}

let photoArr = [
	`https://instagram.com/p/Bo17O2pFYf1/media/?size=l`,
	`https://instagram.com/p/BpXI3N7h4WQ/media/?size=l`,
	`https://instagram.com/p/Bl29CvAh21k/media/?size=l`,
	`https://instagram.com/p/Bk5JLJTHQHz/media/?size=l`,
	`https://instagram.com/p/BjjSVQ7jte4/media/?size=l`,
	`https://instagram.com/p/BpcRdthhCmR/media/?size=l`,
	`https://instagram.com/p/BlJBQgvHdMx/media/?size=l`,
	`https://instagram.com/p/BoKDd8PHkvM/media/?size=l`
]

let wembie = 'https://www.instagram.com/vvembie/';
