import styles from "./OurMission.module.css";

const OurMission = () => {
  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-22@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.ourMission}>Our mission</div>
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
    </div>
  );
};

export default OurMission;
