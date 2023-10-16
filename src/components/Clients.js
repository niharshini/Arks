import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={styles.frame}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="./rectangle-87@2x.png"
          />
          <img
            className={styles.frameItem}
            alt=""
            src="./rectangle-89@2x.png"
          />
          <img
            className={styles.frameInner}
            alt=""
            src="./rectangle-85@2x.png"
          />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="./rectangle-86@2x.png"
          />
          <img
            className={styles.frameItem}
            alt=""
            src="./rectangle-88@2x.png"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.ourClientsParent}>
            <div className={styles.ourClients}>Our clients</div>
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
      </div>
    </div>
  );
};

export default Clients;
