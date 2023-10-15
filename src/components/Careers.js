import styles from "./Careers.module.css";

const Careers = () => {
  return (
    <div className={styles.careers}>
      <img
        className={styles.businessPeopleCasualMeetingIcon}
        alt=""
        src="/businesspeoplecasualmeeting-1@2x.png"
      />
      <div className={styles.careersInner}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.joinUsParent}>
              <div className={styles.joinUs}>{`Join us? `}</div>
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
            <div className={styles.explore}>View careers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
