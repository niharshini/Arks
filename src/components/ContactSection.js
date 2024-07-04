import styles from "./ContactSection.module.css";

import phoneIcon from "../assets/common/phone-contact.svg";
import emailIcon from "../assets/common/email-contact.svg";

const ContactSection = () => {
  return (
    <div className={styles.contactSectionParent}>
      <div className={styles.contactSectionContainer}>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src={phoneIcon} />
          <div>+91&nbsp;9999999999</div>
        </div>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src={emailIcon} />
          <div>
            info@arksindia.com
          </div>
        </div>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src={emailIcon} />
          <div>arks@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
