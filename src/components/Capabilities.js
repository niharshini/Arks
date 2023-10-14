import styles from "./Capabilities.module.css";

const Capabilities = () => {
  return (
    <div className={styles.capabilities}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.whatWeCan}>{`What we can Do? `}</div>
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
          <p className={styles.loremIpsumDolor}>
            adipiscing elit, sed Lorem ipsum dolor sit amet consectetur
            adipiscing elit,
          </p>
          <p className={styles.loremIpsumDolor}>
            sed Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
            Lorem
          </p>
          <p className={styles.loremIpsumDolor}>
            dolor sit amet consectetur adipiscing elit, sed Lorem ipsum dolor
            sit amet
          </p>
          <p
            className={styles.loremIpsumDolor}
          >{`consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur `}</p>
          <p className={styles.loremIpsumDolor}>
            adipiscing elit, sed Lorem ipsum dolor sit amet consectetur
            adipiscing elit,
          </p>
          <p
            className={styles.loremIpsumDolor}
          >{`sed Lorem ipsum dolor sit amet consectetur adipiscing elit, sed  `}</p>
        </div>
        <div className={styles.button}>
          <div className={styles.explore}>View Capabilities</div>
        </div>
      </div>
      <img
        className={styles.capabilitiesChild}
        alt=""
        src="/rectangle-99@2x.png"
      />
    </div>
  );
};

export default Capabilities;
