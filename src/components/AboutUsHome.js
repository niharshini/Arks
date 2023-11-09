import styles from "../styles/ImageDescriptionStyle.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import writingImage from "../assets/common/writingSquare.png"

const AboutUSHome = ({reversed = false}) => {
    return (<div className={`${styles.aboutUsContainer} ${reversed?styles.reversed:""}`}>
        <ImageDescriptionHolder description={{
            "primary": {
                "question": `What are we?`,
                "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
            },
            "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
                " sed Lorem ipsum dolor sit amet consectetur",
            "addLink": {
                "to": "/about-us",
                "title":"About Us"
            }
        }}/>
        <img
            className={!reversed?styles.containerImage:styles.containerImageReverse}
            alt=""
            src={writingImage}
        />
    </div>);
};

export default AboutUSHome;
