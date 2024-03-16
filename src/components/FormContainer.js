import Property1Default from "./Property1Default";
import prodStyles from "./ProductsContainer.module.css"

import styles from "./FormContainer.module.css";
import {CardCapabilities} from "../root-components/capabilities-component/CardCapabilities";
import CarouselCommon from "../root-components/carousel-common";
import SectionHead from "../root-components/section-head";
import productImage from "../assets/common/product-placeholder.png"
import {useEffect, useState} from "react";

const FormContainer = () => {
    const dummyItemConfig = [
        {
            "title": "Microcontrollers / Microprocessors",
            "brief": "Microcontroller / Microprocessor based SBC product design using 8bit, 16bit, and 32bit.",
            "image": productImage,
            "link": "/home"
        },
        {
            "title": "CPLD / FPGA",
            "brief": "CPLD/FPGA based design and development.",
            "image": productImage
        },
        {
            "title": "DSP",
            "brief": "Digital Signal Processor based product bring-up.",
            "image": productImage
        },
        {
            "title": "Low Power to Ultra-low Power",
            "brief": "Low Power design for handheld and remote device applications.",
            "image": productImage
        },
        {
            "title": "Analog and Mixed Signal Designs",
            "brief": "Low noise analog circuit designs for instrumentation, signal conditioning and data communication applications.",
            "image": productImage
        },
        {
            "title": "High-Speed Designs",
            "brief": "High speed design capabilities including Multichannel High speed data acquisition and real-time signal analysis.",
            "image": productImage
        },
        {
            "title": "Control System and High-Power Designs",
            "brief": "Design, development and deployment of control systems and high power handling capabilities.",
            "image": productImage
        },
        {
            "title": "Wireless",
            "brief": "Wireless communication applications – GSM/GPRS, 3G/4G/5G, RF, ZigBee, Bluetooth and Wi-Fi, etc. for applications like remote data logging and control.",
            "image": productImage
        },
        {
            "title": "Serial & Network Communication (Wired)",
            "brief": "Network Communication Protocols Based applications like RS232, RS485, CAN, Ethernet, USB, I2C, SPI, Profibus, and Modbus etc.",
            "image": productImage
        },
        {
            "title": "Sensor Technologies",
            "brief": "Accelerometers, Gyros, IMUS, GPS, Pressure, Temperature, audio, image sensing, etc.",
            "image": productImage
        },
        {
            "title": "EMI/EMC Compliance",
            "brief": "Capability to design and produce EMI/EMC compliant devices according to various regulations.",
            "image": productImage
        },
        {
            "title": "Software Development Competence",
            "brief": "Skilled in full-stack development: embedded firmware, GUI apps, automation, signal processing, and diverse tech domains.",
            "image": productImage
        }
    ]

    const [displayCount, setDisplayCount] = useState(3); // Initial number of items to display
    const [showAll, setShowAll] = useState(false); // State to toggle showing all items

    useEffect(() => {
        const handleResize = () => {
            // Adjust the display count based on screen width
            if (window.innerWidth < 680) {
                setDisplayCount(1);
            } else if (window.innerWidth < 1000) {
                setDisplayCount(2);
            } else {
                setDisplayCount(3);
            }
        };

        // Call handleResize on initial mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {

    }, [showAll])

    const handleShowMore = () => {
        // Show all items
        setShowAll(true);
    };

    const handleShowLess = () => {
        // Show limited number of items based on display count
        setShowAll(false);
    };

    // Calculate number of rows based on display count
    const numRows = Math.ceil(dummyItemConfig.length / displayCount);

    return (
        <div className={styles.containerParent}>
            <div style={{width: "90%", justifyContent: "center", display: "flex"}}>
                <SectionHead
                    title={"Our Products"}
                />
            </div>
            <div className={prodStyles.productItems2}>
                {[...Array(showAll ? numRows : 1)].map((_, rowIndex) => (
                    <div key={rowIndex} className={prodStyles.productItems2} style={{marginBottom: "70px"}}>
                        {dummyItemConfig.slice(rowIndex * displayCount, (rowIndex + 1) * displayCount).map((item, index) => (
                            <CardCapabilities
                                property1={"default"}
                                title={item.title}
                                description={item.brief}
                                image={item.image}
                                key={index}
                                link={item.link}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.buttonContainer}>
                {!showAll ? (
                    <span onClick={handleShowMore}
                          style={{textDecoration: "underline", color: "#fff", fontSize: "20px"}}>Show More</span>
                ) : (
                    <span onClick={handleShowLess}
                          style={{textDecoration: "underline", color: "#fff", fontSize: "20px"}}>Show Less</span>
                )}
            </div>
        </div>
    );
};

export default FormContainer;
