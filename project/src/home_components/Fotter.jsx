import React from 'react'
import styles from "./Navbar.module.css"


const Fotter = () => {
  return (
    <>
     <div className={styles.footer}>
       <div>
         <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"/>
       </div>
       <div>
           <h3>Компанія</h3>
           <p>Про нас</p>
           <p>Робота</p>
           <p>Перерахуйте свою власність</p>
           <p>Співробітництво</p>
           <p>Блог</p>
           <p>Відносини з інвесторами</p>
           <p>Роумінг Grome Store</p>
           <p>Реклама</p>
       </div>
       <div>
           <h3>Досліджуйте</h3>
           <p>Готелі в США</p>
           <p>Відпустка для бізнес партнерів в США</p>
           <p>Пакет відпочинку в Юнайтед</p>
           <p>Внутрішні рейси</p>
           <p>Оренда автомобілів у США</p>
           <p>Travel Відгуки</p>
           <p>Travel Купони</p>
           <p>Унікальні місця для проживання</p>
           <p>Блог подорожей</p>
       </div>
       <div>
           <h3>Політика</h3>
           <p>Політика конфіденційності</p>
           <p>Умови користування</p>
           <p>Надання умов використання</p>
           <p>Доступність</p>
           <p>Не передаєм особисту інформацію</p>
       </div>
       <div>
           <h3>Допомога</h3>
           <p>Підтримка</p>
           <p>Скасувати бронювання готелів або оренди на час відпустки</p>
           <p>Скасувати рейс</p>
           <p>Графіки, політики та процеси відшкодування</p>
           <p>Скористайтеся купоном Travel</p>
       </div>
    </div>
    <div style={{width:"90%", margin:"auto",textAlign:"center",fontSize:"13px",color:"grey"}}>
        <p>© 2022 Travel LLC, компанія Expedia Group. Всі права захищені.</p>
        <p>Travel, Stars Design і The Roaming Gnome Design є товарними знаками або зареєстрованими товарними знаками Travel LLC. CST# 2056372-50.</p>
    </div>
    </>
  )
}

export default Fotter