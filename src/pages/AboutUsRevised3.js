import OurCompany from "../components/OurCompany";
import ClientTestimonals from "../components/ClientTestimonals";
import styles from "./AboutUsRevised3.module.css";
import AboutUSHome from "../components/AboutUsHome";
import Capabilities from "../components/Capabilities";
import HeroBlankHolder from "../root-components/hero-blank-holder";

import banner from "../assets/home-assets/heroBanner.png"
import Footer from "../components/Footer";


const AboutUsRevised3 = () => {
  const aboutUsContent = {
    "primary": {
        "question": `What are we?`,
        "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
    },
    "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
        " sed Lorem ipsum dolor sit amet consectetur"
    };
  const capabilitiesContent =  {
    "primary": {
      "question": `What we can do?`,
      "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
    },
    "secondary": "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
        " sed Lorem ipsum dolor sit amet consectetur"
  };
  
  return (
    <div className={styles.aboutUsRevised3}>
      <HeroBlankHolder image={banner}/>
      <AboutUSHome content={aboutUsContent}/>
      <Capabilities reversed={true} content={capabilitiesContent}/>
      <ClientTestimonals/>
      <Footer/>
    </div>
  );
};

export default AboutUsRevised3;
