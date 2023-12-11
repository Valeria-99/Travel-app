import React from 'react'
import styles from "./Navbar.module.css"
import Shutter from "./Shutter"

const Destination = () => {
  return (
    <div className={styles.desbox}>
        <div>
            <img src="https://s0.2mdn.net/10257150/GetIt_TheArubaEffect_babybeach_970x90_100k.jpg" alt="" />
        </div>
        <div className={styles.destination}>
            <div>
            <Shutter props="Готелі"/>
            <Shutter props="Тури"/>
            <Shutter props="Круїзи"/>
            <Shutter props="Туристичні пропозиції"/>
            </div>
            <div>
            <Shutter props="Авіарейси"/>
            <Shutter props="Автомобілі"/>
            <Shutter props="Курорти «все включено»"/>
            <Shutter props="Пляжі"/>
            </div>
           
        </div>
    </div>
  )
}

export default Destination