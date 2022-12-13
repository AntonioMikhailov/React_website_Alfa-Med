import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../data/images'

export default function S2DepartSingleTab() {
  const doctors = [
    {img: img.dep_single_sec_3_1, name: 'Ксения Ярохина', text: 'педиатр'},
    {img: img.dep_single_sec_3_2, name: 'Виктория Прохина', text: 'педиатр'},
    {img: img.dep_single_sec_3_3, name: 'Зия Урманова', text: 'педиатр'},
  ]
  return (
    <section   className="depart-single-2">
    <div className="container">
      <h2 className="ds2__title">Врачи педиатры</h2>
      <div className="ds2__row">

      {
        doctors.map((item, i)=> { 
          return ( 
            <Link key={i} to="/doctors-single" className="ds2__column">
           <div className="ds2__item">
           <div className="ds2__image"><img src={item.img} alt="#"/></div>
           <div className="ds2__name">{item.name}</div>
           <div className="ds2__text">{item.text}</div>
         </div>
         </Link>
           )})
    }  
         
         </div>
    </div>
  
  </section> 
  )
}
