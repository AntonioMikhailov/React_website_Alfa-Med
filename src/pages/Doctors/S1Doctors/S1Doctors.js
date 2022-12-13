import React from 'react'
import { NavLink } from 'react-router-dom'
import doctorsItem from './data'
import H1 from '../../../components/H1/H1'
import BreadCrumbsNav from '../../../components/BreadCrumbsNav/BreadCrumbsNav'

export default function S1Doctors() {
  return (
   <>
   <BreadCrumbsNav
pageTo={'Врачи'}
/>
    <section className="doctors-1">
      <div className="container">
      <H1
title={<>В нашем центре работают <span>лучшие врачи</span> </>}
styles={'doc1__title'}
/>
    
        <h3 className="doc1__text">Главная ценность и гордость медицинского центра "Альфа Мед" — наши врачи. Все они
          специалисты высокой квалификации с большим практическим опытом в диагностике и лечении различных заболеваний.
        </h3>
        <div className="doc1__row">
          {
            doctorsItem.map((item, i)=> { 
             return ( 
              <NavLink key={i} to="/doctors-single" className="doc1__column">
              <div className="doc1__item">
                <div className="doc1__itemImage"><img src={item.img} alt="#"/></div>
                <div className="doc1__itemName">{item.name}</div>
                <div className="doc1__itemText">{item.text}</div>
              </div>
            </NavLink>
              )})  
          }

        
        </div>
      </div>
    </section>
   </>
  )
}
