import styles from "./HeroSection.module.css";
import banner from "../assets/home-assets/heroBanner.png"
import CarouselCommon from "../root-components/carousel-common";
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
                <span><b className={styles.tagline}>Innovate.</b></span>
                <span><b className={styles.tagline}>Customize.</b></span>
                <span><b className={styles.tagline}>Grow.</b></span>
            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.exploreButton}>Explore</div>
            </div>
        </div>
    );
};

export default HeroSection;
