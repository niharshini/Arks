import styles from "./OurCompany.module.css";

const OurCompany = () => {
  return (
    <div className={styles.ourCompany}>
      <div className={styles.frameParent}>
        <div className={styles.ourCompanyParent}>
          <div className={styles.ourCompany1}>Our Company</div>
          <div className={styles.loremIpsumDolorContainer}>
            <span className={styles.loremIpsumDolorContainer1}>
              <span className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur adipiscing
              </span>
              <b>{` `}</b>
            </span>
          </div>
        </div>
        <div className={styles.loremIpsumDolorSitAmetConParent}>
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur elit, sed `}</div>
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur elit, sed  `}</div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
