import { Link } from "react-router-dom";
import styles from "./AboutUS.module.css";

const AboutUSHome = (props) => {
  return (
    <div className={styles.aboutUs} style={{ top: props.top }}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="./rectangle-99@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.whatAreWeParent}>
              <div className={styles.whatAreWe}>{`What are we? `}</div>
              <div className={styles.loremIpsumDolorContainer}>
                <span className={styles.loremIpsumDolorContainer1}>
                  <p className={styles.loremIpsumDolorSitAmetCon}>
                    <span className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet consectetur adipiscing
                    </span>
                    <b className={styles.b}>{` `}</b>
                    <span className={styles.elitSed}>elit, sed</span>
                  </p>
                  <p
                    className={styles.loremIpsumR}
                  >{`Lorem ipsum r sit amet consectetur `}</p>
                </span>
              </div>
            </div>
          </div>
          <div
            className={styles.loremIpsumDolor1}
          >{`Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur `}</div>
          <div className={styles.button}>
            <Link
              to="/about-us"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className={styles.explore}>about us</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUSHome;
