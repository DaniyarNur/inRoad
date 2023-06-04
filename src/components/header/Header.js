import styles from "./styleHeader.module.css";
import logo from '../../assets/logo.png'
import React from 'react';
import "../section2/Section2"

export const Header = () => {

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
        <div className={styles.header}>

            <div className={styles.logoDiv}>
                <img className={styles.logo} src={logo} alt={'logo'}/>
            </div>

            <nav className={styles.navbar}>
                <div onClick={handleClickScrollAboutUs} className={[styles.navButton, styles.bottom, styles.cursorOnHover].join(' ')}>
                    О НАС
                </div>

                <div onClick={handleClickScrollReviews} className={[styles.navButton, styles.bottom, styles.cursorOnHover].join(' ')}>
                    ОТЗЫВЫ И ПРЕДЛОЖЕНИЯ
                </div>
            </nav>

            <div className={styles.langPick}>
                <div className={[styles.lang, styles.picked].join(' ')}>
                    РУС
                </div>

                <div className={[styles.lang, styles.cursorOnHover].join(" ")}>
                    ENG
                </div>

                <div className={[styles.lang, styles.cursorOnHover].join(" ")}>
                    ҚАЗ
                </div>
            </div>

        </div>
    )

}


export default Header;
