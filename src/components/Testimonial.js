import styles from "./Testimonal.module.css";
import star from "../assets/common/star.svg";
import star_outline from "../assets/common/star-outline.svg";

const Testimonial = ({
  testimonialText,
  rating,
  profilePic,
  profileName,
  profileDesc,
}) => {

  const getStarsByRating = () => {
    const noOfStars = rating ? rating : 5;
    const stars = [];
    for(let i= 0 ; i < noOfStars ; i++) {
      stars.push(<img className={styles.frameIcon} alt="" src={star} key={i}/>);
    }

    for(let i= 0 ; i < 5- noOfStars ; i++) {
      stars.push(<img className={styles.frameIcon} alt="" src={star_outline} key={5-1-i}/>);
    }
    return stars;
  }

  return (
    <div className={styles.testimonialParent}>
      <div className={styles.testimonialText}>{testimonialText}</div>
      <div className={styles.rating}>
        {
          getStarsByRating() 
        }
      </div>
      <div className={styles.profile}>
        <img className={styles.frameChild} alt="" src={profilePic} />
        <div className={styles.janeSmith}>{profileName}</div>
        <div className={styles.freelanceDesigner}>
          {profileDesc}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
