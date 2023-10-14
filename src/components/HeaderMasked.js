import Header from "./Header";
import styles from "./HeaderMasked.module.css";

const HeaderMasked = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.groupChild} />
      <Header
        dimensions="/image-12@2x.png"
        property1Variant2Position="absolute"
        property1Variant2Top="23.51px"
        property1Variant2Left="160px"
      />
    </div>
  );
};

export default HeaderMasked;
