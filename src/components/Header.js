import { useMemo } from "react";
import styles from "./Header.module.css";

const Header = ({
  dimensions,
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [property1Variant2Position, property1Variant2Top, property1Variant2Left]);

  return (
    <div className={styles.property1variant2} style={property1Variant2Style}>
      <div className={styles.logo}>
        <img className={styles.image1Icon} alt="" src={dimensions} />
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
  );
};

export default Header;
