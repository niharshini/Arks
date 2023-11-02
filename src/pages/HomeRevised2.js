import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutUSHome from "../components/AboutUS";
import Products from "../components/Products";
import Capabilities from "../components/Capabilities";
import ContactUs from "../components/ContactUs";
import Careers from "../components/Careers";
import Clients from "../components/Clients";
import styles from "./HomeRevised2.module.css";

const HomeRevised2 = () => {
  return (
    <div className={styles.homeRevised2}>
      <Footer />
      <HeroSection />
      <AboutUSHome />
      <Products />
      <Capabilities />
      <ContactUs />
      <Careers />
      <Clients />
    </div>
  );
};

export default HomeRevised2;
