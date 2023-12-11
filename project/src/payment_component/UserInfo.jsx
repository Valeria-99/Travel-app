import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import styles from "./Payment.module.css"
import PersonIcon from '@mui/icons-material/Person';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
const UserInfo = () => {
    let user= JSON.parse(localStorage.getItem("loginperson"))
  return (
    <div>
    <div className={styles.emailbox}>
       <LockIcon/>
       <div>
           <h3>Ви ввійшли як</h3>
           <p>{user.email}</p>
       </div>
    </div>
    <div className={styles.loadformbox}>
        <div className={styles.personicon}>
            <PersonIcon/>
            <h3>Кімната 1: <span>2 дорослих, 1 велике ліжко</span></h3>
        </div>
        <div className={styles.done}>
           <DoneOutlineIcon style={{fontSize:"18px",color:"green"}}/>
           <p>Безкоштовна парковка</p>
           <DoneOutlineIcon style={{fontSize:"18px",color:"green"}} />
           <p>Безкоштовний WiFi</p>
        </div>
        <div className={styles.tname}>
            <p>Ім'я мандрівника<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
            <select>
                <option value="Aman">{user.firstname} {user.lastname}</option>
                <option>Додати учасника</option>
                <option>Удалити учасника</option>
            </select>
        </div>
        <div className={styles.startform}>
         <div>
            <div>
                <p>Ім'я<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
                <input type="text" className={styles.lastinput}  />
            </div>
            <div>
                <p>Прізвище<sup style={{color:"red",fontSize:"20px"}} >*</sup></p>
                <input className={styles.lastinput} type="text"  />
            </div>
         </div> 
            <div><p>Мобільний телефон<sup style={{color:"red",fontSize:"20px"}} >*</sup></p></div>
            <div>
                <select>
                    <option >код +91</option>
                    <option value="">Америка +1</option>
                </select>
                <input type="number" className={styles.lastinput2} placeholder='Таким чином можна зв’язатися з вами' />
            </div>
            <div>
                <input style={{width:"20px",height:"20px",marginTop:"20px"}} type="checkbox" />
                <label style={{marginTop:"20px",marginLeft:"-15px"}}>Отримувати текстові сповіщення про цю поїздку. Може стягуватися плата за повідомлення та дані..</label>
            </div>
            <p style={{color:"#0a438b"}} >Запити на куріння (optional) </p>
            <p style={{color:"#0a438b"}}>Запити спеціальні (optional)</p>
        </div>
    </div>
</div>
  )
}

export default UserInfo