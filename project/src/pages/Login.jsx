import React, { useState } from 'react'
import "../search_components/Hotel.css"
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../Redux/hotels/action';

const Login = () => {
    const navigate= useNavigate();
    let dispatch= useDispatch();
    const [loginData,setLoginData]=useState({});

    const handleChange= (e)=>{
        let field=e.target;
        if(field.type==="checkbox"){
            setLoginData({...loginData,[field.name]:field.checked})
        }else{
            setLoginData({...loginData,[field.name]:field.value})
        }
    }
    let userinfo=JSON.parse(localStorage.getItem("userinfo"))||"";
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(userinfo===""){
            alert("User Not Found Please create a account")
            navigate("/signup")
        }else{
        let flag=false;
        for(let i=0;i<userinfo.length;i++){
            if(userinfo[i].email===loginData.email&&userinfo[i].password===loginData.password){
              flag=true;
              localStorage.setItem("loginperson",JSON.stringify(userinfo[i]))
            }
        }
        if(flag===true){
           dispatch(loginSuccess())
           navigate("/")
        }else{
            alert("Invalid Credentials")
        }
      }
    }
  return (
    <div className='signupbox'>
    <div>
        <h1>Увійти</h1>
    </div>
    <form onSubmit={handleSubmit}>
        
        <div>  
            <div>
                <input  required onChange={handleChange} type="email" placeholder="Електронна пошта" name="email" className='signupinput'/>
            </div>
          
           
            <div>
            <input required onChange={handleChange}  type="password" placeholder="Пароль" name="password" className='signupinput'/>
            </div>
            <div>
             <input required onChange={handleChange}  name="signupcheck" type="checkbox" className='signupcheck' /> <label>Це загальнодоступний або спільний пристрій</label>
            </div>
            <div>
                <p>
                Створюючи обліковий запис, я погоджуюся з Travel <span id="sp1">Умови та Положення про конфіденційність.</span>
                </p>
            </div>
            <div>
                <input type="submit" className='signupsubmit' value="Продовжити" />
            </div>
        </div>
    </form>
    <div id="endsignup">
      <p id="sp1" style={{color:"#0a438b"}}>Забули пароль</p>
      <p>Немає облікового акаунту? <Link to={"/signup"}>Створити аккаунт</Link></p>    
      <p>або продовжити з</p>
      <div><AppleIcon style={{marginRight:"10px",fontSize:"30px"}}/><FacebookIcon style={{color:"blue",fontSize:"30px"}}/></div>
    </div>
</div>
  )
}

export default Login