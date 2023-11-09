import styles from "./HeroSection.module.css";
import banner from "../assets/home-assets/heroBanner.png"
const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <img
                className={styles.heroImage}
                alt=""
                src={banner}
            />
            <div className={styles.overlay} />

            <div className={styles.taglineContainer}>
                <b className={styles.tagline}>Innovate. Customize. Grow.</b>
            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.exploreButton}>Explore</div>
            </div>
        </div>
    );
};

export default HeroSection;
