import React from "react";
import styles from "./rooms.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Photos = () => {
  let hotel=  JSON.parse(localStorage.getItem("singleHotel"))||"";
  if(hotel===""){
    return;
  }
  return (
    <>
    <div className={styles.headers}>
        {" "}
      <div style={{display:"flex", gap:"10px",alignItems:"center"}}>
        <h3>Вибрати своє перебування </h3>
        <ArrowForwardIosIcon/>
        <p>Вибрати відлітаючий рейс</p>
        <ArrowForwardIosIcon/>
        <p>Виберати зворотній рейс</p>
        <ArrowForwardIosIcon/>
        <p>Перегляньте свою подорож</p>
      </div>
    </div>
      <div className={styles.imggrid}>
        <div id={styles.a}>
          <img
            src={hotel.url}
            alt=""
          />
        </div>
        <div className={styles.grid}>
          <div id={styles.b}>
            <img
              src={hotel.img1}
              alt=""
            />
          </div>
          <div id={styles.b}>
            <img
              src={hotel.img2}
              alt=""
            />
          </div>
          <div id={styles.b}>
            <img
              src={hotel.img3}
              alt=""
            />
          </div>
          <div id={styles.b}>
            <img
              src={hotel.img4}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
