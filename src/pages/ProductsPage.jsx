import styles from "./CapabilitiesRevised.module.css";
import banner from "../assets/home-assets/heroBanner.png"
import Technologies from "../components/Technologies";
import FormContainer from "../components/FormContainer";
import HeroBlankHolder from "../root-components/hero-blank-holder";
import QualityControl from "../components/QualtyControl";
import Footer from "../components/Footer";
import ProductsContainer from "../components/ProductsContainer";
import CarouselCommon from "../root-components/carousel-common";
import SectionHead from "../root-components/section-head";

const ProductsPage = () => {

    const imageHead = (image) => <img src={image} alt={image} className={styles.image}/>

    return (
        <div className={styles.capabilitiesRevised}>
            <div className={styles.aboutUsHero}>
                <CarouselCommon showButtons={false} autoPlay={true} autoplayInterval={1500} numberOfItems={1} items={
                    [imageHead(banner)]
                }/>
            </div>
            <div className={styles.holderContainer}>
                <SectionHead
                    title={"Our Product Portifolio"}
                    primaryText={"ARKS is a comprehensive Engineering solution Provider across many Domains in the Defence and Industrial Sector. Our Product Design and Development Services are capable of handling Design from Concept to Deployment. Our Portfolio includes Hardware and Software Product Engineering in various sectors like Automotive, IT, Medical, Industrial Automation, Energy and Utilities, Communication, Industrial embedded sector etc., besides our niche Defense and Aerospace sector."}
                    color={"rgba(27, 27, 27, 0.8)"}
                    secondaryColor={"#3D3C3CC6"}
                    useSecondarySize={true}
                />
            </div>
            <ProductsContainer/>
            <Footer/>
        </div>
    );
};

export default ProductsPage;
