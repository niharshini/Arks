import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer3}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/line-11.svg" />
        <div className={styles.copyright2023}>
          Copyright © 2023 ARKS MicroElectronics India Pvt.Ltd. All rights
          reserved.
        </div>
        <div className={styles.column}>
          <div className={styles.linkList}>
            <div className={styles.capabilities}>Capabilities</div>
            <div className={styles.capabilities}>Careers</div>
            <div className={styles.capabilities}>About Us</div>
            <div className={styles.capabilities}>Enquiry</div>
          </div>
          <div className={styles.linkList1}>
            <div className={styles.capabilities}>Products</div>
            <div className={styles.capabilities}>Services</div>
            <div className={styles.capabilities}>Community</div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.followUsOnParent}>
            <div className={styles.followUsOn}>{`Follow us on `}</div>
            <div className={styles.instagramParent}>
              <img
                className={styles.instagramIcon}
                alt=""
                src="/instagram@2x.png"
              />
              <img
                className={styles.instagramIcon}
                alt=""
                src="/linkedin@2x.png"
              />
              <img
                className={styles.instagramIcon}
                alt=""
                src="/twitter@2x.png"
              />
              <img
                className={styles.instagramIcon}
                alt=""
                src="/facebook@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.gmailParent}>
              <img
                className={styles.instagramIcon}
                alt=""
                src="/gmail1@2x.png"
              />
              <div className={styles.capabilities}>info@arksindia.com</div>
            </div>
            <div className={styles.phoneParent}>
              <img className={styles.phoneIcon} alt="" src="/phone1@2x.png" />
              <div className={styles.div}>
                <p className={styles.p}>+91-891-6522044</p>
                <p className={styles.p}>+91-998-5197555</p>
              </div>
            </div>
            <div className={styles.followUsOn}>Get in touch with us today</div>
          </div>
        </div>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
          </div>
          <div className={styles.plotNo5PadmanayaniContainer}>
            <p className={styles.p}>Plot No:5, Padmanayani Nilayam,</p>
            <p className={styles.p}>Sapthagiri Nagar, Chinamusidiwada,</p>
            <p className={styles.p}>Visakhapatnam-531173,</p>
            <p className={styles.p}>Andhra Pradesh, INDIA.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
