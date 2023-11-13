import ImageDescriptionHolder from "../root-components/image-description-holder";
import styles from "./HelpFormContainer.module.css";

const HelpFormContainer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const defaultData = {
    primary: {
      question: `Enquire Us`,
      content: "How can we help?",
    },
    secondary:
      "Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit," +
      " sed Lorem ipsum dolor sit amet consectetur",
  };

  const style = {
    marginLeft: 0,
  };

  const secondaryFontStyles = {
    color: "rgba(61, 60, 60, 0.78), #3D3C3C",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.fitContainer}>
        <div className={`${styles.container}`}>
          <ImageDescriptionHolder
            description={defaultData}
            style={style}
            secondaryFontStyles={secondaryFontStyles}
          />
        </div>

        <form className={styles.formParent}>
          <div>
            <label>
              Name
              <input
                type="text"
                name="name"
                className={styles.inputBox}
                placeholder="Enter your name"
              />
            </label>
          </div>
          <div className={styles.formElement}>
            <label>
              Email
              <input
                type="text"
                name="name"
                className={styles.inputBox}
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className={styles.formElement}>
            <label>
              Your Message
              <input
                type="text"
                name="name"
                className={styles.inputBox}
                placeholder="Enter your message"
              />
            </label>
          </div>

          <div className={styles.submitButtonContainer}>
            <input type="submit" value="Submit" className={styles.button} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HelpFormContainer;
