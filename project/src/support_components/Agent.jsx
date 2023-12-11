import React from 'react'
import EventBusyIcon from '@mui/icons-material/EventBusy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ForumIcon from '@mui/icons-material/Forum';
import styles from "./Support.module.css"

const Agent = () => {
  return (
    <div className={styles.agentbox}>
        <h1>Ваш віртуальний агент тут, щоб допомогти..</h1>
        <div className={styles.agent}>
            <div>
                <EventBusyIcon/>
                <h3>Скасувати свою поїздку</h3>
            </div>
            <div>
                 <CalendarMonthIcon/>
                 <h3>Змінити свою подорож</h3>
            </div>
            <div>
                 <DomainVerificationIcon/>
                 <h3>Запитати про відшкодування</h3>
            </div>
            <div>
               <ForumIcon/>
               <h3>Спілкуватися зараз</h3>
            </div>
        </div>
    </div>
  )
}

export default Agent