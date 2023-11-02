import Testimonal from "./Testimonal";
import styles from "./ClientTestimonals.module.css";

const ClientTestimonals = () => {
  return (
    <div className={styles.testimonals}>
      <div className={styles.businessPeopleCasualMeetingParent}>
        <img
          className={styles.businessPeopleCasualMeetingIcon}
          alt=""
          src="/businesspeoplecasualmeeting-2@2x.png"
        />
        <div className={styles.groupChild} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.testimonalsParent}>
              <div className={styles.testimonals1}>Testimonals</div>
              <div className={styles.whatOurCustomers}>
                What Our Customers Say
              </div>
            </div>
          </div>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet consectetur elit, sed Lorem ipsum sit amet consectetur adipiscing elit, sed Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur elit, sed `}</div>
        </div>
        <div className={styles.frameContainer}>
          <Testimonal
            testimonialText="“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”"
            customerTestimonial="/frame.svg"
            testimonialContent="/frame.svg"
            testimonialDescription="/frame.svg"
            testimonialMessage="/frame.svg"
            testimonialText2="/ellipse-1@2x.png"
            testimonialMessageText="Jane Smith"
            testimonialDescription2="Freelance Designer"
          />
          <Testimonal
            testimonialText="“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”"
            customerTestimonial="/frame.svg"
            testimonialContent="/frame.svg"
            testimonialDescription="/frame1.svg"
            testimonialMessage="/frame1.svg"
            testimonialText2="/ellipse-11@2x.png"
            testimonialMessageText="Tom Williams"
            testimonialDescription2="Software Developer"
          />
          <Testimonal
            testimonialText={`“I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company."`}
            customerTestimonial="/frame1.svg"
            testimonialContent="/frame1.svg"
            testimonialDescription="/frame1.svg"
            testimonialMessage="/frame1.svg"
            testimonialText2="/ellipse-12@2x.png"
            testimonialMessageText="Michael Brown"
            testimonialDescription2="Online Entrepreneur"
          />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameFrame}>
            <img className={styles.frameIcon} alt="" src="/frame2.svg" />
          </div>
          <div className={styles.frameFrame}>
            <img className={styles.frameIcon} alt="" src="/frame3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonals;
