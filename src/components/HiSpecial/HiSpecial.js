import React from 'react'
 

import ButtonBook from '../ButtonBook/ButtonBook'
import H2 from '../H2/H2'
 
export default function HiSpecial({img}) {
  return (
   <>
       <div className="expert-row">
        <div className="expert-leftRow">
          <div className="expert-leftImage"><img src={img} alt="фото"/></div>
        </div>
        <div className="expert-rightRow">
        <H2
subTitle={''}
h2Title={<>Высоклассные специалисты <span>готовы помочь</span> Вам в любое время</>}
text={'Свяжитесь с нами любым подходящим способом и запишитесь на прием к врачу, чья помощь вам нужна! Посетите нас в запланированном времени и получите лечение.'}
subTitleStyles={''}
h2TitleStyles={'expert-rightTitle'}
textStyles={'expert-rightText'}
/>
 <ButtonBook
text={'записаться на прием'}
link={'/doctors'}
styles={'expert-button'}
/>
    
        </div>
      </div>
   </>
  )
}
