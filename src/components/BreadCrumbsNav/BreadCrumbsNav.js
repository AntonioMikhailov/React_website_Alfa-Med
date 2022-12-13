import React from 'react'
import {  NavLink } from 'react-router-dom'
import icon from '../../data/icons'

export default function BreadCrumbsNav({pageTo}) {
  return (
<>
<nav className="breadCrumbs">
<div className="container">
  <div className="breadCrumbs__row">
 <NavLink to="/" className="breadCrumbs__home">Главная</NavLink>
  <div className="breadCrumbs__icon"><img src={icon.nav_link_icon} alt="icon"/></div>
 
<div className="breadCrumbs__page">{pageTo}</div>
                
            
        </div>
  </div>
  </nav>
</>
  )
}
