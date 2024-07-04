import Testimonial from "./Testimonial";
import styles from "./ClientTestimonals.module.css";
import SectionHead from "../root-components/section-head";
import CarouselCommon from "../root-components/carousel-common";

import profile1 from "../assets/common/profile1.png";
import profile2 from "../assets/common/profile2.png";
import profile3 from "../assets/common/profile3.png";

const ClientTestimonals = () => {
  const dummyItemConfig = [
    {
      testimonialText: "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
      profileName: "Jane Smith",
      profileDesc: "Freelance Designer"
    },
    {
      testimonialText: "“I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.”",
      profileName: "Tom Williams",
      profileDesc: "Software Developer"
    },
    {
      testimonialText: "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
      profileName: "Meenakshi Singh",
      profileDesc: "Accountant"
    },
    {
      testimonialText: "“I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.”",
      profileName: "Michael Brown",
      profileDesc: "Online Entrepreneur"
    }
]
  return (
    <div className={styles.testimonalsParent}>
      <div className={styles.layer}>
      <div className={styles.testimonials}>
        <div className={styles.sectionHeadParent}>
          <div className= {styles.sectionHead}>
            <SectionHead
                title={"Testimonals"}
                primaryText={"What Our Customers Say"}
            />
          </div>
        </div>

        <CarouselCommon items={dummyItemConfig.map((item, index) =>
            <Testimonial
                key={index}
              testimonialText={item.testimonialText}
              rating={item.rating}
              profilePic={item.profilePic}
              profileName={item.profileName}
              profileDesc={item.profileDesc}
          />
            )} autoPlay={false} autoplayInterval={2500} buttonPosition={"flex-end"}/>
        <div className={styles.testimonialCards}>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default ClientTestimonals;
