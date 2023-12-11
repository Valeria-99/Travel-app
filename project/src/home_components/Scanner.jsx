import React from 'react'
import styles from "./Navbar.module.css"

const Scanner = () => {
  return (
    <div className={styles.scannerbox} >
        <div>
          <img src="https://a.travel-assets.com/mad-service/footer/marquee/TVLY_App_Footer_v1.jpg"/>
        </div>
        <div>
            <h1>Мандруйте мудро з веб-додатком Travel</h1>
            <ul>
                <li>Отримуйте корисні сповіщення про статус рейсу та акційні пропозиції</li>
                <li>Отримувати інформацію щодо до всіх деталей подорожі</li>
                <li>Легко зв’яжіться зі своїм готелем, залишаючи їм свій номер телефону прямо у веб-додатку</li>
            </ul>
            <h3>Напишіть собі текстове посилання для завантаження</h3>
            <div className={styles.scannerinput}>
               <input type="number" placeholder='Код країни' />
               <input type="number"  placeholder='Номер мобільного телефону'/>
               <button>Отримати програму</button>
            </div>
            <p>Надаючи свій номер, ви погоджуєтеся отримати одноразове автоматичне текстове повідомлення з посиланням для отримання інформації на пошту. Можуть застосовуватися стандартні тарифи на текстові повідомлення.</p>
        </div>
    </div> 
  )
}

export default Scanner