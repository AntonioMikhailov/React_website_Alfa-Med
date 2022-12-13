import React from 'react'
import icon from '../../data/icons'
 

export default function ExpertDoctors() {  
    const bottomItem = [
    {icon: icon.home_1_1, title: 'Опытные врачи', text: 'Опытные и заботливые врачи готовы помочь вам с вашими проблемами' },
    {icon: icon.home_1_2, title: 'Скорая помощь', text: 'Мы всегда готовы прийти на помощь в нужный момент! Наша бригада скорой помощи готова к выезду!' },
    {icon: icon.home_1_3, title: 'Всегда на связи', text: 'В любое время, когда вам понадобится помощь, вы можете связаться с нами, и записаться на прием' },
  ]

  return (
    <>
     <div  className="bottomRow">
     {
  bottomItem.map((item, i)=> { 
    return ( 
    <div key={i} className="bottomColumn">
    <div  className="bottomItem">
    <div className="bottomItem__left"><img src={item.icon} alt="icon"/></div>
    <div className="bottomItem__right">
      <div className="bottomItem__title">{item.title}</div>
      <h3 className="bottomItem__text">{item.text}</h3>
    </div>
  </div>
  </div>

    )})  
}
  </div>
</>

)
}
