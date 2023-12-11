import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DropDownNav from './DropDownNav'
import styles from "./Navbar.module.css"


const Navbar = () => {
const login= useSelector((state)=>state.login);
const loginData= JSON.parse(localStorage.getItem("loginperson"))||"";
let navigate=useNavigate()
if(loginData!==""){
var loginperson=loginData.firstname;
}else{
  loginperson="";
}


  return (
    <div className={styles.navcontainer}>
    <div className={styles.iconbox} onClick={()=>navigate("/")} >
        <img src="https://www.travelport.com/wp-content/uploads/2021/01/tp_logo.svg"  alt="" />
        <DropDownNav/>
    </div>
    <div className={styles.navlinks}>
    <h4>Головна</h4>
    <h4><a style={{color:"white" ,fontSize:"15px"}} href="https://apps.expediapartnercentral.com/en_US/list?utm_medium=referral&utm_source=wwwtravelocitycom-en_US&utm_campaign=HomePage&utm_contentewd=pwa-header-btn&siteId=80001&tpid=80001&eapid=0&langId=1033" target="_blank">Перерахуйсте свою власність</a></h4>
    <h4 onClick={()=>navigate("/support")}>Підтримка</h4>
    <h4>Поїздки</h4>
    <h4 onClick={()=>navigate("/signin")}>{login?loginperson:"Вхід"}</h4>
    </div>
 </div>
  )
}

export default Navbar