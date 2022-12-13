import React from 'react'
import { useState } from 'react'
import H2 from '../../../../components/H2/H2'
import img from '../../../../data/images'
import accordBlock from './data'

export default function S3Accord() {
  const [activeAccord, setActiveAccord] = useState(0)  
 
function handleAccordOpen(i) {
   
  if(activeAccord === i) {
     
   return setActiveAccord(null)  
  }
 setActiveAccord(i)
 }
 
  return (
    <section className="home-three">
    <div className="h-th__row">
      <div className="h-th__left"><img src={img.sec_3} alt="фото"/></div>
      <div className="h-th__right">
        <div className="h-th-right__row">

        <H2
      subTitle={''}
      h2Title={<>Мы осуществляем <span> исследования и анализы </span>
      во всех сферах</>}
      text={''}
      subTitleStyles={''}
      h2TitleStyles={'h-th__title'}
      textStyles={''}
      />
  {
    accordBlock.map((item, i)=> { 
   return ( 
      <div key={i} className="h-accordeonBlock">
      <div
 
      onClick={()=> handleAccordOpen(i)  }
     className="h-th-accord__titleRow" data-homeaccord>
        <div className="h-th-accord__titleIcon"></div>
        <div className="h-th-accord__title">{item.title} </div>
      </div>
       <div className={activeAccord === i ? "h-th-accord__textWrapper accordTextActive" : 'h-th-accord__textWrapper' }>{item.text}
       </div>
    </div>
   )})  
  }
  </div>
      </div>
    </div>
  </section>
  )
}
