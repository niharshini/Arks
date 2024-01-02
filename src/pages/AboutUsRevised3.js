import OurCompany from "../components/OurCompany";
import ClientTestimonals from "../components/ClientTestimonals";
import styles from "./AboutUsRevised3.module.css";
import AboutUSHome from "../components/AboutUsHome";
import Capabilities from "../components/Capabilities";
import banner from "../assets/home-assets/heroBanner.png"
import banner1 from "../assets/aboutUsBanner.png"
import vision from "../assets/aboutUsVision.png"
import mission from "../assets/aboutUsMission.png"
import Footer from "../components/Footer";
import SectionHead from "../root-components/section-head";
import CarouselCommon from "../root-components/carousel-common";


const AboutUsRevised3 = () => {
    const aboutUsContent = {
        "primary": {
            "question": `Our Mission`,
        },
        "secondary": "At ARKS, our mission is clear: to deliver cutting-edge solutions that redefine the standards of defense and aerospace technology. We are committed to providing our clients with unmatched capabilities, ensuring the safety, quality and reliability.",
        "secondaryMulti": [
            "To be the preferred partner for Defence and Industrial sector in this Technology era.",
            "To enhance Business Development with sustained service and support to all our clients through a core set of values."
        ],
    };
    const ourVision = {
        "primary": {
            "question": `Our Vision for the Future`,
        },
        "secondary": "As we scale new heights, our vision is to be the foremost provider of innovative defense and aerospace solutions globally. We are dedicated to pushing the boundaries of what is possible, ensuring a safer and more secure world for generations to come.",
    };
    const capabilitiesContent = {
        "primary": {
            "question": `Our values`,
        },
        "secondaryMulti": [
            "Sustained Innovative Engineering",
            "Strengthened Technology Base",
            "Partnership and Team Work",
            "Continuous Quality Improvements",
            "Cost Optimization",
            "Enhanced Customer Satisfaction"
        ]
    };
    const joinOurJourney = {
        "primary": {
            "question": `Join Our Journey`,
        },
        "secondary":"Whether you're a strategic partner, a collaborator, or an aspiring team member, we invite you to join us on this exciting journey. Together, we will continue to redefine the future of defense and aerospace technology, setting new standards and creating a legacy of excellence."
    };
    const imageHead = (image) => <img src={image} alt={image} className={styles.image}/>
    const imagesList = ["https://wallpapercave.com/wp/wp5177427.jpg", banner, banner1]
    return (
        <div className={styles.aboutUsRevised3}>
            <div className={styles.aboutUsHero}>
                <CarouselCommon showButtons={false} autoPlay={true} autoplayInterval={1500} numberOfItems={1} items={
                    imagesList.map(image=> imageHead(image))
                }/>
            </div>
            <div className={styles.holderContainer}>
                <SectionHead
                    title={"Overview"}
                    primaryText={"“ARKS MicroElectronics India Pvt. Ltd.” Which is formerly “ARKS Technologies” established in 2009 by multitalented group of professionals with its Reg. office in Vishakhapatnam and Branch in Hyderabad, India."}
                    secondaryText={
                        "ARKS, over the years has managed to form a strong base with sound engineering practices and continual commitment for growth and business development."}
                    color={"#3D3C3CC6"}
                    secondaryColor={"#3D3C3CC6"}
                    useSecondarySize={true}
                />
            </div>
            <AboutUSHome content={aboutUsContent} image={mission}/>
            <Capabilities reversed={true} content={capabilitiesContent} containerWidth={"40%"}/>
            <AboutUSHome content={ourVision} image={vision}/>
            <Capabilities reversed={true} content={joinOurJourney}/>
            <ClientTestimonals/>
            <Footer/>
        </div>
    );
};

export default AboutUsRevised3;
