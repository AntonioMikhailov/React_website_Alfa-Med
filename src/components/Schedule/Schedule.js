import React from 'react'

export default function Schedule({listSchedule}) {
  return (
   
    <>
        {
                listSchedule.map((item, i)=> { 
                 return ( 
                  <li key={i} className="schedule__item">
                <div className=" ">{item.day}</div>
                <div className=" ">{item.worktime}</div>
              </li>
                 
                  )})  
              }
    </>
  )
}
