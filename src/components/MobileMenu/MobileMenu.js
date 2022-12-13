import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../data/icons'

export default function MobileMenu({activeMobile, setActiveMobile, menuRow}) {
  return (
   <>
     <div 
  // Мобилка Фон
  onClick={()=> setActiveMobile(false)}
  className={activeMobile ? "mobile-overlay active-mobileOverlay" : "mobile-overlay"}></div>
  <div
  
   onClick={()=> setActiveMobile(false)}
  className={activeMobile ? "mobile-wrapper active-mobileWrapper" : "mobile-wrapper"}>
    <div className="mobile-menu">
    {menuRow.map((item, index)=> { 
     return ( 
    <NavLink key={index}
   to={item.link} end className={({isActive})=> isActive ? 'mobile-menu__item mobile-active' : 'mobile-menu__item'} >{item.title}</NavLink>
    )})  
          }
 
    </div>
    <div onClick={()=> setActiveMobile(false)} className="mobile-close-button"><img src={icon.clouse_button} alt="icon"/></div>
  </div>
   </>
  )
}



 