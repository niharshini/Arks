import styles from "./ContactUs.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";

const ContactUs = () => {
  return (
      <div className={styles.container}>
        <img className={styles.image} src="https://blog.hubspot.com/hs-fs/hubfs/business-plan-Mar-24-2023-06-45-32-8780-PM.jpg?width=1190&height=800&name=business-plan-Mar-24-2023-06-45-32-8780-PM.jpg" alt="Your Image" />
        <div className={styles.overlayDiv}>
            <ImageDescriptionHolder description={{
                "primary": {
                    "question": `Enquire us`,
                    "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
                },
                "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
                    " sed Lorem ipsum dolor sit amet consectetur",
                "addLink": {
                    "to": "/contact-us",
                    "title":"CONTACT US"
                }
            }} style={{marginLeft:0}} color={"#ffffff"} secondaryColor={"#ffffff"}/>
        </div>
      </div>
  );
};

export default ContactUs;
