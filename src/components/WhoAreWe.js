import styles from "./WhoAreWe.module.css";

const WhoAreWe = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.whoAreWe}>{`who are we? `}</div>
      </div>
      <div className={styles.arksMicroelectronicsIndiaPvParent}>
        <div
          className={styles.arksMicroelectronicsIndia}
        >{`ARKS MicroElectronics India Pvt. Ltd., formerly ARKS Technologies, established in 2009, is a leading provider of cutting-edge electronic solutions. With offices in Vishakhapatnam and Hyderabad, we specialize in designing customized electronic circuit boards and products, driven by the latest technologies. Our dedicated team translates client needs into innovative design solutions, optimizing R&D costs, and boosting operational efficiency.`}</div>
        <div className={styles.arksMicroelectronicsIndia}>
          We are a technology-driven company committed to creativity and setting
          industry benchmarks. Our multitalented professionals are experts in
          their field, consistently delivering quality products. ARKS
          MicroElectronics is your trusted partner for innovative electronic
          solutions, redefining design and development.
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
