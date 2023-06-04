import styles from "./styleReviews.module.css";
import React from 'react';


export const Reviews = () => {

    return(
        <div id={"reviews"} className={styles.plate}>
            <p className={styles.title}>Отзывы и предложения</p>
            <div className={styles.box}>
                <div className={styles.left}>
                    <p className={styles.simple}>Это может быть сообщение <br/> о проблеме на дорогах или <br/>работе сайта</p>
                </div>
                <form className={styles.right}>
                    <input type={"text"} id={"name"} name={"name"} placeholder={'Ваше имя'}></input>
                    <input type={"tel"} id={"number"} name={"number"} placeholder={'Номер телефона'}></input>
                    <input type={"text"} id={"email"} name={"email"} placeholder={'Электронная почта'}></input>
                    <textarea id={"message"} name={"message"} placeholder={'Сообщение'} maxlength={1024} ></textarea>
                    <button className={[styles.send, styles.cursorOnHover].join(' ')}>ОТПРАВИТЬ →</button>
                </form>
            </div>
        </div>
    )

}


export default Reviews;
