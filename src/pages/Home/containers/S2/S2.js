import React from 'react'
import ButtonBook from '../../../../components/ButtonBook/ButtonBook'
import H2 from '../../../../components/H2/H2'
import img from '../../../../data/images' 

export default function S2About() {
  return (
    <section className="home-two">
    <div className="container">
      <div className="h-t__row">
        <div className="h-t__left">
          <H2
          subTitle={'О нашей клинике'}
          h2Title={<>Клиника с <span>инновационными</span> методами лечения</>}
          text={'Мы предоставляем самые полные медицинские услуги, поэтому каждый человек имеет           возможность получить качественную медицинскую помощь.'}
          subTitleStyles={'h-t__smallTitle'}
          h2TitleStyles={'h-t__title'}
          textStyles={'h-t__text'}
          />
      
         
          <ul className="h-t__list">
            <li>Травматология: взрослая и детская</li>
            <li>Стоматология и протезирование</li>
            <li>Функциональная диагностика</li>
            <li>Педиатрическая неотложная помощь </li>
            <li>Ультразвуковая диагностика</li>
            <li>Пластическая хирургия</li>
            <li>Рентгендиагностика</li>
          </ul>
          <ButtonBook
          text={'узнать больше'}
          link={'/about'}
          styles={'h-t__button'}
          />
          
        </div>
        <div className="h-t__right"><img src={img.sec_2} alt="фото"/></div>
      </div>
    </div>
  </section>
  )
}
