import { Link } from "react-router-dom";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <img
        className={styles.contactChild}
        alt=""
        src="./rectangle-99211@2x.png"
      />
      <div className={styles.contactInner}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.enquireUsParent}>
              <div className={styles.enquireUs}>Enquire us</div>
              <div className={styles.loremIpsumDolorContainer}>
                <span className={styles.loremIpsumDolorContainer1}>
                  <span className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur adipiscing
                  </span>
                  <b>{` `}</b>
                  <span
                    className={styles.loremIpsumDolor}
                  >{`elit, sed Lorem ipsum r sit amet consectetur `}</span>
                </span>
              </div>
            </div>
          </div>
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur `}</div>
          <div className={styles.button}>
            <div className={styles.explore}>
              <Link
                to="/contact-us"
                style={{ color: "white", textDecoration: "none" }}
              >
                <div className={styles.explore}>Contact us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
