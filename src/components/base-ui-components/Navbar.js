import {NavLink} from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import logo from "../../assets/common/brandLogo.png"
import {useEffect, useLayoutEffect, useRef, useState} from "react";

const Navbar = () => {
    const [isMobileMenuShowing, setMobileMenuShowing] = useState(false)
    const [isSticky, setSticky] = useState(false)
    const menuClick = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuClick.current && !menuClick.current.contains(e.target)) {
                setMobileMenuShowing(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    });
    const handleScreenWidth = () => {
        if (window.innerWidth > 900) {
            setMobileMenuShowing(false)
        }
    }
    useLayoutEffect(() => {
        window.addEventListener('resize', handleScreenWidth);
    }, []);
    const linkData = [
        {to: '/home', title: 'Home'},
        {to: '/capabilities', title: 'Capabilities'},
        {to: '/products', title: 'Products'},
        {to: '/services', title: 'Services'},
        {to: '/about-us', title: 'About Us'},
        {to: '/careers', title: 'Careers'},
        {to: '/community', title: 'Community'},
        {to: '/contact-us', title: 'Contact us'},
    ];

    function getStyle(isActive) {
        if (isActive) {
            return {
                textDecorationColor: "#ff6600",
                color: "#ff6600",
                textDecorationThickness: "26%",
                textUnderlineOffset: "10px",
            };
        } else {
            return {
                textDecorationColor: "#ff6600",
                color: "white",
                textDecorationThickness: "26%",
                textUnderlineOffset: "10px",
            };
        }
    }

    return (
        <div ref={menuClick} className={`${styles.mainContainer}`}>
            <div className={styles.navContent}>
                <div className={styles.logoContainer}>
                    <img className={styles.brandLogo} alt="" src={logo}/>
                </div>

                <div className={`${styles.navItems} ${isMobileMenuShowing ? styles.open : ""}`}>
                    {linkData.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            style={({isActive}) => {
                                return {
                                    ...getStyle(isActive),
                                    textDecoration: isActive ? "" : "none",
                                };
                            }}
                            onClick={() => setMobileMenuShowing(false)}
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
                <div className={`${styles.hamburger} ${isMobileMenuShowing ? styles.open : ""}`} onClick={() => {
                    setMobileMenuShowing(!isMobileMenuShowing)
                }}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
