import { NavLink } from "react-router-dom";
import styles from "./Header1.module.css";

const Header1 = () => {
  function getStyle(isActive) {
    if (isActive) {
      return {
        textDecoration: "",
        textDecorationColor: "#ff6600",
        color: "#ff6600",
        textDecorationThickness: "26%",
        textUnderlineOffset: "10px",
      };
    } else {
      return {
        textDecoration: "none",
        textDecorationColor: "#ff6600",
        color: "white",
        textDecorationThickness: "26%",
        textUnderlineOffset: "10px",
      };
    }
  }

  return (
    <div className={styles.frameParent}>
      <div className={styles.groupChild} />
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <img className={styles.image1Icon} alt="" src="./image-12@2x.png" />
        </div>
        <div className={styles.rectangleParent}>
          {/* <div className={styles.frameChild} /> */}
          <div className={styles.homeParent}>
            <NavLink
              to="/home"
              color="frameChild"
              className={"test"}
              style={({ isActive }) => getStyle(isActive)}
            >
              Home
            </NavLink>

            <NavLink
              to="/capabilities"
              style={({ isActive }) => getStyle(isActive)}
            >
              Capabilities
            </NavLink>
            <div className={styles.capabilities}>Products</div>
            <div className={styles.capabilities}>Services</div>
            <NavLink
              to="/about-us"
              style={({ isActive }) => getStyle(isActive)}
            >
              About&nbsp;Us
            </NavLink>

            <div className={styles.capabilities}>Careers</div>
            <div className={styles.capabilities}>Community</div>
            <NavLink
              to="/contact-us"
              style={({ isActive }) => getStyle(isActive)}
            >
              Contact&nbsp;us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
