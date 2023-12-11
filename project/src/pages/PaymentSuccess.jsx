import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
const PaymentSuccess = () => {
  
  let style= {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding :"50px",
    textAlign:"center" 
  }
  return (

  <div style={style} >

  <h1 style={{color:"darkgreen",fontSize:"60px"}} >Бронювання успішне</h1>
  <DoneOutlineIcon style={{color:"red",fontSize:"80px"}} />
  <p style={{color:"grey",fontWeight:"600"}} >Ваше бронювання було успішним, незабаром ви отримаєте підтвердження електронною поштою.</p>
  <p style={{color:"grey",fontWeight:"600"}} >Ми сподіваємося, що вам сподобається ваша подорож.</p>
  </div>
  )
}

export default PaymentSuccess