import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../data/icons'
import MobileMenu from '../MobileMenu/MobileMenu'
import {AddOffsetPadding, RemoveOffsetPadding} from '../OffsetPadding/OffsetPadding'

export default function Header() {
const menuRow = [
  // Одна база для Header и для Мобильного меню
{link: '/', title: 'Главная'},
{link: 'about', title: 'О нас'},
{link: 'departments', title: 'Отделения'},
{link: 'doctors', title: 'Врачи'},
{link: 'contacts', title: 'Контакты'},
]
const [activeMobile, setActiveMobile] = useState(false)
 
useEffect(()=> {
 if(activeMobile) {
 AddOffsetPadding()
 } else {
 RemoveOffsetPadding()
 }
 })

 return (
 <>
   
   <div className="header-hi">
    <div className="header-hi__row">
      <div className="h-hi__contactsRow">
        <a href="tel:880012345678" className="h-hi-contactsItem"><span>&#xe902;</span>8 800 123 456 78</a>
        <a href="email:alfamed@alfamed.ru" className="h-hi-contactsItem"><span>&#xe903;</span>Москва, ул.Черышева,34</a>
      </div>
      <div className="h-hi__socialRow">
        {/* Через цикл &#xe911; не делается - показывает ка текст */}
        <a href=" " className="h-hi__socialItem">&#xe911;</a>
        <a href=" " className="h-hi__socialItem">&#xe908;</a>
        <a href=" " className="h-hi__socialItem">&#xe906;</a>
        <a href=" " className="h-hi__socialItem">&#xe90a;</a>
      </div>
    </div>
  </div>
  <section className="header">
    <div className="container">
      <div className="header-row" id="up">
     <NavLink to="/" className="header-logo"><img src={icon.logo2022 } alt="logo"/></NavLink>
<nav className="header-menu__row">
  {
    menuRow.map((item, index)=> { 
      return ( 
      <NavLink key={index}
      to={item.link} end className={({isActive})=> isActive ? 'header-menu__item nav-active' : 'header-menu__item'} >{item.title}</NavLink>
      )})  
  }
 
         </nav>

        <div onClick={()=> setActiveMobile(true)} className="burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </section>
<MobileMenu
activeMobile={activeMobile}
setActiveMobile={setActiveMobile}
menuRow={menuRow}
/>
   

   </>

  )
}
