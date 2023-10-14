import HeroSection from "../components/HeroSection";
import Footer2 from "../components/Footer2";
import Products from "../components/Products";
import Capabilities from "../components/Capabilities";
import AboutUs from "../components/AboutUs";
import Careers from "../components/Careers";
import Clients from "../components/Clients";
import ContactUs from "../components/ContactUs";
import styles from "./HomeRevised.module.css";

const HomeRevised = () => {
  return (
    <div className={styles.homeRevised}>
      <HeroSection />
      <Footer2
        imageDimensions="/line-11.svg"
        footer2Position="absolute"
        footer2Bottom="0px"
        footer2Left="0px"
      />
      <Products />
      <Capabilities />
      <AboutUs />
      <Careers />
      <Clients />
      <ContactUs />
    </div>
  );
};

export default HomeRevised;
