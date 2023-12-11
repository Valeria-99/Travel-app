import React from 'react'
import styles from "./Navbar.module.css"

const BigGrid = () => {
  return (
    <div className={styles.bigslidebox}>
       <div className={styles.bigslide1}>
         <h2>Курорт "все включено".</h2>
         <p>Не думайте ні про що, крім наявності, <br />чудово проведіть час з сім'єю.</p><br />
         <button>Переглянути пропозиції</button>
       </div>
       <div className={styles.bigslide2}>
       <h2>Втечі в останні хвилини</h2>
         <p>Святкуйте моменти з <br />несподіваними поїздками</p><br />
         <button>Переглянути пропозиції</button>
       </div>
    </div>
  )
}

export default BigGrid