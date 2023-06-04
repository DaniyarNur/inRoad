import styles from "./styleSection5.module.css";
import React from 'react';
import teamPhoto from "../../assets/teamphoto.png";


export const Section5 = () => {

    return(
        <div className={styles.plate}>
            <div className={styles.left}>
                <img src={teamPhoto} alt={'team photo'} className={styles.teamPhoto}/>
            </div>
            <div className={styles.right}>
                <p className={styles.speechBubble}>«Наша команда состоит из ребят разных курсов и факультетов. Все, что нас объединяет, это желание сделать наш город лучше и научиться чему-то новому. Мы решаем проблему, с которой жители города сталкиваются каждый день – плохое качество дорог. Проблема сложная, но под руководством опытных экспертов и тимлидов мы сможем внести вклад в развитие нашего города»</p>
            </div>


        </div>
    )

}


export default Section5;
