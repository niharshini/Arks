import styles from "./FooterRework.module.css" ;

import logo from "../assets/common/brandLogo.png"
import mail from "../assets/common/gmail.png";
import phone from "../assets/common/phone.png";

import facebook from "../assets/common/facebook.png";
import instagram from "../assets/common/instagram.png";
import linkedin from "../assets/common/linkedin.png";
import twitter from "../assets/common/twitter.png";

const Footer = () => {
  return (
    <div className={styles.footer3}>
      <div className={styles.container}>

        <div className={styles.content}>
            <div className={styles.logoDiv}>
                <div className={styles.logo}>
                    <img className={styles.image1Icon} alt="" src={logo} />
                </div>
                <div className={styles.address}>
                    <p className={styles.p}>Plot No:5, Padmanayani Nilayam,</p>
                    <p className={styles.p}>Sapthagiri Nagar, Chinamusidiwada,</p>
                    <p className={styles.p}>Visakhapatnam-531173,</p>
                    <p className={styles.p}>Andhra Pradesh, INDIA.</p>
                </div>
            </div>

            <div className={styles.column1}>
                <div className={styles.capabilities}>Capabilities</div>
                <div className={styles.capabilities}>Careers</div>
                <div className={styles.capabilities}>About Us</div>
                <div className={styles.capabilities}>Enquiry</div>
            </div>

            <div className={styles.column2}>  
                <div className={styles.capabilities}>Products</div>
                <div className={styles.capabilities}>Services</div>
                <div className={styles.capabilities}>Community</div>
            </div>


            <div className={styles.groupParent}>
          
                <div className={styles.frameParent}>
                    <div className={styles.contact}>Get in touch with us today</div>
                        <div className={styles.gmailParent}>
                            <img
                                className={styles.contactIcon}
                                alt=""
                                src={mail}
                            />
                            <span className={styles.emailAddr}>info@arksindia.com</span>
                        </div>
                        <div className={styles.phoneParent}>
                            <img className={styles.contactIcon} alt="" src={phone} />
                            <span className={styles.mobileNos}>
                                <div>+91-891-6522044</div>
                                <div>+91-998-5197555</div>
                            </span>
                        </div>
                        
                </div>

                <div className={styles.followUsOnParent}>
                    <div className={styles.followUsOn}>{`Follow us on `}</div>
                    <div className={styles.instagramParent}>
                    <img
                        className={styles.socialNetworkIcon}
                        alt=""
                        src={instagram}
                    />
                    <img
                        className={styles.socialNetworkIcon}
                        alt=""
                        src={linkedin}
                    />
                    <img
                        className={styles.socialNetworkIcon}
                        alt=""
                        src={twitter}
                    />
                    <img
                        className={styles.socialNetworkIcon}
                        alt=""
                        src={facebook}
                    />
                    </div>
                </div> 
            </div>
        </div>

        <hr /> 
        Copyright © 2023 ARKS MicroElectronics India Pvt.Ltd. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
