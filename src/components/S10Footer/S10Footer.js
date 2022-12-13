import React, { useEffect } from 'react'
import { useState } from 'react'
import {  NavLink, useLocation } from 'react-router-dom'
import { H10Depart } from './data'
import { H10Links } from './data' 
import icon from '../../data/icons'
import { useRef } from 'react'
 
 


export default function S10Footer() {
 
  const formSubscribe =useRef()
  const [buttonText, setButtonText] = useState('подписаться')
  const [ischeckValue, setcheckValue] = useState(false)
    // для стилей
    const [addClass, setAddClass] = useState('h10-top__button btn')

function checkValue(e) {  
  if( e.target.value) {
   setcheckValue(true)
   
  } 
}

 
const location = useLocation();
useEffect(() => {
 setButtonText('подписаться')
  setAddClass( 'h10-top__button btn')
 }, [location]); //  

function handleSubmit(e) { 
 e.preventDefault()
if(ischeckValue) {
 
  setButtonText('вы подписаны')
  setcheckValue(false) // обнуляем чтобы при повторном вводе сработало все заново
  setAddClass( 'h10-top__button btn')
  setTimeout(() => {
    formSubscribe.current.reset()  
    setButtonText('подписаться')
  }, 3000);
  
} else {
  setAddClass( 'h10-top__button warn-btn btn')
  setButtonText('укажите email')
}
  
}

  return (
 <>
 <footer   className="home-10">
      <div className="container">
        <div className="h10-top__text">Вы можете Подписаться на рассылку новостей компании</div>
        <div className="h10__topRow">
          <form ref={formSubscribe} onSubmit={handleSubmit}  action="#" className="h10-top__left" data-submit>
            <input  onChange={checkValue}  type="text" className="h10-top__input" placeholder="Ваш E-mail"/>
            <button type="submit" className={addClass}>{buttonText}</button>
          </form>
          <div className="h10-top__right">
            <a href=" " className="h10-top__contactItem">&#xe90d;</a>
            <a href=" " className="h10-top__contactItem">&#xe908;</a>
            <a href=" " className="h10-top__contactItem">&#xe906;</a>
            <a href=" " className="h10-top__contactItem">&#xe90a;</a>
          </div>
        </div>
        <div className="h10__bottomRow">
          <div className="h10__bottomRow-left">
            <div className="h10-bot__item">
              <div className="h10-bot__logo"><img src={icon.logo2022} alt="logo"/></div>
              <div className="h10-bot__text">Наш медицинский центр предлагает самый широкий спектр услуг в городе. Мы
                стремимся предоставить нашим пациентам максимально качественную помощь первоклассными специалистами в
                своих областях. </div>
            </div>
          </div>
          <div className="h10__bottomRow-right">
            <div className="h10-bot__item">
              <div className="h10-bot__title">Отделения</div>
              <div className="h10-bot__line"></div>
<ul className="h10-bot__list">
  {
    H10Depart.map((item, i)=> { 
      return ( 
        <li key={i} className='h10-bot__list' >
      <NavLink
   
      key={i}   to={item.link}>
      {item.name} 
    </NavLink>
    </li>
      )})  
  }
 
</ul>
</div>
<div className="h10-bot__item">
<div className="h10-bot__title ">Навигация по сайту</div>
<div className="h10-bot__line"></div>
<ul className="h10-bot__list ">
{
    H10Links.map((item, i)=> { 
      return (
   <li key={i} className='h10-bot__list' >
      <NavLink
      className={({isActive})=> isActive ? 'nav-active' : ''} 
      end 
      key={i}
      to={item.link}>
      {item.name}
    </NavLink>
   </li>
   
      )})  
  }
   
</ul>
</div>
</div>
</div>
</div>

</footer>

<section className="footer">
<div className="container">
<div className="footer-row">
</div>
<a href="email:zakaz@tochka-focusa.ru" className="footer-copyright">Дизайн и верстка сайта: Студия дизайна <span>"Точка-Фокуса" </span> 2021</a>
</div>

</section>
      
<section className="arrow-anchor">
<a href="#up" data-link className="anchor-wrapper">
<div className="anchor-button"></div>
</a>
</section>

 
</>
)
}
