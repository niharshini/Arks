import HelpFormContainer from "../components/HelpFormContainer";
import ContactSection from "../components/ContactSection";
import ArksMaps from "../components/ArksMaps";
import styles from "./EnquiryRevised3.module.css";

const EnquiryRevised3 = () => {
  return (
    <div className={styles.enquiryRevised3}>
      <HelpFormContainer />
      <ContactSection />
      <ArksMaps />
    </div>
  );
};

export default EnquiryRevised3;
