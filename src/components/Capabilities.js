import styles from "../styles/ImageDescriptionStyle.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import tableWritingImage from "../assets/home-assets/tableWriting.png"
import { useEffect, useState } from "react";


const Capabilities = ({reversed = false, content}) => {

  const [description, setDescription] = useState(content);

  useEffect(() => {
      const defaultData = {
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
      };
      if (!description) {
          setDescription(defaultData);
      }
  },[]);

  return (<div className={`${styles.aboutUsContainer} ${reversed?styles.reversed:""}`}>
    <ImageDescriptionHolder description={description}/>
    <img
        className={!reversed?styles.containerImage:styles.containerImageReverse}
        alt=""
        src={tableWritingImage}
    />
  </div>);
};

export default Capabilities;
