import styles from "./HeroSection.module.css";
import banner from "../assets/home_banner.gif"
import CarouselCommon from "../root-components/carousel-common";
const HeroSection = ({ onButtonClick }) => {

    return (
        <div className={styles.heroSection}>
            <img
                className={styles.heroImage}
                alt=""
                src={banner}
            />
            <div className={styles.overlay} />

            <div className={styles.taglineContainer}>
                <span><b className={`${styles.tagline} ${styles.taglineLast}`}>Innovate.</b></span>
                <span><b className={styles.tagline}>Customize.</b></span>
                <span><b className={`${styles.tagline} ${styles.taglineLast}`}>Grow.</b></span>
            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.exploreButton} onClick={onButtonClick}>Explore</div>
            </div>
        </div>
    );
};

export default HeroSection;
