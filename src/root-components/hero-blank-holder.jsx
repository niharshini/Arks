import styles from "./root-styles/hero-blank-holder.module.css";
const HeroSection = ({image}) => {

    return (
        <div className={styles.heroSection}>
            <img
                className={styles.heroImage}
                alt=""
                src={image}
            />
            <div className={styles.overlay} />
        </div>
    );
};

export default HeroSection;
