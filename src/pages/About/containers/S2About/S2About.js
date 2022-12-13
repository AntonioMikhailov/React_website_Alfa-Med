import React from 'react'
import ExpertDoctors from '../../../../components/ExpertDoctors/ExpertDoctors'
import H2 from '../../../../components/H2/H2'
export default function S2About() {
  return (
    <section className="about-2">
      <div className="container">
            <H2
      subTitle={'Отделения'}
      h2Title={<>Мы предлагаем <span>лучшие услуги </span>для Вас и Вашей семьи</>}
      text={''}
      subTitleStyles={'a2__smallTitle'}
      h2TitleStyles={'a2__title'}
      textStyles={''}
      />
      <ExpertDoctors/>
      </div>
    </section>
  )
}
