import styles from "./Capabilities.module.css";

const Capabilities = () => {
  return (
    <div className={styles.capabilities}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-99111@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.whatWeCanDoParent}>
              <div className={styles.whatWeCan}>{`What we can do? `}</div>
              <div className={styles.loremIpsumDolorContainer}>
                <span className={styles.loremIpsumDolorContainer1}>
                  <p className={styles.loremIpsumDolorSitAmetCon}>
                    <span className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet consectetur adipiscing
                    </span>
                    <b className={styles.b}>{` `}</b>
                    <span className={styles.elitSed}>elit, sed</span>
                  </p>
                  <p
                    className={styles.loremIpsumR}
                  >{`Lorem ipsum r sit amet consectetur `}</p>
                </span>
              </div>
            </div>
          </div>
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur `}</div>
          <div className={styles.button}>
            <div className={styles.explore}>View capabilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
