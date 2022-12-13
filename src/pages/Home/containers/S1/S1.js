import React from 'react'
import img from '../../../../data/images' 
 
import { NavLink } from 'react-router-dom'
import H1 from '../../../../components/H1/H1'
import ButtonBook from '../../../../components/ButtonBook/ButtonBook'
import ExpertDoctors from '../../../../components/ExpertDoctors/ExpertDoctors'

export default function S1() {
  return (
    <section className="home-one">
      <div className="h-one__backgroungImage">
        <picture>
          <source srcSet={img.sec_1_mobile600} type="image/jpg" media="(max-width:600px)"/>
          <img src={img.sec_1} alt="фото"/>
        </picture>
      </div>
      <div className="container">
        <div className="h-one__row">
          <h3 className="h-one__smallTitle">Добро пожаловать в клинику "Альфа Мед"</h3>
          <H1
          title={'Лучшие специалисты города ждут Вас'}
          styles={'h-one__title'}
          />
       <h3 id='to' className="h-one__text">Клиника "Альфа Мед" предлагает широкий спектр услуг: проверку состояния здоровья,
            профилактику заболеваний, раннюю диагностику с&nbsp;использованием мощнейшего арсенала лабораторных
            и&nbsp;инструментальных исследований. </h3>
          <div className="h-one__buttonsRow">
            <ButtonBook
            text={'записаться на прием'}
            link={'/doctors'}
            styles={'h-one__firstButton'}
            />
            <NavLink to="/departments" className="h-one__secondButton btn">выбрать отделение</NavLink>
          </div>
        </div>
        <ExpertDoctors/>
           </div>
    </section>
  )
}
