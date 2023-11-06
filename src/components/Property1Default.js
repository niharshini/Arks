import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  property1DefaultPosition,
  property1DefaultOverflow,
  property1DefaultFlexShrink,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      overflow: property1DefaultOverflow,
      flexShrink: property1DefaultFlexShrink,
    };
  }, [
    property1DefaultPosition,
    property1DefaultOverflow,
    property1DefaultFlexShrink,
  ]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.rectangleParent}>
        <img className={styles.groupChild} alt="" src="./rectangle-112@2x.png" />
        <div className={styles.groupItem} />
      </div>
      <div className={styles.microControllerParent}>
        <div className={styles.microController}>Micro controller</div>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur elit, sed `}</div>
        <div className={styles.button}>
          <div className={styles.explore}>Know more</div>
          <img
            className={styles.arrowSmallRight1Icon}
            alt=""
            src="./arrowsmallright-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
