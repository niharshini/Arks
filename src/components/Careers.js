import styles from "./Careers.module.css";

const Careers = () => {
  return (
    <div className={styles.careers}>
      <img
        className={styles.businessPeopleCasualMeetingIcon}
        alt=""
        src="/businesspeoplecasualmeeting-1@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.joinUs}>join us</div>
          </div>
          <div className={styles.loremIpsumDolorContainer}>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing `}</p>
            <p className={styles.loremIpsumDolor}>
              elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
            </p>
            <p
              className={styles.loremIpsumDolor}
            >{` dolor sit amet, consectetur adipiscing `}</p>
            <p
              className={styles.loremIpsumDolor}
            >{`elit, sed do eiusmod tempor incididunt ut labore `}</p>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.explore}>View careers</div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
