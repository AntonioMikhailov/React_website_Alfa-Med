import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import H2 from '../H2/H2'
import ContactsCompMap from './ContactsCompMap'

export default function S9Contacts() {
  const leftItem = [
    {city: 'Москва', adress: <>ул. Ак. Берышева, 123 <br/>
    т. (495) 123-456-78, 564-88-99 <br/>
    E-mail: alfamed@alfamed.ru</> },
    {city: 'Санкт-Петербург ', adress: <>ул. Ак. Берышева, 123 <br/>
    т. (495) 123-456-78, 564-88-99 <br/>
    E-mail: alfamed@alfamed.ru</> },
    {city: 'Екатеринбург', adress: <>ул. Ак. Берышева, 123 <br/>
    т. (495) 123-456-78, 564-88-99 <br/>
    E-mail: alfamed@alfamed.ru</> },
    {city: 'Хабаровск', adress: <>ул. Ак. Берышева, 123 <br/>
    т. (495) 123-456-78, 564-88-99 <br/>
    E-mail: alfamed@alfamed.ru</> },

  ]
  const location = useLocation();
useEffect(() => {
  // обнуляем кнопки при переходе на др. страницу
  setButttonValue('записаться на прием') 
  setAddClass( 'h9__button btn')
 }, [location]); // сработает только на Location

  const [values, setValues] = useState(  
    {
      name: '',  
      email: '',
      text: ''
   }
  )
   // для текста Кнопки
   const [ buttonValue, setButttonValue] = useState('записаться на прием')
const [ submited, setSubmited] = useState(false)

  function handleName(e) { 
    setValues({...values, name: e.target.value })
 
    }
  function handleEmail(e) { 
    setValues({...values, email: e.target.value })
  }
  function handleText(e) { 
  setValues({...values, text: e.target.value })
  }
    // для стилей
    const [addClass, setAddClass] = useState('h9__button btn')

  function handleSubmit(e) { 
    e.preventDefault()
    if(values.name && values.email && values.text) {
      setSubmited(true) // заголовок поменяли
      setButttonValue('сообщение отправлено')
      setAddClass( 'h9__button btn')
 
setTimeout(() => {
  setValues({
    ...values,
    name: '',
    email: '',
    text: '', 
  })
  // setSubmited(false) // или не надо обнулять чтобы юзер знал что уже отправлял форму
  setButttonValue('записаться на прием') // опять меняем текст кнопки
}, 3000);

    } else {
      setButttonValue('заполните все поля')
      setAddClass( 'h9__button warn-btn btn')
    }
  
  }

   
  return (
   <>
    <section className="home-9">

 

<div className="container">
    <H2
subTitle={'Наши контакты'}
h2Title={<>Запишитесь <span>на прием</span> прямо сейчас</>}
text={''}
subTitleStyles={'h9__smallTitle'}
h2TitleStyles={'h9__title'}
textStyles={''}
/>
      
      <div className="h9__row">
        <div className="h9-row__left">
          {
            leftItem.map((item, i)=> { 
             return ( 
              <div key={i} className="h9-left__item">
            <div className="h9-item__title">{item.city}</div>
            <h3 className="h9-item__adress">{item.adress}</h3>
          </div>
              )})  
          }
          </div>
        <div className="h9-row__right">
        
          <form onSubmit={handleSubmit} action="#" className='form-sec9'  data-contacts>
            {submited ? <div className='form-title'>Сообщение отправлено</div> : <div className='form-title' >Заполните форму</div> }

            <input
            onChange={handleName}
            value={values.name}
            type="text" className="h9__input" placeholder="Ваше имя"/>
            <div className="form-span">
            {!values.name ? <span>Введите Имя*</span> : null}
            </div>
         

            <input 
              onChange={handleEmail}
            value={values.email}
            type="text" className="h9__input" placeholder="Ваш телефон"/>
            <div className="form-span">
            {!values.email ? <span>Введите Email*</span> : null}
            </div>
            <textarea
               onChange={handleText}
               value={values.text}
            name="#" className="h9__textarea" placeholder="Ваше сообщение"></textarea>
            <div className="form-span">
            {!values.text ? <span>Введите текст*</span> : null}
            </div>
            <button type="submit" className={addClass}>{buttonValue}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {location.pathname === '/contacts' ? <ContactsCompMap/> : null }
   </>
  )
}
