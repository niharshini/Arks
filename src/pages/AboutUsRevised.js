import AboutUsBanner from "../components/AboutUsBanner";
import Footer2 from "../components/Footer2";
import WhoAreWe from "../components/WhoAreWe";
import OurMission from "../components/OurMission";
import OurVision from "../components/OurVision";
import OurValues from "../components/OurValues";
import styles from "./AboutUsRevised.module.css";

const AboutUsRevised = () => {
  return (
    <div className={styles.aboutUsRevised}>
      <AboutUsBanner />
      <Footer2
        imageDimensions="/line-11.svg"
        footer2Position="absolute"
        footer2Bottom="0px"
        footer2Left="0px"
      />
      <WhoAreWe />
      <OurMission />
      <OurVision />
      <OurValues />
    </div>
  );
};

export default AboutUsRevised;
