import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./root-styles/PartnerWithUs.module.css";
import BackgroundImage from "../assets/placeholder_img1.png";

export default function PartnerWithUsComponent() {
  return (
    <div
      className={styles.parentComponent}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${BackgroundImage})`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.title}>{"Partner with  an evolving force"}</div>
        <div className={styles.info}>
          {
            "As we continue to scale new heights, our capabilities expand, and our impact deepens. Partner with ARKS to access a growing force in the defense and aerospace industry, where innovation and excellence are at the core of everything we do."
          }
        </div>
        <div className={styles.info}>
          {"Explore the possibilities with ARKS"}
        </div>

        <div className={styles.buttonContainer} onClick={() => {}}>
          <NavLink
            to={"/products"}
            style={{ color: "white", textDecoration: "none" }}
          >
            <div className={styles.exploreButton}>VIEW PRODUCTS</div>
          </NavLink>
         
        </div>
      </div>
    </div>
  );
}
