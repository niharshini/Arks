import HeaderMasked from "./HeaderMasked";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <img
        className={styles.egvytvF8607c44f6a4612f7de80b3Icon}
        alt=""
        src="/egvytv-f8607c44f6a4612f7de80b312b12709b-000000-000021-1-1@2x.png"
      />
      <div className={styles.heroSectionChild} />
      <div className={styles.button}>
        <div className={styles.explore}>explore</div>
      </div>
      <div className={styles.innovatecustomizegrowWrapper}>
        <b className={styles.innovatecustomizegrow}>Innovate.customize.grow</b>
      </div>
      <HeaderMasked />
    </div>
  );
};

export default HeroSection;
