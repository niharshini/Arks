import styles from "./CapabilitiesRevised.module.css";
import banner from "../assets/home-assets/heroBanner.png"
import Technologies from "../components/Technologies";
import FormContainer from "../components/FormContainer";
import HeroBlankHolder from "../root-components/hero-blank-holder";
import QualityControl from "../components/QualtyControl";
import Footer from "../components/Footer";
import CarouselCommon from "../root-components/carousel-common";
import SectionHead from "../root-components/section-head";
import InfoContainer from "../root-components/InfoContainer";
import placeHolderImg from "../assets/placeholder_img1.png";
import placeHolderImg2 from "../assets/placeholder_2.png";
import BackgroundFocusComponent from "../root-components/BackgroundFocusComponent";

const CapabilitiesRevised = () => {

    const imageHead = (image) => <img src={image} alt={image} className={styles.image}/>

    const cardsInfo = [
        {title : "Lorem Ipsum", info: "Electronics assemby in accordace with IPA 610 standards."},
        {title : "Lorem Ipsum", info: "Production capacity for both high and low volume production cycles."},
        {title : "Lorem Ipsum", info: "Workmanship qualifies for assembling products that are to be certified by MIL Standards like MIL-STD-810, MIL-STD-461 etc."},
        {title : "Lorem Ipsum", info: "In house PCB assembly and integration facilities."}
    ]

    return (
        <div className={styles.capabilitiesRevised}>
            <div className={styles.aboutUsHero}>
                <CarouselCommon showButtons={false} autoPlay={true} autoplayInterval={1500} numberOfItems={1} items={
                    [imageHead(banner)]
                }/>
            </div>
            <div className={styles.holderContainer}>
                <SectionHead
                    title={"INTRODUCTION"}
                    primaryText={"At ARKS, our journey of growth and innovation has equipped us with a formidable set of capabilities in the sector. As a growth-driven company, we leverage our experience and expertise to deliver comprehensive solutions that meet the evolving needs of our clients and partners."}
                    color={"#3D3C3CC6"}
                    secondaryColor={"#3D3C3CC6"}
                    useSecondarySize={true}
                    primaryTextCustomStyles={{padding: "0 135px"}}
                />
            </div>
            {/* <QualityControl reversed={true}/> */}
            <InfoContainer 
                headers = {["Effective Technology", "Integration"]}
                info = {"Efficient and Effective applications design requires standard technologies. We excel in integrating advanced technologies to create cutting-edge solutions. Our commitment to staying ahead of the technological curve ensures that our offerings are at the forefront of innovation."} 
                image = {placeHolderImg}
            />
            <FormContainer/>
            <InfoContainer 
                headers = {["R&D Excellence and", "Cross-Domain Expertise"]}
                info = {"Our dedication to research and development has been proved time and again by the success rate of our solutions even to complex engineering challenges. Our capacity to research has made us stand as one of the few truly R&D centric companies in the region. Also our team brings together cross-domain expertise, combining skills from various disciplines. This diversity allows us to approach challenges with a comprehensive understanding, providing holistic solutions."} 
                image = {placeHolderImg2}
                reverse = {true}
            />
            <BackgroundFocusComponent 
                title = {"Production capacity"}
                info = {"Production team at ARKS  is a highly experienced and skilled team for assembly and production having been worked for a number of defence projects. The quality of workmanship will be of the highest level thereby reducing the chances of rework and saving valuable time."}
                cardsInfo = {cardsInfo}
            />
            <Footer/>
        </div>
    );
};

export default CapabilitiesRevised;
