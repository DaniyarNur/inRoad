import styles from "./styleSection1.module.css";
import React from 'react';
import text from "../../assets/text.png";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/googleplay.png"



export const Section1 = () => {

    return(
        <div className={styles.plate}>
            {/*<div className={styles.wrapper}>*/}
            {/*    <span className={styles.blue}>ОТСЛЕЖИВАЙТЕ</span><br/>*/}
            {/*    <div>*/}
            {/*        <div className={[styles.cwTilt, styles.blueBackground, styles.anim].join(' ')}></div>*/}
            {/*        <span>НЕРОВНОСТИ</span><br/>*/}
            {/*    </div>*/}
            {/*    /!*<span className={[styles.cwTilt, styles.blueBackground, styles.anim].join(' ')}><h1>НЕРОВНОСТИ</h1></span><br/>*!/*/}
            {/*    <span className={styles.blue}>НА ДОРОГАХ</span><br/>*/}
            {/*    <span className={styles.blue}>С <span className={[styles.ccwTilt, styles.blueBackground, styles.anim].join(' ')}>INROAD</span></span>*/}
            {/*</div>*/}
            <div className={styles.left}>
                <img src={text} alt={"text"} className={styles.text}/>
            </div>
            <div className={styles.right}>
                <p>С помощью смартфона<br/> вы можете помочь в улучшении<br/> качества дорог в вашем городе</p>
                <div className={styles.links}>
                    <a className={styles.link} href="https://www.apple.com/kz/app-store/" target="_blank"><img src={appStore} alt={"appStore"} className={styles.link}/></a>
                    <a className={styles.link} href="https://play.google.com/store/games?pli=1" target="_blank"><img src={googlePlay} className={styles.link}/></a>
                </div>
            </div>

        </div>
    )

}


export default Section1;
