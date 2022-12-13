import React, { useRef } from 'react'
import { useEffect } from 'react'

export default function S7Counter() {
  const countRow= useRef()
const dig1= useRef()
const dig2= useRef()
const dig3= useRef()
const dig4= useRef()

useEffect(()=> {
  const counterRow = countRow.current;
  const digits_1 = dig1.current;
  const digits_2 = dig2.current;
  const digits_3 = dig3.current;
  const digits_4 = dig4.current;
  
window.addEventListener('scroll', function stop() {
    let time = 2000;
    let counterRowOffset = counterRow.getBoundingClientRect().top;
    if (counterRowOffset < window.innerHeight - 100) {
      
      let startCounter = (stepNum, maxDigitNum, selectorID) => {
        let counterID;
        let count = 0;
        let step = stepNum;
        let maxDigit = maxDigitNum;
        let t = time / (maxDigit / step);
        counterID = setInterval(() => {
          count = count + step;
          selectorID.innerHTML = count;
          if (count >= maxDigit) {
            clearInterval(counterID);
          }
          window.removeEventListener('scroll', stop);
        }, t);
      };
    
        startCounter(1, 9, digits_1);
        startCounter(40, 1240, digits_2);
        startCounter(2, 94, digits_3);
        startCounter(1, 29, digits_4);
     
    }
})
}) //


  const counterItem = [
    {num: '0', ref: dig1, text: <>лет средний <br/>стаж врачей</>},
    {num: '0', ref: dig2, text: <>успешных<br/>  операций</>},
    {num: '0', ref: dig3, text: <>койко мест <br/>в&nbsp;клинике</>},
    {num: '0', ref: dig4, text: <>штатных <br/> врачей </>},
  ]
return (
  <section className="home-7">
<div className="container">
<div ref={countRow} className="counter-row">
  {
    counterItem.map((item, i)=> {
      
     return ( 
      <div key={i} className="counter-item">
      <div ref={item.ref} className={`counter-digit__${i+1}`}>{item.num}</div>
      <div className="counter-text">{item.text}</div>
    </div>
      )})  
  }
 
</div>
</div>
</section>  


)
}
