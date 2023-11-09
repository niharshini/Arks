import styles from "./root-styles/product-item.module.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const ProductItem = ({itemConfig}) => {
    const [isClicked, setClicked] = useState(false)
    const navigate = useNavigate()
    const {image, title, description} = itemConfig;
    useEffect(() => {
        if (isClicked){
            if (itemConfig["to"]) {
                navigate(itemConfig["to"])
            }
        }
    }, [isClicked]);
    return (
        <div
            className={`${styles.container}`}
            onClick={
                () => {
                    setClicked(!isClicked)
                }
            }
        >
            <img src={image} alt="Item" className={styles.image}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

export default ProductItem;
