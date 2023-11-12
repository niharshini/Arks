import styles from "./root-styles/capabilitiesItem.module.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import arrow from "./right-arrow.png"

const CapabilitiesItem = ({itemsConfig}) => {
    const [isClicked, setClicked] = useState(false)
    const navigate = useNavigate()
    const {image, title, description} = itemsConfig;
    useEffect(() => {
        if (isClicked) {
            if (itemsConfig["to"]) {
                navigate(itemsConfig["to"])
            }
        }
    }, [isClicked]);
    return (
        <div className={styles["property-1-variant-2"]}>
            <div className={styles["group-139"]}>
                <img className={styles["rectangle-112"]} src="rectangle-112.png" />
                <div className={styles["rectangle-113"]}></div>
            </div>
            <div className={styles["frame-183"]}>
                <div className={styles["micro-controller"]}>{title}</div>
                <div
                    className={
                        styles[
                            "lorem-ipsum-dolor-sit-amet-consectetur-elit-sed-lorem-ipsum-sit-amet-consectetur-adipiscing-elit-sed-lorem-ipsum-dolor-sit-amet-consectetur-lorem-ipsum-dolor-sit-amet-consectetur-elit-sed"
                            ]
                    }
                >
                    {description}
                </div>
                <div className={styles["button"]}>
                    <div className={styles["explore"]}>Know more </div>
                    <svg
                        className={styles["arrow-small-right-1"]}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 12.0006C17.9951 11.4745 17.7832 10.9715 17.41 10.6006L13.12 6.30056C12.9326 6.11431 12.6792 6.00977 12.415 6.00977C12.1508 6.00977 11.8974 6.11431 11.71 6.30056C11.6163 6.39352 11.5419 6.50412 11.4911 6.62598C11.4403 6.74784 11.4142 6.87855 11.4142 7.01056C11.4142 7.14257 11.4403 7.27328 11.4911 7.39513C11.5419 7.51699 11.6163 7.6276 11.71 7.72056L15 11.0006H5C4.73478 11.0006 4.48043 11.1059 4.29289 11.2935C4.10536 11.481 4 11.7353 4 12.0006C4 12.2658 4.10536 12.5201 4.29289 12.7077C4.48043 12.8952 4.73478 13.0006 5 13.0006H15L11.71 16.2906C11.5217 16.4775 11.4154 16.7317 11.4144 16.997C11.4135 17.2624 11.518 17.5173 11.705 17.7056C11.892 17.8939 12.1461 18.0002 12.4115 18.0011C12.6768 18.0021 12.9317 17.8975 13.12 17.7106L17.41 13.4106C17.7856 13.0372 17.9978 12.5301 18 12.0006Z"
                            fill="#FF6600"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default CapabilitiesItem;

