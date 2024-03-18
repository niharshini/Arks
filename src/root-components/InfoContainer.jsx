import React from "react";

import styles from "./root-styles/info-container.module.css";


function InfoContainer ({ headers, info, image, reverse = false}) {
    return (
        <div className={styles.parentContainer}>
           <div className={styles.infoContainer}>
                {
                    reverse && 
                    <div className={styles.imageSection}>
                        <img className={styles.image} src={image} alt="Effective Technology Integration" />
                    </div>
                }
                <div className={styles.textSection}>
                    {headers && headers.length > 1 && 
                        <div className={styles.headers}>
                            {headers.map(headerText => <div className={styles.header}>{headerText}</div>)}
                        </div>
                    }
                    
                    {info && <div className={styles.info}>{info}</div>}
                </div>
                {
                    !reverse && 
                    <div className={styles.imageSection}>
                        <img className={styles.image} src={image} alt="Effective Technology Integration" />
                    </div>
                }
           </div>
        </div>
    );
    
}

export default InfoContainer;