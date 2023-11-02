import styles from "./Testimonal.module.css";

const Testimonal = ({
  testimonialText,
  customerTestimonial,
  testimonialContent,
  testimonialDescription,
  testimonialMessage,
  testimonialText2,
  testimonialMessageText,
  testimonialDescription2,
}) => {
  return (
    <div className={styles.iveBeenUsingThisWebHostiParent}>
      <div className={styles.iveBeenUsing}>{testimonialText}</div>
      <div className={styles.frameParent}>
        <img className={styles.frameIcon} alt="" src="./frame.svg" />
        <img className={styles.frameIcon} alt="" src={customerTestimonial} />
        <img className={styles.frameIcon} alt="" src={testimonialContent} />
        <img className={styles.frameIcon} alt="" src={testimonialDescription} />
        <img className={styles.frameIcon} alt="" src={testimonialMessage} />
      </div>
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src={testimonialText2} />
        <div className={styles.janeSmith}>{testimonialMessageText}</div>
        <div className={styles.freelanceDesigner}>
          {testimonialDescription2}
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
