import styles from "../styles/ImageDescriptionStyle.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import tableWritingImage from "../assets/home-assets/tableWriting.png";

const QualityControl = ({reversed = false}) => {
  return (<div className={`${styles.aboutUsContainer} ${reversed?styles.reversed:""}`}>
    <ImageDescriptionHolder description={{
      "primary": {
        "question": `Effective Technology Integration`,
        "content": "Efficient and Effective applications design requires standard technologies.",
      },
      "secondary": "We excel in integrating advanced technologies to create cutting-edge solutions. Our commitment to staying ahead of the technological curve ensures that our offerings are at the forefront of innovation.",
    }}/>
    <img
        className={!reversed?styles.containerImage:styles.containerImageReverse}
        alt=""
        src={tableWritingImage}
    />
  </div>);
};

export default QualityControl;
