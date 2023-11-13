import styles from "./root-styles/consumerCard.module.css"
import {NavLink} from "react-router-dom";

export default function ConsumerCard({image, title, description, to}) {
    return (
        <div className={styles.card}>
            <img
                src={image}
                alt="Red iPhone 15" style={{width: "100%", height: "280px", borderRadius:"10px 10px 0 0"}}/>
            <div className={styles.container}>
                {title?<span className={styles.cardTitle}>
                    {title}
                    </span>:<></>}
                {description ? <span className={styles.cardDescription}>{description}</span> : <></>}
                {to ? <div className={styles.button} style={{marginTop: "20px", width: "100%"}}>
                    <NavLink to={"/contact-us"}>
                        Know More <i className="fas fa-arrow-right" style={{marginLeft: "10px"}}></i>
                    </NavLink>
                </div> : <></>}
            </div>
        </div>
    )
}