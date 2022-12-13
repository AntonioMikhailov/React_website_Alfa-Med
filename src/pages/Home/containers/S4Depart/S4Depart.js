import React from 'react'
 
import Depart from '../../../../components/Depart/Depart'
import H2 from '../../../../components/H2/H2'
 
import itemRow from './data'
export default function S4Depart() {

  return (
    <section className="home-four">
      <div className="container">
        
<H2
subTitle={'Отделения'}
h2Title={<>Мы оказываем <span>услуги</span> в&nbsp;различных направленияx </>}
text={''}
subTitleStyles={'h-f__smallTitle'}
h2TitleStyles={'h-f__title'}
textStyles={''}
/>
    <Depart
    itemRow={itemRow}
    link={'/departments'}
    />
     
      </div>
    </section>
  )
}
