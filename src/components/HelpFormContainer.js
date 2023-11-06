import styles from "./HelpFormContainer.module.css";

const HelpFormContainer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result)
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.enquireUsParent}>
            <div className={styles.enquireUs}>Enquire Us</div>
            <div className={styles.howCanWe}>How can we help?</div>
          </div>
        </div>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco `}</div>
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <div className={styles.name}>Name</div>
          <div className={styles.enterYourNameWrapper}>
            <div className={styles.enterYourName}>Enter your name</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.name}>Email</div>
          <div className={styles.enterYourNameWrapper}>
            <div className={styles.enterYourName}>Enter your email</div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.name}>Your Message</div>
          <div className={styles.enterYourNameWrapper}>
            <div className={styles.enterYourName}>Enter your message</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.explore}><a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">Submit</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HelpFormContainer;
