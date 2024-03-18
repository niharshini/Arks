import React from "react";
import styles from "./root-styles/CardComponent2.module.css";

export default function CardComponent2({ title, info }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{info}</div>
    </div>
  );
}
