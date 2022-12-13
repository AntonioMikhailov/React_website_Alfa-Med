import React from 'react'
import BreadCrumbsNav from '../../components/BreadCrumbsNav/BreadCrumbsNav'
import H2 from '../../components/H2/H2'
import Schedule from '../../components/Schedule/Schedule'
import img from '../../data/images'

export default function DoctorsSingle() {
  const listSchedule = [
    {day: 'Понедельник', worktime: '8:00 – 20:00'},
    {day: 'Вторник', worktime: '8:00 – 20:00'},
    {day: 'Среда', worktime: '8:00 – 20:00'},
    {day: 'Четверг', worktime: '8:00 – 20:00'},
    {day: 'Пятница', worktime: '8:00 – 20:00'},
    {day: 'Суббота', worktime: '8:00 – 20:00'},
    {day: 'Воскресенье', worktime: 'выходной'},
  
  ]
  return (
   <>
   <BreadCrumbsNav
pageTo={'Врачи'}
/>
    <section className="doctors-single-1">
      <div className="container">
      <H2
subTitle={''}
h2Title={'Мария Семенович'}
text={'эндокринолог'}
subTitleStyles={''}
h2TitleStyles={'docs1__title'}
textStyles={'docs1__text'}
/>
   
        <div className="docs1__row">
          <div className="docs1-left">
            <div className="docs1-left__image"><img src={img.docSingle} alt="#"/></div>
            <ul className="docs1-left__listOne">
              <li className="docs1-left__listOneItem">
                <div className="docs1-left__listText"><span>Занятость:</span> полная</div>
                <div className="docs1-left__listText"><span>График работы:</span> полный день</div>
                <div className="docs1-left__listText"><span>Гражданство: </span> Российская Федерация</div>
                <div className="docs1-left__listText"><span>Образование:</span> высшее</div>
                <div className="docs1-left__listText"><span>Возраст: </span> 34 года</div>
                <div className="docs1-left__listText"><span>Опыт работы:</span> 7 лет</div>
              </li>
            </ul>
            <div className="docs1-listRow">
              <div className="docs1-left__title">Образование</div>
              <ul>
                <li className="docs1-left__bulletList">Минский государственный медицинский институт по специальности
                  педиатрия</li>
                <li className="docs1-left__bulletList">Курсы на базе Минского консультционно-диагностического центра по
                  специальности ультразвуковая диагностика</li>
              </ul>
            </div>
            <div className="docs1-listRow">
              <div className="docs1-left__title">Сертификаты, курсы</div>
              <ul>
                <li className="docs1-left__bulletList">2017г. - «Педиатрия диагностика патологии внутренних органов»,
                  БелМАПО</li>
                <li className="docs1-left__bulletList">2019г. - «Педиатрия диагностика патологии мягких тканей и суставов»,
                  БелМАПО</li>
              </ul>
            </div>
            <div className="docs1-left__title">Опыт работы</div>
            <ul>
              <li className="docs1-left__bulletList">3-я детская городская больница г.Москва, врач-педиатр</li>
              <li className="docs1-left__bulletList">Московский консультационно-диагностический центр, врач педиатр</li>
            </ul>
          </div>
          <div className="docs1-right">
            <div className="docs1-right__column">
              <h3 className="docs1-right__smallTitle">Часы приема </h3>
              <div className="docs1-right__title">Мария Семенович</div>
              <ul className="docs1-right__list">

                          <Schedule
            listSchedule={listSchedule}
            />

 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
