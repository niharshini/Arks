import OurCompany from "../components/OurCompany";
import ClientTestimonals from "../components/ClientTestimonals";
import styles from "./AboutUsRevised3.module.css";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import AboutUSHome from "../components/AboutUS";
import Capabilities from "../components/Capabilities";

const AboutUsRevised3 = () => {
  return (
    <div className={styles.aboutUsRevised3}>
      <Footer />
      <Header1 />
      <OurCompany />
      <AboutUSHome top={"1268px"} />
      <Capabilities top={"1930px"} />

      <ClientTestimonals />
    </div>
  );
};

export default AboutUsRevised3;
