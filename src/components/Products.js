import styles from "./Products.module.css";
import ProductItem from "../root-components/product-item";
import {NavLink} from "react-router-dom";
import ImageDescriptionHolder from "../root-components/image-description-holder";

const Products = () => {
    const dummyItemConfig = [{
        image: "./rectangle-961@2x.png",
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.',
        to: "/home"
    }, {
        image: 'https://placekitten.com/300/200',
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    }, {
        image: "./rectangle-961@2x.png",
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    }, {
        image: "./rectangle-961@2x.png",
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    }]


    return (
        <div className={styles.parentContainer}>
            <div className={styles.fullWidth}>
                <div className={styles.descriptionComponent}>
                    <ImageDescriptionHolder description={{
                        "primary": {
                            "question": `What are we?`,
                            "content": "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed Lorem ipsum r sit amet consectetur.",
                        }
                    }} color={"#ffffff"} style={{marginLeft: 0}}/>
                </div>
            </div>
            <div className={styles.productList}>{
                dummyItemConfig.map((item, index) =>
                    <ProductItem itemConfig={item} key={index}/>
                )
            }</div>
            <div>
                <div className={"button"}>
                    <NavLink
                        to={"/products"}
                        style={{color: "white", textDecoration: "none"}}
                    >
                        <div className={"explore"}>VIEW PRODUCTS</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Products;
