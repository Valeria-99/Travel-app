import React, { useState } from 'react'
import "../search_components/Hotel.css"
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
 const [signupData,setSignupData]=useState({});
 let navigate=useNavigate()

const handleChange= (e)=>{
    let field=e.target;
    if(field.type==="checkbox"){
        setSignupData({...signupData,[field.name]:field.checked})
    }else{
        setSignupData({...signupData,[field.name]:field.value})
    }
}
let userinfo= JSON.parse(localStorage.getItem("userinfo"))||[];
const handleSubmit=(e)=>{
    e.preventDefault();
    userinfo=[...userinfo,signupData]
    localStorage.setItem("userinfo",JSON.stringify(userinfo))
    navigate("/signin")
}

  return (
    <div className='signupbox'>
    <div>
        <h1>Створити аккаунт</h1>
    </div>
    <form onSubmit={handleSubmit}>
        
        <div>  
            <div>
                <input  required onChange={handleChange} type="email" placeholder="Електронна пошта" name="email" className='signupinput'/>
            </div>
            <div>
            <input required onChange={handleChange}  type="text" placeholder="Ім'я" name="firstname" className='signupinput'/>
            </div>
            <div>
            <input required onChange={handleChange}  type="text" placeholder="Прізвище" name="lastname" className='signupinput'/>
            </div>
            <div>
            <input required onChange={handleChange}  type="password" placeholder="Пароль" name="password" className='signupinput'/>
            </div>
            <div>
             <input required onChange={handleChange}  name="signupcheck" type="checkbox" className='signupcheck' /> <label>Це загальнодоступний або спільний пристрій</label>
            </div>
            <div>
                <p>
                Створюючи обліковий запис, я погоджуюся з умовами <span id="sp1">Travel та положеннями про конфіденційність.</span>
                </p>
            </div>
            <div>
                <input type="submit" className='signupsubmit' value="Продовжити" />
            </div>
        </div>
    </form>
    <div id="endsignup">
       <p>Вже є аккаунт? <Link to={"/signin"}>Увійти</Link></p>    
       <p>або продовжити з</p>
       <div><AppleIcon style={{marginRight:"10px",fontSize:"30px"}}/><FacebookIcon style={{color:"blue",fontSize:"30px"}}/></div>
     </div>
  </div>
  )
}

export default Signup