import React from 'react'
import Shutter from '../home_components/Shutter'
import styles from "./Support.module.css"


const Topics = () => {
  return (
    <div className={styles.topicbox}>
    <div>
        <p>Перегляньте теми довідки</p>
    </div>
    <div style={{textAlign:"center"}}>
        <p>Популярні теми</p>
    </div>
    <div className={styles.topics}>
        <div>
            <Shutter props="Поїздки"/>
            <Shutter props="Готелі"/>
            <Shutter props="Тури"/>
            <Shutter props="Оренда"/>
            <Shutter props="Круїзи"/>
            <Shutter props="Екскурсії"/>
            <Shutter props="Інше"/>
            <Shutter props="Сповіщення про подорожі"/>
        </div>
        <div>
        <Shutter props="Графік, політика та процес повернення коштів"/>
        <Shutter props="Забронюйте квиток за допомогою кредиту авіакомпанії"/>
        <Shutter props="Подарункові картки"/>
        <Shutter props="Страхування рейсів"/>
        <Shutter props="Розсилка акцій на електронну пошту"/>
        <Shutter props="Скасуйте свій пакет відпустки"/>
        <Shutter props="Можливість оплати в готелі"/>
        <Shutter props="Зміна рейсу"/>
        <Shutter props="Бронювання дешевих авіакомпаній"/>
        <Shutter props="Про нереальну угоду та економію пакету"/>
        </div>
    </div>
   <h3 className={styles.addproperty}>Додати свій вибір</h3>

</div>
  )
}

export default Topics