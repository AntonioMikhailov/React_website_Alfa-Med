import React, { useEffect } from 'react'
 import departAccordItem from './data'
import  {Link} from 'react-scroll'

export default function S3DepartSingleAccord() {
 
useEffect(()=> {

  const accordTitle = document.querySelectorAll('.ds3__titleRow');
  accordTitle.forEach(item => {
    //Показываем первый аккорд
    accordTitle[0].classList.add('showAccordText');
    accordTitle[0].nextElementSibling.style.maxHeight = accordTitle[0].nextElementSibling.scrollHeight + 'px';
    accordTitle[0].firstElementChild.classList.add('ds3-iconActive');
    accordTitle[0].classList.add('ds3__titleActive');
    item.addEventListener('click', function () {
      //По одному показываем
      accordTitle.forEach(item => {
        if (item.hasAttribute('data-homeaccord')) {
          item.classList.remove('showAccordText');
          item.nextElementSibling.style.maxHeight = 0 + 'px';
          item.firstElementChild.classList.remove('ds3-iconActive');
          item.classList.remove('ds3__titleActive');
        }
      });
      this.classList.toggle('showAccordText');
      this.firstElementChild.classList.toggle('ds3-iconActive');
      this.classList.toggle('ds3__titleActive');
      if (this.classList.contains('showAccordText')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });

})//

  return (
    <section id={'accordPoint'} className="depart-single-3">
      <div className="container">
        <div className="ds3__row">


        {
  departAccordItem.map((item, i)=> { 
  return ( 
      <div key={i}  className="ds3__accordItem">
  <Link to={'accordPoint'}  data-homeaccord className="ds3__titleRow" offset={item.offset} smooth={true} duration={1000}> 
 <div className="ds3__itemIcon"></div>
   <div className="ds3__itemTitle">{item.title}</div>
   <div className="ds3__itemPrice">{item.price}&nbsp;
     руб.</div>
 </Link>
 <div className="ds3__textWrapper">{item.text}</div>
</div>
  )}
)  
  }
 </div>
      </div>
    </section> 
 
    )  
 }





 