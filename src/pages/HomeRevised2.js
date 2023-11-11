import HeroSection from "../components/HeroSection";
import AboutUSHome from "../components/AboutUsHome";
import Products from "../components/Products";
import Capabilities from "../components/Capabilities";
import ContactUs from "../components/ContactUs";
import Careers from "../components/Careers";
import Clients from "../components/Clients";
import styles from "./HomeRevised2.module.css";
import Footer from "../components/Footer";

const HomeRevised2 = () => {
    return (
        <div className={styles.homeRevised2}>
            <HeroSection/>
            <AboutUSHome/>
            <Products/>
            <Capabilities reversed={true}/>
            <Careers/>
            <Clients />
            <ContactUs />
            <Footer/>
        </div>
    );
};

export default HomeRevised2;
