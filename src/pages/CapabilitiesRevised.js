import styles from "./CapabilitiesRevised.module.css";
import banner from "../assets/home-assets/heroBanner.png"
import Technologies from "../components/Technologies";
import FormContainer from "../components/FormContainer";
import HeroBlankHolder from "../root-components/hero-blank-holder";
import QualityControl from "../components/QualtyControl";
import Footer from "../components/Footer";
import CarouselCommon from "../root-components/carousel-common";
import SectionHead from "../root-components/section-head";

const CapabilitiesRevised = () => {

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
                    title={"Overview"}
                    primaryText={"At ARKS, our journey of growth and innovation has equipped us with a formidable set of capabilities in the sector. As a growth-driven company, we leverage our experience and expertise to deliver comprehensive solutions that meet the evolving needs of our clients and partners."}
                    color={"#3D3C3CC6"}
                    secondaryColor={"#3D3C3CC6"}
                    useSecondarySize={true}
                />
            </div>
            <QualityControl reversed={true}/>
            <FormContainer/>
            <Footer/>
        </div>
    );
};

export default CapabilitiesRevised;
