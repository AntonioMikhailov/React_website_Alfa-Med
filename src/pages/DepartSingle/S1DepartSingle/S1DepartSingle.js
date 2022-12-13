import React from 'react'
import H1 from '../../../components/H1/H1'
import BreadCrumbsNav from '../../../components/BreadCrumbsNav/BreadCrumbsNav'
import img from '../../../data/images'
import icon from '../../../data/icons'
import H2 from '../../../components/H2/H2'
import Schedule from '../../../components/Schedule/Schedule'

export default function S1DepartSingle() {
const leftListItem = [
  { icon : icon.check_list, text: 'предупреждение заболеваний'}, 
  { icon : icon.check_list, text: 'диагностика ранних стадий заболеваний'},
  { icon : icon.check_list, text: 'предотвращение развития патологий'},
  { icon : icon.check_list, text: 'проведение прививок и вакцинаций'},
  { icon : icon.check_list, text: 'диагностика наследственных заболеваний'},
  { icon : icon.check_list, text: 'проведение плановой диспансеризации'},
  ]

  const listSchedule = [
    {day: 'Понедельник', worktime: '8:00 – 20:00'},
    {day: 'Вторник', worktime: '8:00 – 20:00'},
    {day: 'Среда', worktime: '8:00 – 20:00'},
    {day: 'Четверг', worktime: '8:00 – 20:00'},
    {day: 'Пятница', worktime: '8:00 – 20:00'},
    {day: 'Суббота', worktime: '8:00 – 20:00'},
    {day: 'Воскресенье', worktime: '9:00 – 18:00'},
  
  ]

  return (
    <>
<BreadCrumbsNav
pageTo={'Отделения'}
/>
  <section className="depart-single-1">
    <div className="container">
    <H1
title={<>Наши отделения:<br/> <span> Педиатрия</span></>}
styles={'ds1__title'}
/>

   <h3 className="ds1__text">Педиатр – это самый важный врач в жизни ребенка и его родителей. Именно этот доктор берёт
        на себя ответственность за здоровье ребенка с самого его рождения. Это не только врач,консультант и учитель,но
        и друг для малыша и его родителей. Задача педиатра — научить маму понимать своего маленького ребенка,знать
        особенности его возрастного периода. </h3>
      <div className="ds1__row">
      <div className="ds1__left">
            <div className="ds1-left__image"><img src={img.dep_single_sec_1} alt="#"/></div>
            <div className="ds1-left__icon"><img src={icon.depaert_pediatric_icon} alt="#"/></div>
            <H2
subTitle={''}
h2Title={'Педиатрия'}
text={''}
subTitleStyles={''}
h2TitleStyles={'ds1-left__title'}
textStyles={''}
/>
      
            <h3 className="ds1-left__text">Организм ребенка имеет свои особенности,характерные только для определенных
              возрастных групп. Дети устроены совершенно иначе,чем сформировавшийся организм взрослого человека, поэтому
              нельзя к&nbsp;
              лечению всех &laquo;
              возрастов&raquo;
              относиться одинаково. Подход,при котором упрощенно считают детский организм уменьшенной копией
              взрослого,абсолютно не&nbsp;
              верный. Анатомо-физиологические особенности играют существенную роль в&nbsp;
              развитии многих заболеваний и&nbsp;
              должны непременно учитываться при назначении лечения. Именно поэтому Педиатрия&nbsp;
              &mdash;
              обособленный раздел медицины,сложный и&nbsp;
              многоплановый. <p> Наши педиатры&mdash;
                профессионалы,прошедшие серьезный отбор,за&nbsp;
                плечами которых большое количество лет практической деятельности. Кроме того,что тоже немаловажно,все
                они обладают столь необходимыми для врача качествами,как доброта, чуткость, внимательность, сострадание.
              </p>
            </h3>
            <div className="ds1-left_secTitle">Комплексное наблюдение педиатра</div>
            <div className="ds1-left__listRow">
              {
                leftListItem.map((item, i)=> { 
                 return ( 
                  <div key={i} className="ds1-left__listItem">
                <div className="ds1-leftList__icon"><img src={item.icon} alt="#"/></div>
                <div className="ds1-leftList__text">{item.text}</div>
              </div>
                  )})  
              }
         
            </div>
          </div>


        <div className="ds1__right">
          <div className="ds1-right__column">
            <h3 className="ds1-right__smallTitle">Часы приема </h3>
            <div className="ds1-right__title">Педиатрическое отделение</div>
            <ul className="ds1-right__list">

              <Schedule
              listSchedule={listSchedule}
              />
 
 
            </ul>
          </div> <a href="tel:880012345678" className="ds1-right__button">
            <div className="ds1__buttonRow">
              <div className="ds1-button__icon"><img src={icon.depart_call24} alt="#"/></div>
              <div className="ds1-button__text">Для экстренных вызовов <br/> <span>8 800 123 456 78</span></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
