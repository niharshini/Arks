import styles from "./OurVision.module.css";

const OurVision = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.ourVision}>Our Vision</div>
        </div>
        <div className={styles.loremIpsumDolorContainer}>
          <p
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet consectetur adipiscing elit, sedLorem ipsum `}</p>
          <p
            className={styles.loremIpsumDolor}
          >{`r sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet `}</p>
          <p
            className={styles.loremIpsumDolor}
          >{`consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur `}</p>
          <p
            className={styles.loremIpsumDolor}
          >{`adipiscing elit, sed Lorem ipsum dolor sit amet consectetur adipiscing elit,sed Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem dolor sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit ametmconsectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur adipiscing elit,sed Lorem ipsum dolor sit amet consectetur adipiscing elit, sed  `}</p>
        </div>
      </div>
      <img className={styles.frameItem} alt="" src="/rectangle-221@2x.png" />
    </div>
  );
};

export default OurVision;
