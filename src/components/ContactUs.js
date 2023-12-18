import styles from "./ContactUs.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import {useEffect, useState} from "react";
import homeContact from "../assets/home-assets/homeContact.png"
import CarouselCommon from "../root-components/carousel-common";

const ContactUs = () => {

    const [isWindowBelowThreshold, setIsWindowBelowThreshold] = useState(false);
    const [isForMobile, setForMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            const windowWidth = window.innerWidth;
            setIsWindowBelowThreshold(windowWidth < 1000);
            setForMobile(windowWidth <= 796);
        }

        // Initial check on mount
        handleResize();

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.container}>
            {!isForMobile?<img className={styles.image}
                  src={homeContact}
                  alt="Your Image"/>:<></>}
            <div className={styles.overlayDiv}>
                {isForMobile?<img
                    src="https://blog.hubspot.com/hs-fs/hubfs/business-plan-Mar-24-2023-06-45-32-8780-PM.jpg?width=1190&height=800&name=business-plan-Mar-24-2023-06-45-32-8780-PM.jpg"
                    alt="Your Image" className={styles.imageMobile}/>:<></>}
                <ImageDescriptionHolder description={{
                    "primary": {
                        "question": `Enquire us`,
                        "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
                    },
                    "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
                        " sed Lorem ipsum dolor sit amet consectetur",
                    "addLink": {
                        "to": "/contact-us",
                        "title": "CONTACT US"
                    }
                }} style={isWindowBelowThreshold ? {} : {marginLeft: 0}} />
            </div>
        </div>
    );
};

export default ContactUs;
