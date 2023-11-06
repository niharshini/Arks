import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="./group-137.svg" />
        <div className={styles.div}>+919999999999</div>
      </div>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="./group-138.svg" />
        <a
          className={styles.infoarksindiacom}
          href={`http://login.secureserver.net/index.php?app=wbe&logout=1`}
          target="_blank"
        >
          info@arksindia.com
        </a>
      </div>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="./group-138.svg" />
        <div className={styles.div}>arks@gmail.com</div>
      </div>
    </div>
  );
};

export default ContactSection;
