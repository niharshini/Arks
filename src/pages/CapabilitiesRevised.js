import Banner from "../components/Banner";
import Technologies from "../components/Technologies";
import QualtyControl from "../components/QualtyControl";
import FormContainer from "../components/FormContainer";
import styles from "./CapabilitiesRevised.module.css";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";

const CapabilitiesRevised = () => {
  return (
    <div className={styles.capabilitiesRevised}>
      <Footer />
      <Header1 />      
      <Technologies />
      <QualtyControl />
      <FormContainer />
    </div>
  );
};

export default CapabilitiesRevised;
