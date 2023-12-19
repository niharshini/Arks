import styles from "./HeroSection.module.css";
import banner from "../assets/home_banner.gif"
import CarouselCommon from "../root-components/carousel-common";
import {Link} from "react-router-dom";
const HeroSection = ({onButtonClick}) => {

    return (
        <div className={styles.heroSection}>
            <img
                className={styles.heroImage}
                alt=""
                src={banner}
            />
            <div className={styles.overlay} />

            <div className={styles.taglineContainer}>
                <span><b className={`${styles.tagline} ${styles.taglineLast}`}>Imagine</b></span>
                {/* <span><b className={styles.tagline}>Customize.</b></span> */}
                <span><b className={`${styles.tagline} ${styles.taglineLast}`}>Innovation</b></span>
            </div>

            <div className={styles.buttonContainer} onClick={onButtonClick}>
                <div className={styles.exploreButton}>Explore</div>
            </div>
        </div>
    );
};

export default HeroSection;
