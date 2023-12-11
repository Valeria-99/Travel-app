import React,{useState} from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import "./Hotel.css"
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Recommended from './Recommended';
import { useNavigate } from 'react-router-dom';



const Right = () => {
  const hotels= useSelector((state)=>state.hotels)
  const navigate= useNavigate();
  
  

   return(
       <>
    <div id="Hotels">
    <Recommended/>
       
    {hotels.map((el)=>{
      return (
        <React.Fragment key={nanoid()}>
        <div onClick={()=>{
          localStorage.setItem("singleHotel",JSON.stringify(el));
          navigate("/hotel")
        }} >
          <div><img src={el.url} alt=""/></div>
          <div>
            <h2>{el.Name}</h2>
            <div>{el.Location}</div>
            <div>Повертається </div>
            <div>До понеділка 16 травня</div>
            <div>Забронюй зараз, плати пізніше</div>
            <span><b>{el.Rating}/5.0</b></span><span> Чудово </span><span>({el.Review} reviews)</span>
          </div>
          <div id="cost">
            <div>${el.Cost}</div>
          </div>
        </div>
        </React.Fragment>
      )
    })}
    </div>
    </>  
   )
}

export default Right