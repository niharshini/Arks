import React from "react";
import styles from "./root-styles/CardComponent.module.css";

export default function CardComponent({ title, info }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{info}</div>
    </div>
  );
}
