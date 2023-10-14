import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.button}>
        <div className={styles.explore}>contact us</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.enquireUs}>Enquire us</div>
        </div>
        <div className={styles.loremIpsumDolorContainer}>
          <p
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing `}</p>
          <p className={styles.loremIpsumDolor}>
            elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum
          </p>
        </div>
      </div>
      <img
        className={styles.contactUsChild}
        alt=""
        src="/rectangle-100@2x.png"
      />
    </div>
  );
};

export default ContactUs;
