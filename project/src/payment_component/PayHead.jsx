import React from 'react'
import styles from "./Payment.module.css"
import RuleFolderIcon from '@mui/icons-material/RuleFolder';

const PayHead = () => {
  return (
    <div className={styles.payhead}>
    <div>
        <h1>Безпечне бронювання — лише 2 хвилини!</h1>
    </div>
    <div className={styles.lowhead}>
        <RuleFolderIcon style={{borderRadius:"50%",background:"lightgrey",fontSize:"30px",padding:"7px"}}/>
        <div>
            <p>Безкоштовне скасування до середи, 18 травня, 14:00 (за місцевим часом готелю)</p>
            <p>Ви можете змінити або скасувати це перебування для повного відшкодування, якщо плани зміняться. Оскільки гнучкість має значення.</p>
        </div>
    </div>
</div>
  )
}

export default PayHead