import React from 'react'
import {   NavLink } from 'react-router-dom'
 

export default function Departments({itemRow, link}) {
  return (
 <>
    <div className="departComp-row">
          {
            itemRow.map((item, i)=> { 
             return ( 
              <div  key={i} className="departComp-column"><NavLink to={link} className="departComp-item">
              <div className="h-f-item__row">
                <div className="h-f-itemLeft">
                  <div className="departComp-itemIcon"><img src={item.icon} alt="icon"/></div>
                </div>
                <div className="h-f-itemRight">
                  <div className="departComp-itemTilte">{item.title}</div>
                  <h3 className="departComp-iconText">{item.text}</h3>
                </div>
              </div>
            </NavLink>
            </div>
              )})  
          }
   
        </div>
 </>
  )
}
