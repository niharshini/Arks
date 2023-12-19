import styles from "../styles/ImageDescriptionStyle.module.css";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import writingImage from "../assets/home-assets/homeAboutUs.png"
import {useEffect, useRef, useState} from "react";

const AboutUSHome = ({reversed = false, content, innerRef}) => {
    const [description, setDescription] = useState(content);

    useEffect(() => {
        const defaultData = {
            "primary": {
                "question": `What are we?`,
                "content": "An innovative Product development company, creating values and attaining global Benchmark.",
            },
            "secondary": "A leading-edge electronic solutions provider, aimed to redefine the concept of design & developmentof quality products. Learn more about our journey, our values and things that sets us apart.",
            "addLink": {
                "to": "about-us",
                "title": "About Us"
            }
        };
        if (!description) {
            setDescription(defaultData);
        }
    }, []);

    return (<div className={`${styles.aboutUsContainer} ${reversed ? styles.reversed : ""}`} id={"aboutUs"} ref={innerRef}>
        <ImageDescriptionHolder description={description} style={{marginLeft:"50px"}}/>
        <img
            className={!reversed ? styles.containerImage : styles.containerImageReverse}
            alt=""
            src={writingImage}
        />
    </div>);
};

export default AboutUSHome;
