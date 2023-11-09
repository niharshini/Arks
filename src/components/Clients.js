import ImageGallery from "../root-components/ImageGallery";
import bhel from "../assets/common/bhel.png"
import incis from "../assets/common/incis.png"
import styles from "./Clients.module.css"
import ImageDescriptionHolder from "../root-components/image-description-holder";

const Clients = () => {
    const images = [
        bhel,
        incis,
        bhel,
        incis,
        bhel,
        incis
    ];

    return (
        <div className={styles.clientsContainer}>
            <div className={styles.fullWidth}>
                <div className={styles.descriptionComponent}>
                    <ImageDescriptionHolder description={{
                        "primary": {
                            "question": `Our clients?`,
                            "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
                        }
                    }} style={{marginLeft: 0}}/>
                </div>
            </div>
            <ImageGallery images={images} />
        </div>
    );
};

export default Clients;
