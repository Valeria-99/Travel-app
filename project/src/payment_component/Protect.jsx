import React from 'react'
import SecurityIcon from '@mui/icons-material/Security';
import GppMaybeRoundedIcon from '@mui/icons-material/GppMaybeRounded';
import styles from "./Payment.module.css"

const Protect = () => {
  return (
    <div className={styles.protectbox}>
        <div className={styles.protecticon}>
           <SecurityIcon/>
           <h2>Захистіть свій готель</h2>
           <h4>Рекомендовано</h4>
        </div>
        <div className={styles.important}>
                <p><GppMaybeRoundedIcon style={{fontSize:"20px"}}/><span style={{color:"grey",fontWeight:"500"}}>Important: </span> Скасування поїздки через урядові рекомендації щодо подорожей, страх перед подорожжю або передумати не покривається
                Страхування подорожей може забезпечувати покриття в разі діагностованої хвороби COVID-19.
               COVID-19 є передбачуваною подією, і деякі інші страхові покриття не застосовуватимуться <span style={{color:"#0a438b",textDecoration:"underline"}}>Вивчити більше</span></p>
        </div>
        <div className={styles.points}>
            <p><span style={{fontWeight:"600"}}>Примітка: </span>Якщо ви є резидентом штату ВАШИНГТОН, будь ласка <span style={{color:"#0a438b",textDecoration:"underline"}}>Клікнути тут</span> щоб переглянути продукти, які ви маєте право придбати.</p>
            <p style={{fontWeight:"700",fontSize:"18px",marginBottom:"25px"}}>4 причини, чому вам може знадобитися захист під час подорожей</p>
            <p >1. Ви затримуєтеся з покритих причин і пропускаєте одну ніч перебування в готелі</p>
            <p>2. Ви хворієте і не використовуєте всі ночі в готелі</p>
            <p>3. Вам необхідно продовжити поїздку через хворобу попутника</p>
            <p>4. Вам потрібно до 10 000 доларів США на покриття медичних витрат під час подорожі</p>
        </div>
        <div className={styles.selectprotect}>
           <p style={{fontWeight:500,color:"grey"}}>Виберіть Так або Ні, щоб продовжити бронювання<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
           <div className={styles.saferadio}>
               <div><input type="radio" /><label>Так, я хочу для своєї подорожі Hotel Booking Protection Plus</label></div>
               <h2>$12.91 <span style={{fontSize:"14px"}}>на людину</span></h2>
           </div>
           <div><input type="radio" /><label>Ні, я готовий ризикнути своїм $469.40 trip</label></div>
           <p>“Сталися події поза моїм контролем, через що поїздку було скасовано. Захист від подорожей був цінним, бо зменшив для мене втрати, коли нам довелося скасувати поїздку.” - Містер Родман</p>
        </div>
    </div>
  )
}

export default Protect