import HelpFormContainer from "../components/HelpFormContainer";
import ContactSection from "../components/ContactSection";
import ArksMaps from "../components/ArksMaps";
import styles from "./ContactUs.module.css";
import Footer from "../components/Footer";

const EnquiryRevised3 = () => {
  return (
    <div className={styles.enquiryRevised3}>
      <HelpFormContainer />
      <ContactSection />
      <ArksMaps />
      <Footer />
    </div>
  );
};

export default EnquiryRevised3;
