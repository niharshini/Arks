import { useMemo } from "react";
import styles from "./ContainerCardForm.module.css";

const ContainerCardForm = ({
  visionMissionText,
  visionMissionImageUrl,
  propTop,
  propOverflow,
  propOverflow1,
  propRight,
  propLeft,
  propLeft1,
  propWidth,
}) => {
  const ourVisionStyle = useMemo(() => {
    return {
      top: propTop,
      overflow: propOverflow,
    };
  }, [propTop, propOverflow]);

  const frameDivStyle = useMemo(() => {
    return {
      overflow: propOverflow1,
    };
  }, [propOverflow1]);

  const rectangleIcon1Style = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.ourVision} style={ourVisionStyle}>
      <div className={styles.rectangleParent} style={frameDivStyle}>
        <img
          className={styles.frameChild}
          alt=""
          src={visionMissionText}
          style={rectangleIcon1Style}
        />
        <div className={styles.frameParent} style={frameDiv1Style}>
          <div className={styles.rectangleGroup} style={frameDiv2Style}>
            <div className={styles.frameItem} />
            <div className={styles.ourVisionParent}>
              <div className={styles.ourVision1}>{visionMissionImageUrl}</div>
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
        </div>
      </div>
    </div>
  );
};

export default ContainerCardForm;
