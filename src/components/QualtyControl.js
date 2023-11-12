import styles from "../styles/ImageDescriptionStyle.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import tableWritingImage from "../assets/home-assets/tableWriting.png";

const QualityControl = ({reversed = false}) => {
  return (<div className={`${styles.aboutUsContainer} ${reversed?styles.reversed:""}`}>
    <ImageDescriptionHolder description={{
      "primary": {
        "question": `Quality Control`,
        "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
      },
      "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
          " sed Lorem ipsum dolor sit amet consectetur",
    }}/>
    <img
        className={!reversed?styles.containerImage:styles.containerImageReverse}
        alt=""
        src={tableWritingImage}
    />
  </div>);
};

export default QualityControl;
