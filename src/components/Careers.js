import styles from "./Careers.module.css";
import casualMeeting from "../assets/home-assets/homeCareerCover.png"
import ImageDescriptionHolder from "../root-components/image-description-holder";

const Careers = () => {
    return (
        <div className={styles.careerContainer} style={{backgroundImage: `url(${casualMeeting})`}}>
            <div className={styles.tint}>
            </div>
            <div className={styles.descriptionComponent}>
                <ImageDescriptionHolder description={{
                    "primary": {
                        "question": `Want to join us?`,
                        "content": "Embark on a rewarding journey with ARKS.",
                    },
                    "secondary": "As one of the few R&D centric companies in India, ARKS offers challenging and growth driven opportunities to build a fulfilling career. Find more about the carrers at ARKS, current openings and opportunites.",
                    "addLink": {
                        "to": "/careers",
                        "title": "VIEW CAREERS"
                    }
                }} color={"#ffffff"} secondaryColor={"#ffffff"} style={{marginLeft:"50px"}}/>
            </div>
        </div>
    );
};

export default Careers;
