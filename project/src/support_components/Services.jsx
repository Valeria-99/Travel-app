import React from 'react'
import styles from "./Support.module.css"


const Services = () => {
  return (
    <div>
        <div className={styles.services}>
            <p>Путівки</p>
            <p>Статус</p>
            <p>Автомобілі</p>
            <p>Авіарейси</p>
            <p>Круїзи</p>
            <p>Речі, які потрібно зробити</p>
            <p>Подорожі для бізнес партнерів</p>
            <p>Екскурсії</p>
            <p>Туристичні пропозиції</p>
            <p>Групи та зустрічі</p>
        </div>
        <div className={styles.imgservice}>
            <div>
                <h1>Митнє обслуговування</h1>
                <input type="text" placeholder='Пошук'/>
            </div>
        </div>
    </div>
  )
}

export default Services