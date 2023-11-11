import styles from "./FooterRework.module.css" ;

const Footer = () => {
  return (
    <div className={styles.footer3}>
      <div className={styles.container}>

        <div className={styles.content}>
            <div className={styles.logoDiv}>
                <div className={styles.logo}>
                    <img className={styles.image1Icon} alt="" src="./image-1@2x.png" />
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
                    <div className={styles.followUsOn}>Get in touch with us today</div>
                        <div className={styles.gmailParent}>
                            <img
                                className={styles.contactIcon}
                                alt=""
                                src="./gmail@2x.png"
                            />
                            <span className={styles.emailAddr}>info@arksindia.com</span>
                        </div>
                        <div className={styles.phoneParent}>
                            <img className={styles.contactIcon} alt="" src="./phone@2x.png" />
                            <span className={styles.mobileNos}>
                                <p>+91-891-6522044</p>
                                <p>+91-998-5197555</p>
                            </span>
                        </div>
                        
                </div>

                <div className={styles.followUsOnParent}>
                    <div className={styles.followUsOn}>{`Follow us on `}</div>
                    <div className={styles.instagramParent}>
                    <img
                        className={styles.socialNetworkIcon}
                        alt=""
                        src="./instagram@2x.png"
                    />
                    <img
                        className={styles.socialNetworkIcon}
                        alt=""
                        src="./linkedin@2x.png"
                    />
                    <img
                        className={styles.socialNetworkIcon}
                        alt=""
                        src="./twitter@2x.png"
                    />
                    <img
                        className={styles.socialNetworkIcon}
                        alt=""
                        src="./facebook@2x.png"
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
