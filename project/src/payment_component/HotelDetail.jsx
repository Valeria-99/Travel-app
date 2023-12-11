import React from 'react'
import styles from "./Payment.module.css"
const HotelDetail = () => {
  let hotel=JSON.parse(localStorage.getItem("singleHotel"));
  let travel=JSON.parse(localStorage.getItem("travel"))
  return (
      <>
    <div className={styles.cart}>
       <img src={hotel.url} alt="" />
       <h3>{hotel.Name}</h3>
       <p><span style={{fontWeight:"600"}}>{hotel.Rating}/5 </span> Чудово({hotel.Review} reviews)</p>
       <p>Гість оцінив це помешкання {hotel.Rating}/5 за чистоту</p>
        <p><span style={{fontWeight:"500",color:"grey"}} >1 кімната </span> Розкішний номер Grande з видом на місто</p>
        <p><span style={{fontWeight:"500",color:"grey"}} >Обрати:</span>  {travel.checkin}</p>
        <p><span style={{fontWeight:"500",color:"grey"}} >Перевірити</span>  {travel.checkout}</p>
    </div>
    <div className={styles.bill} >
        <h2>Деталі ціни</h2>
        <div>
            <p>1 кімната x 1 ніч</p>
            <p>${hotel.Cost}.00</p>
        </div>
        <p>Ви зекономили 10% ! </p>
        <div style={{borderBottom:"1px solid lightgrey"}}>
            <p>Техас</p>
            <p>$71.00</p>
        </div>
        <div>
            <h3>Всього</h3>
            <h3>${hotel.Cost+71}.00</h3>
        </div>
        <div style={{color:"darkgreen",fontWeight:"600"}}>
            <p>Сплатити зараз</p>
            <p> $0.00</p>
        </div>
        <div style={{color:"grey",fontWeight:500}} >
            <p>Оплата на місці</p>
            <p>${hotel.Cost+71}.00</p>
        </div>
    </div>
    </>
  )
}

export default HotelDetail