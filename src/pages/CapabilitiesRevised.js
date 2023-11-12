import styles from "./CapabilitiesRevised.module.css";
import banner from "../assets/home-assets/heroBanner.png"
import Technologies from "../components/Technologies";
import FormContainer from "../components/FormContainer";
import HeroBlankHolder from "../root-components/hero-blank-holder";
import QualityControl from "../components/QualtyControl";
import Footer from "../components/Footer";

const CapabilitiesRevised = () => {

    return (
        <div className={styles.capabilitiesRevised}>
            <HeroBlankHolder image={banner}/>
            <Technologies/>
            <QualityControl reversed={true}/>
            <FormContainer/>
            <Footer/>
        </div>
    );
};

export default CapabilitiesRevised;
