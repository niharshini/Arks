import Property1Frame156 from "./Property1Frame156";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.button}>
        <div className={styles.explore}>View Products</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.whatWeHave}>{`What we have Done? `}</div>
      </div>
      <div className={styles.component1Parent}>
        <Property1Frame156
          imageDimensions="/rectangle-96@2x.png"
          property1Frame156Position="relative"
          property1Frame156FlexShrink="0"
          rectangleIconBorderRadius="unset"
        />
        <Property1Frame156
          imageDimensions="/rectangle-97@2x.png"
          property1Frame156Position="relative"
          property1Frame156FlexShrink="0"
          rectangleIconBorderRadius="var(--br-5xl) var(--br-5xl) 0px 0px"
        />
        <Property1Frame156
          imageDimensions="/rectangle-98@2x.png"
          property1Frame156Position="relative"
          property1Frame156FlexShrink="0"
          rectangleIconBorderRadius="var(--br-5xl) var(--br-5xl) 0px 0px"
        />
        <Property1Frame156
          imageDimensions="/rectangle-96@2x.png"
          property1Frame156Position="relative"
          property1Frame156FlexShrink="0"
          rectangleIconBorderRadius="unset"
        />
      </div>
    </div>
  );
};

export default Products;
