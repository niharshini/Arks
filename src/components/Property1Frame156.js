import { useMemo } from "react";
import styles from "./Property1Frame156.module.css";

const Property1Frame156 = ({
  imageDimensions,
  property1Frame156Position,
  property1Frame156FlexShrink,
  rectangleIconBorderRadius,
}) => {
  const property1Frame156Style = useMemo(() => {
    return {
      position: property1Frame156Position,
      flexShrink: property1Frame156FlexShrink,
    };
  }, [property1Frame156Position, property1Frame156FlexShrink]);

  const rectangleIconStyle = useMemo(() => {
    return {
      borderRadius: rectangleIconBorderRadius,
    };
  }, [rectangleIconBorderRadius]);

  return (
    <div className={styles.property1frame156} style={property1Frame156Style}>
      <div className={styles.productNameParent}>
        <div className={styles.productName}>Product Name</div>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet consectetur adipiscing elit, sed `}</div>
      </div>
      <div className={styles.productImages}>
        <img
          className={styles.productImagesChild}
          alt=""
          src={imageDimensions}
          style={rectangleIconStyle}
        />
      </div>
    </div>
  );
};

export default Property1Frame156;
