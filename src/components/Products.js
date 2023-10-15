import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.whatWeCanDoParent}>
            <div className={styles.whatWeCan}>{`What we can do? `}</div>
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
        <div className={styles.component1Parent}>
          <div className={styles.component1}>
            <div className={styles.productNameParent}>
              <div className={styles.productName}>Product Name</div>
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet consectetur adipiscing elit, sed `}</div>
            </div>
            <div className={styles.productImages}>
              <img
                className={styles.productImagesChild}
                alt=""
                src="/rectangle-961@2x.png"
              />
            </div>
          </div>
          <div className={styles.component1}>
            <div className={styles.productNameParent}>
              <div className={styles.productName}>Product Name</div>
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet consectetur adipiscing elit, sed `}</div>
            </div>
            <div className={styles.productImages}>
              <img
                className={styles.productImagesItem}
                alt=""
                src="/rectangle-97@2x.png"
              />
            </div>
          </div>
          <div className={styles.component1}>
            <div className={styles.productNameParent}>
              <div className={styles.productName}>Product Name</div>
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet consectetur adipiscing elit, sed `}</div>
            </div>
            <div className={styles.productImages}>
              <img
                className={styles.productImagesItem}
                alt=""
                src="/rectangle-98@2x.png"
              />
            </div>
          </div>
          <div className={styles.component1}>
            <div className={styles.productNameParent}>
              <div className={styles.productName}>Product Name</div>
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet consectetur adipiscing elit, sed `}</div>
            </div>
            <div className={styles.productImages}>
              <img
                className={styles.productImagesChild}
                alt=""
                src="/rectangle-961@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.explore}>View Products</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
