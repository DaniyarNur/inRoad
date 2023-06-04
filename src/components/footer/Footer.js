import styles from "./styleFooter.module.css";
import React from 'react';
import logo from "../../assets/whitelogo.png";


export const Footer = () => {

    const handleClickScrollAboutUs = () => {
        const aboutUs = document.getElementById('aboutUs');

        if (aboutUs) {
            aboutUs.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleClickScrollReviews = () => {
        const reviews = document.getElementById('reviews');

        if (reviews) {
            reviews.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <div className={styles.footer}>
            <div className={styles.company}>
                <div className={styles.logoDiv}>
                    <img src={logo} alt={"logo"} className={styles.logo}/>
                </div>
                <p className={styles.rights}>© 2022 inRoad. Все права защищены.</p>
            </div>

            <div className={styles.contactUs}>
                <p className={styles.bold}>Связаться с нами</p>
                <p className={styles.simple}>+7 (999) 123-45-67</p>
                <p className={styles.simple}>example@gmail.com</p>
            </div>

            <div className={styles.links}>
                <p onClick={handleClickScrollAboutUs} className={[styles.bold, styles.cursorOnHover].join(' ')}>О нас</p>
                <p onClick={handleClickScrollReviews} className={[styles.bold, styles.cursorOnHover].join(' ')}>Отзывы и предложения</p>
                <p className={[styles.bold, styles.cursorOnHover].join(' ')}>Скачать приложение</p>

            </div>

        </div>
    )

}


export default Footer;
