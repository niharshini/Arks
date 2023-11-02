import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.aboutUsBanner}>
      <div className={styles.aboutUsBannerChild} />
      <div className={styles.frameParent}>
        <div className={styles.groupChild} />
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.homeParent}>
              <div className={styles.home}>Home</div>
              <div className={styles.capabilities}>Capabilities</div>
              <div className={styles.capabilities}>Products</div>
              <div className={styles.capabilities}>Services</div>
              <div className={styles.capabilities}>About us</div>
              <div className={styles.capabilities}>Careers</div>
              <div className={styles.capabilities}>Community</div>
              <div className={styles.capabilities}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
