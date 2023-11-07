import Banner from "../components/Banner";
import Technologies from "../components/Technologies";
import QualtyControl from "../components/QualtyControl";
import FormContainer from "../components/FormContainer";
import styles from "./CapabilitiesRevised.module.css";

const CapabilitiesRevised = () => {
  return (
    <div className={styles.capabilitiesRevised}>
      <Technologies />
      <QualtyControl />
      <FormContainer />
    </div>
  );
};

export default CapabilitiesRevised;
