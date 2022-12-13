import React from 'react'
import Slider from 'react-slick'

export default function Gallery({sliderImage, settings}) {
 
  return (
    <Slider {...settings}>
     { sliderImage.map((item, i)=> { 
               return ( 
             <div key={(i)}>
                 <div  className="slider-image">
                <div className="slider-imagePhoto"><img src={item.img} alt="фото"/></div>
                <div className="slider-imageName">{item.name}</div>
                <div className="slider-imageText">{item.text}</div>
              </div>
             </div>
                )})  
            }
        </Slider>
  )
}
