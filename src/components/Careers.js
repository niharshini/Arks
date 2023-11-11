import styles from "./Careers.module.css";
import casualMeeting from "../assets/common/businesspeoplecasualmeeting-1@2x.png"
import ImageDescriptionHolder from "../root-components/image-description-holder";

const Careers = () => {
    return (
        <div className={styles.careerContainer} style={{backgroundImage: `url(${casualMeeting})`}}>
            <div className={styles.tint}>
            </div>
            <div className={styles.descriptionComponent}>
                <ImageDescriptionHolder description={{
                    "primary": {
                        "question": `What are we?`,
                        "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
                    },
                    "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
                        " sed Lorem ipsum dolor sit amet consectetur",
                    "addLink": {
                        "to": "/careers",
                        "title": "VIEW CAREERS"
                    }
                }} color={"#ffffff"} secondaryColor={"#ffffff"}/>
            </div>
        </div>
    );
};

export default Careers;
