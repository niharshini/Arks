import styles from "./Technologies.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import techImage from "../assets/common/technologiesSideImg.png"

const Technologies = ({reversed = false}) => {
  return (<div className={`${styles.aboutUsContainer} ${reversed?styles.reversed:""}`}>
    <ImageDescriptionHolder description={{
      "primary": {
        "question": `Technologies`,
        "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
      },
      "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
          " sed Lorem ipsum dolor sit amet consectetur",
    }}/>
    <img
        className={!reversed?styles.containerImage:styles.containerImageReverse}
        alt=""
        src={techImage}
    />
  </div>);
};

export default Technologies;
