import styles from "./styleFeature.module.css";
import React from 'react';


export const Feature = ({ image, label }) => {

    return (
        <div className={styles.plate}>
            <img src={image} alt="icon" className={styles.icon}/>
            <p className={styles.simple}>{label}</p>
        </div>
    );

}


export default Feature;
