import styles from "./styleSection2.module.css";
import React from 'react';
import "../header/Header"


export const Section2 = () => {


    return(
        <div id={"aboutUs"} className={styles.plate}>
            <div className={styles.left}>
                <p className={styles.large}>InRoad – проект некоммерческого <br/> проектно-образовательного фонда <br/>Sinet Spark</p>
            </div>
            <div className={styles.right}>
                <p className={styles.simple}>Главная цель проекта – собрать и фиксировать с помощью смартфона данные о состоянии дорог. Это поможет автолюбителям при выборе маршрута.  А администрация города может использовать данные при планировании ремонта дорог, а также отслеживать динамику ухудшения дорожного покрытия.</p>
            </div>

        </div>
    )

}


export default Section2;
