import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { highReviewCost, highReviewRating, reviewGreaterThan1k } from '../Redux/hotels/action';


const PopularFilter = () => {
 const[check1,setCheck1]=useState(false);
 const[check2,setCheck2]=useState(false)
 const[check3,setCheck3]=useState(false)
 const dispatch=useDispatch()
const handleChange1=(e)=>{
let check=e.target.checked;
setCheck1(check);
if(check===true){
dispatch(reviewGreaterThan1k())
}
setCheck2(false)
setCheck3(false)
}
const handleChange2=(e)=>{
   let check=e.target.checked;
   setCheck2(check);
if(check===true){
dispatch(highReviewRating())
}
setCheck3(false)
setCheck1(false)
}
const handleChange3=(e)=>{
   let check=e.target.checked;
   setCheck3(check);
if(check===true){
dispatch(highReviewCost())
}
setCheck1(false)
setCheck2(false)
}
  return (
   <div>
   <h2>Фільтрувати за</h2>
   <h3>Популярні фільтри</h3>
   <div id="popsort">
       <div>
          <input type="checkbox" checked={check1} onChange={handleChange1} label="Безкоштовний трансфер до аеропорту"/>
          <p>Відгуки більше ніж 1k</p>
       </div>
       <div>
          <input type="checkbox" checked={check2} onChange={handleChange2} />
          <p>Високий огляд і рейтинг</p>
       </div>
       <div>
         <input type="checkbox" checked={check3} onChange={handleChange3} />
         <p>Висока вартість і рейтинг</p>
       </div>  
       <div>
           <input type="checkbox" name="Hot tub" /> 
           <p>Все включено</p>
       </div>
        
    </div>

</div>
  )
}

export default PopularFilter