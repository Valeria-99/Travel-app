import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { guestRating, ourPickPrice, priceLtoH, starRating } from '../Redux/hotels/action'

const Recommended = () => {

let dispatch=useDispatch()
const handleChange= (e)=>{
let value=e.target.value
 if(value==="price"){
     dispatch(priceLtoH())
 }else if(value==="starrating"){
     dispatch(starRating())
 }else if(value==="rating"){
     dispatch(guestRating())
 }else if(value==="ourprice"){
     dispatch(ourPickPrice())
 } 
}

  return (
    <div style={{height:"60px"}}>
         <p>Подивіться, як ми обираємо наші рекомендовані властивості</p>
         <select name="sort" onChange={handleChange}>
           <option value="recommended">Відзначений</option>
           <option value="price">Ціна</option>
           <option value="rating">Оцінка гостей + Наш вибір</option>
           <option value="starrating">Зірковий рейтинг</option>
           <option value="ourprice">Ціна + наш вибір</option>
          </select>
       </div>
  )
}

export default Recommended