import React from 'react'
import styles from "./Navbar.module.css"
const Video = () => {
  return (
    <>
    <div className={styles.video}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/hQ0n9gxAAmc?si=HFkW1oQGo1AOjD3m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <h1 style={{width:"90%",margin:"auto",marginTop:"30px"}}>Тут, щоб допомогти вам бути в русі</h1>
    <div className={styles.belowvideo}>
        <div>
            <h3>Змініть та скасуйте план</h3>
            <p>Оновіть свій маршрут або скасуйте бронювання</p>
        </div>
        <div>
            <h3>Використовуйте кредит або купон</h3>
            <p>Застосуйте купон або кредит на нову поїздку</p>
        </div>
        <div>
            <h3>Відстежуйте відшкодування</h3>
            <p>Перевірте статус відшкодування, яке зараз виконується</p>
        </div>
    </div>
    </>
  )
}

export default Video