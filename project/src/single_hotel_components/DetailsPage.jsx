import React from "react";
import CellWifiIcon from '@mui/icons-material/CellWifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import styles from "./rooms.module.css";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const DetailsPage = () => {
  let hotel=  JSON.parse(localStorage.getItem("singleHotel"))||"";
  if(hotel===""){
    return;
  }


  return (
    <div className={styles.maindiv}>
      <div className={styles.infoDiv}>
        <div className={styles.heading}>
          <h1>
            {hotel.Name}
          </h1>
          <img
            style={{ height: "70px", width: "70px" }}
            src="https://cdn-icons-png.flaticon.com/512/992/992001.png"
            alt=""
          />
          <h3>{hotel.Rating}/5 Good</h3>
          <p>Гості оцінили це помешкання {hotel.Rating}/5 за чистоту.</p>
          <a href=".#">Побачити всі {hotel.Review} відгуки</a>
        </div>
        {/* 2nd div info  */}
        <div>
          <div className={styles.info}>
            <h3>Популярні зручності</h3>
            <div className={styles.div1}>
              <div>
                <div className={styles.map}>
                 <CellWifiIcon/>
                  <p>Безкоштовний Wifi</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1076/1076928.png"
                    alt=""
                  />
                  <p>Допускається розміщення з домашніми тваринами</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/900/900233.png"
                    alt=""
                  />
                  <p>Кондиціонер</p>
                </div>
                <a href=".#">See all</a>
              </div>
              {/* 2ns half  */}
              <div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2438/2438018.png"
                    alt=""
                  />
                  <p>Спа</p>
                </div>
                <div className={styles.map}>
                  <RestaurantIcon/>
                  <p>Ресторан</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/563/563828.png"
                    alt=""
                  />
                  <p>Спортивний зал</p>
                </div>
              </div>
            </div>
          </div>

          {/* cleaning div  */}

          <div className={styles.info}>
            <h3>Популярні зручності</h3>
            <div className={styles.div1}>
              <div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/995/995053.png"
                    alt=""
                  />
                  <p>Засоби захисту</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/66/66163.png"
                    alt=""
                  />
                  <p>72-годинна вільність між проживанням у номерах</p>
                </div>
                <a href=".#">Побачити все</a>
              </div>
              {/* 2ns half  */}
              <div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2913/2913371.png"
                    alt=""
                  />
                  <p>Надаються засоби для гігієнічних процедур</p>
                </div>
                <div className={styles.map}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3365/3365408.png"
                    alt=""
                  />
                  <p>72-годинна вільність між проживанням у номерах</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map div starts   */}
      <div className={styles.mapDiv}>
        <div>
          <iframe
            width="393"
            height="290"
            src="https://www.youtube.com/embed/CHSnz0bCaUk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3>Дослідіть місцевість</h3>
        <div className={styles.map}>
         <ArrowCircleUpIcon/>
          <p>Наявність ліфту</p>
          <div>
            {" "}
            <p>13 хв пішки</p>
          </div>
        </div>
        <div className={styles.map}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
            alt=""
          />
          <p>Термінал круїзних суден порту Генуя</p>
          <div>
            <p>13 хв пішки</p>
          </div>
        </div>
        <div className={styles.map}>
          <LabelImportantIcon/>
          <p>Старий порт</p>
          <div>
            {" "}
            <p>13 хв пішки</p>
          </div>
        </div>
        <div className={styles.map}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/723/723955.png"
            alt=""
          />
          <p>Генуя (GOA-Cristoforo Colombo)</p>
          <div>
            <p>8 хв пішки</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
