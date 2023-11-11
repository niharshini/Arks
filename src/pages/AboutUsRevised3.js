import OurCompany from "../components/OurCompany";
import ClientTestimonals from "../components/ClientTestimonals";
import styles from "./AboutUsRevised3.module.css";
import AboutUSHome from "../components/AboutUsHome";
import Capabilities from "../components/Capabilities";

const AboutUsRevised3 = () => {
  return (
    <div className={styles.aboutUsRevised3}>
      <OurCompany />
      <AboutUSHome top={"1268px"} />
      <Capabilities top={"1930px"} />

      <ClientTestimonals />
    </div>
  );
};

export default AboutUsRevised3;
