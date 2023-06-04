import styles from "./styleSection4.module.css";
import React from 'react';


export const Section2 = () => {

    return(
        <div className={styles.plate}>
            <p className={styles.title}>О нас</p>
            <div className={styles.innerBlock}>
                <div className={styles.left}>
                    <p className={styles.large}>Как вы думаете, могут ли студенты <br/> сделать крутое и полезное приложение?<br/> Мы точно знаем, что да</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.simple}>В 2022 году проектный департамент Sinet Spark организовал лабораторию Spark Lab, где студенты участвуют в реализации проектов, направленных на улучшение качества жизни родного города. Это дает им возможность получить опыт в командной работе, решении нестандартных задач, повысить свои софт и хард скилы.</p>
                </div>
            </div>
        </div>
    )

}


export default Section2;
