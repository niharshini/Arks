import Banner from "../components/Banner";
import Technologies from "../components/Technologies";
import QualtyControl from "../components/QualtyControl";
import FormContainer from "../components/FormContainer";
import styles from "./CapabilitiesRevised.module.css";

const CapabilitiesRevised = () => {
  return (
    <div className={styles.capabilitiesRevised}>
      <div className={styles.footer3}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/line-1.svg" />
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
              <div className={styles.groupContainer}>
                <img className={styles.frameChild} alt="" src="/group-50.svg" />
                <img className={styles.frameChild} alt="" src="/group-49.svg" />
                <img className={styles.frameChild} alt="" src="/group-51.svg" />
                <img className={styles.frameChild} alt="" src="/group-52.svg" />
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.gmailParent}>
                <img className={styles.gmailIcon} alt="" src="/gmail@2x.png" />
                <div className={styles.capabilities}>info@arksindia.com</div>
              </div>
              <div className={styles.phoneParent}>
                <img className={styles.phoneIcon} alt="" src="/phone@2x.png" />
                <div className={styles.div}>
                  <p className={styles.p}>+91-891-6522044</p>
                  <p className={styles.p}>+91-998-5197555</p>
                </div>
              </div>
              <div className={styles.getInTouch}>
                Get in touch with us today
              </div>
            </div>
          </div>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-11@2x.png"
              />
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
      <Banner />
      <Technologies />
      <QualtyControl />
      <FormContainer />
    </div>
  );
};

export default CapabilitiesRevised;
