import styles from "../styles/ImageDescriptionStyle.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import tableWritingImage from "../assets/home-assets/tableWriting.png"

const Capabilities = ({reversed = false}) => {
  return (<div className={`${styles.aboutUsContainer} ${reversed?styles.reversed:""}`}>
    <ImageDescriptionHolder description={{
      "primary": {
        "question": `What we can do?`,
        "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
      },
      "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
          " sed Lorem ipsum dolor sit amet consectetur",
      "addLink": {
        "to": "/capabilities",
        "title":"View Capabilities"
      }
    }}/>
    <img
        className={!reversed?styles.containerImage:styles.containerImageReverse}
        alt=""
        src={tableWritingImage}
    />
  </div>);
};

export default Capabilities;
