import React from "react";
import CardComponent from "./CardComponent";

import styles from "./root-styles/background-focus-container.module.css";
import BackgroundImage from "../assets/placeholder_img1.png";


export default function BackgroundFocusComponent({title, info, cardsInfo}) {
    return (
        <div className={styles.parentComponent} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${BackgroundImage})`}}>
            <div className={styles.container}>
                <div className={styles.title}>{title}</div>
                <div className={styles.info}>{info}</div>
                <div className={styles.cardsContainer}>
                    {
                        cardsInfo?.map(cardInfo => <CardComponent title={cardInfo.title} info={cardInfo.info}/>)
                    }
                </div>
            </div>
        </div>
    );
}