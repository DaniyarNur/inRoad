import styles from "./styleSection3.module.css";
import speed from '../../assets/speed.png'
import coordinates from '../../assets/coordinates.png'
import accelerometer from '../../assets/accelerometer.png'
import React from 'react';
import Feature from "./Feature";

export const Section3 = () => {

    return(
        <div className={styles.plate}>
            <p className={styles.title}>Как это работает</p>
            <div className={styles.innerBlock}>
                <p className={styles.simple}>Приложение основано на обработке <br/> трех основных типов данных:</p>
                <div className={styles.rightBlock}>
                    <div className={styles.topBar}>
                        <Feature image={coordinates} label="координаты" />
                        <Feature image={speed} label="скорость" />
                        <Feature image={accelerometer} label="акселерометр" />
                    </div>
                    <p className={styles.smaller}>Перед поездкой необходимо запустить приложение и дать доступ к геолокации. При наезде автомобиля на неровность приложение автоматически ставит отметку на карте.</p>
                </div>
            </div>


        </div>
    )

}


export default Section3;
