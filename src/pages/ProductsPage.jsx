import styles from "./CapabilitiesRevised.module.css";
import banner from "../assets/home-assets/heroBanner.png"
import Technologies from "../components/Technologies";
import FormContainer from "../components/FormContainer";
import HeroBlankHolder from "../root-components/hero-blank-holder";
import QualityControl from "../components/QualtyControl";
import Footer from "../components/Footer";
import ProductsContainer from "../components/ProductsContainer";

const ProductsPage = () => {

    return (
        <div className={styles.capabilitiesRevised}>
            <HeroBlankHolder image={banner}/>
            <ProductsContainer/>
            <Footer/>
        </div>
    );
};

export default ProductsPage;
