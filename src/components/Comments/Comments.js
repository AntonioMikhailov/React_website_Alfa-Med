import React from 'react'
export default function Comments({commentRow}) {
  return (
   <>
    <div className="comments__row">
    {
      commentRow.map((item, i)=> { 
       return ( 
        <div key={i} className="comments__column">
        <div  className="comments-itemRow">
        <div className="comments-item__left"><img src={item.img} alt="фото"/></div>
        <div className="comments-item__right">
          <h3 className="comments-item__text">{item.text}</h3>
          <div className="comments-item__name">{item.name}</div>
          <h3 className="comments-item__signature">{item.signature}</h3>
        </div>
      </div>
      </div>
        )})  
    }
        </div>
   </>
  )
}
