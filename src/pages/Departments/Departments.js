import React from 'react'
import H1 from '../../components/H1/H1'
import H2 from '../../components/H2/H2'
import BreadCrumbsNav from '../../components/BreadCrumbsNav/BreadCrumbsNav'
import img from '../../data/images'
import Depart from '../../components/Depart/Depart'
import itemRow from '../Home/containers/S4Depart/data'
 

// Все секции
export default function Departments() {
  return (
    <>
    <BreadCrumbsNav
    pageTo={'Отделения'}
    />

  <section className="depart-1">
      <div className="container">

          <H1
    title={<>Добро пожаловать в&nbsp;Альфа&nbsp;Мед</>}
    />
    
        <div className="d1__row">
          <div className="d1__left"><img src={img.dep_sec_1} alt="#"/></div>
          <div className="d1__right">
            <h3 className="d1__text"> <span>Если вы находитесь в поисках</span> высококвалифицированного врача, который
              использует в&nbsp;работе только новое современное оборудование&nbsp;&mdash; добро пожаловать
              в&nbsp;медицинский центр &laquo;Альфа Мед&raquo;! <p> Уже более 14&nbsp;лет мы&nbsp;оказываем широкий
                спектр медицинских услуг по&nbsp;по&nbsp;диагностике и&nbsp;лечению заболеваний.</p>
            </h3>
          </div>
        </div>
      </div>
    </section>
{/* Сек 2 */}
<section className="depart-2">
      <div className="container">
      <H2
subTitle={''}
h2Title={<>Наши <span>отделения</span> </>}
text={''}
subTitleStyles={''}
h2TitleStyles={'d2__title'}
textStyles={''}
/>
<Depart
    itemRow={itemRow}
    link={'/depart-single'}
    />
     
        
      </div>
    </section>

 

 </>
  )
}
