import Property1Default from "./Property1Default";
import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.loremIpsumParent}>
            <div className={styles.loremIpsum}>Lorem Ipsum</div>
            <div className={styles.loremIpsumSit}>
              Lorem ipsum sit amet consectetur
            </div>
          </div>
        </div>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur elit, sed `}</div>
      </div>
      <div className={styles.cardCapabilitiesParent}>
        <Property1Default
          property1DefaultPosition="relative"
          property1DefaultOverflow="hidden"
          property1DefaultFlexShrink="0"
        />
        <Property1Default
          property1DefaultPosition="relative"
          property1DefaultOverflow="hidden"
          property1DefaultFlexShrink="0"
        />
        <Property1Default
          property1DefaultPosition="relative"
          property1DefaultOverflow="hidden"
          property1DefaultFlexShrink="0"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="./frame2.svg" />
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.frameIcon} alt="" src="./frame3.svg" />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
