import HeroSection from "../components/HeroSection";
import AboutUSHome from "../components/AboutUsHome";
import Products from "../components/Products";
import Capabilities from "../components/Capabilities";
import ContactUs from "../components/ContactUs";
import Careers from "../components/Careers";
import Clients from "../components/Clients";
import styles from "./HomeRevised2.module.css";
import Footer from "../components/Footer";
import {useRef, useState} from "react";

const HomeRevised2 = () => {
    const aboutUsHomeRef = useRef(null);
    const handleButtonClick = () => {
        aboutUsHomeRef?.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <div className={styles.homeRevised2}>
            <HeroSection onButtonClick={handleButtonClick}/>
            <AboutUSHome ref={aboutUsHomeRef}/>
            <Products/>
            <Capabilities reversed={true}/>
            <Careers/>
            <Clients/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default HomeRevised2;
