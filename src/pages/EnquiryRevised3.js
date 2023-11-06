import HelpFormContainer from "../components/HelpFormContainer";
import ContactSection from "../components/ContactSection";
import ArksMaps from "../components/ArksMaps";
import styles from "./EnquiryRevised3.module.css";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";

const EnquiryRevised3 = () => {
  return (
    <div className={styles.enquiryRevised3}>
      <Footer />
      <Header1 />
      <HelpFormContainer />
      <ContactSection />
      <ArksMaps />
    </div>
  );
};

export default EnquiryRevised3;
