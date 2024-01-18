import styles from "../styles/ImageDescriptionStyle.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import tableWritingImage from "../assets/home-assets/homeCap.png"
import { useEffect, useState } from "react";


const Capabilities = ({reversed = false, content, image, containerWidth}) => {

  const [description, setDescription] = useState(content);
  const [width, setWidth] = useState(containerWidth);
    const getWindowSize = () => {
        if (window.innerWidth <= 768) {
            return 90; // Desktop
        } else return 40
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(getWindowSize());
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

  useEffect(() => {
      const defaultData = {
        "primary": {
          "question": `What Can We Do?`,
          "content": "Design from concept to deployment, across technological domains meeting stringent mission critical requirments and more.",
        },
        "secondary": "At ARKS, we pride ourselves on our diverse capabilities, wide technology bandwidth and the extended range of solutions we bring to our clients. From ultra low power to highly advanced, computationally intensive applications, we have managed to enhance our technological and prodcution capabilities over the years with continuous effort and vast experiences. Take a closer look at our key areas of expertise and capabilites.",
        "addLink": {
          "to": "/capabilities",
          "title":"View Capabilities"
        }
      };
      if (!description) {
          setDescription(defaultData);
      }
      setWidth(getWindowSize());
  },[]);

  return (<div className={`${styles.aboutUsContainer} ${reversed?styles.reversed:""}`}>
    <ImageDescriptionHolder description={description} style={{width: `${width}%`}}/>
    <img
        className={!reversed?styles.containerImage:styles.containerImageReverse}
        alt=""
        src={image?image:tableWritingImage}
    />
  </div>);
};

export default Capabilities;
